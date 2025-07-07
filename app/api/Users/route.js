import User from "@/app/(models)/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const firstName = searchParams.get("firstName") || "";
    const lastName = searchParams.get("lastName") || "";
    const userType = searchParams.get("userType") || "";
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;

    const query = {};
    if (firstName) query.firstName = { $regex: firstName, $options: "i" };
    if (lastName) query.lastName = { $regex: lastName, $options: "i" };
    if (userType) query.userType = { $regex: userType, $options: "i" };

    const users = await User.find(query)
      .sort({ lastName: "asc" })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalCount = await User.countDocuments(query); // Count total matching records

    return NextResponse.json(
      {
        data: users,
        totalPages: Math.ceil(totalCount / limit),
        currentPage: Number(page),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error: ", error);
    return NextResponse.json(
      { message: "An error has occurred" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body;

    if (!userData.email || !userData.password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const duplicate = await User.findOne({ email: userData.email })
      .lean()
      .exec();

    if (duplicate) {
      return NextResponse.json(
        { message: "A user with that email already exists." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    userData.role =
      userData.email === process.env.ADMIN_EMAIL ? "admin" : "user";
    if (userData.email === process.env.ADMIN_EMAIL) {
      userData.isVerified = true;
    }

    await User.create(userData);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Set these in .env
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Member Registration`,
      text: `Good day, a new member has been registered with the following details:\nName: ${userData.firstName} ${userData.lastName}\nEmail: ${userData.email}\nRegistration Type: ${userData.userType}\n\nThe new member will not be able to login until you authorize them. You can authorize users by logging in and going to the Admin Portal.`,
      html: `
          <p>Good day,</p>
          <p>A new member has been registered with the following details:</p>
          </br/>
          <ul>
          <li><strong>Name:</strong> ${userData.firstName} ${userData.lastName}</li>
          <li><strong>Email:</strong> ${userData.email}</li>
          <li><strong>Registration Type:</strong> ${userData.userType}</li>
          </ul>
          </br/>
          </br/>
          <p>The new member will not be able to login until you authorize them. You can authorize users by logging in and going to the Admin Portal.</p>
          </br/>
          <p>Regards,</p>`,
    });

    return NextResponse.json(
      { message: "User successfully created" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error: ", error }, { status: 500 });
  }
}
