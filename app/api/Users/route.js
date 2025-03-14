import User from "@/app/(models)/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function GET() {
  try {
    const users = await User.find().sort({ lastName: "asc" });

    return NextResponse.json({ users }, { status: 200 });
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
    return NextResponse.json(
      { message: "User successfully created" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error: ", error }, { status: 500 });
  }
}
