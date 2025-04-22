import User from "@/app/(models)/user";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function PUT(req, { params }) {
  const { id } = await params;
  try {
    if (!id) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (user.isVerified) {
      user.isVerified = false;
    } else {
      user.isVerified = true;
    }

    await user.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Set these in .env
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: `UPDATE ON YOUR MEMBERSHIP WITH AYICC`,
      text: `Dear ${user.firstName}, Your membership on the African Youth Initiative on Climate Change website has been updated. You have been ${user.isVerified ? "authorized to use" : "unauthorized from using"} the system. If you would like to enquire about this, contact the website administrator using ${process.env.ADMIN_EMAIL}. Thank you for your continued support. Regards.`,
      html: `
        <p>Dear ${user.firstName},</p>
        </br/>
        <p>Your membership on the African Youth Initiative on Climate Change website has been updated. You have been ${user.isVerified ? "authorized to use" : "unauthorized from using"} the system. If you would like to enquire about this, contact the website administrator using ${process.env.ADMIN_EMAIL}</p>
        </br/>
        <p>Thank you for your continued support.</p>
        </br/>
        <p>Sincerely,</p>
        </br/>
        <strong>AYICC</strong>
        <img src="https://i.ibb.co/KMBKtsx/ayicc-logo.png" alt="African Youth Initiative on Climate Change Logo" style="width: 50%; height: auto; display: block;"/>
                      `,
    });

    return NextResponse.json(
      {
        message: `The user has been ${
          user.isVerified ? "verified" : "unverified"
        }.`,
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
