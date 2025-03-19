import crypto from "crypto";
import nodemailer from "nodemailer";
import User from "../../../(models)/user";
import { NextResponse } from "next/server";

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Password Reset" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text: `Good day, You are receiving this email because a request to reset your password has been made using this email address. Click here to reset your password: ${text}. If you wish not to change your password, simply ignore this email.`,
    html: `
    <p>Good day,</p>
    </br/>
    <p>You are receiving this email because a request to reset your password has been made using this email address.</p>
    </br/>
    <strong>Click here to reset your password: ${text}</strong>
    </br/>
    <p>If you wish not to change your password, simply ignore this email.</p>
    </br/>
    </br/>
    <p>Best Regards,</p>
    <p>African Youth Initiative on Climate Change</p>
    <img src="https://i.ibb.co/wrPKQBC7/ayicc-logo.png" alt="African Youth Initiative on Climate Change Logo" style="width: 50%; height: auto; display: block;"/>
    `,
  });
};

export async function POST(req) {
  try {
    const { email } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const token = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const resetURL = `${process.env.HREF}/reset-password?token=${token}`;
    await sendEmail(
      user.email,
      "Password Reset",
      `${resetURL}`
    );

    return NextResponse.json(
      { message: "Password reset link sent to your email." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error: ", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
