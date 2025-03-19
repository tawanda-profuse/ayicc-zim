import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message, subject } = body;

    if (!body.message) {
      return NextResponse.json(
        { message: "The message field is required." },
        { status: 401 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Set these in .env
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"AYICC Contact Form" <${process.env.EMAIL_USER}>`,
      to: "ayicczim@gmail.com",
      subject: `New Contact Form Submission - ${subject}`,
      text: `From: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
              <strong>From:</strong> ${name || ""}
              <br/>
              <strong>Email:</strong> ${email || ""}
              <br/>
              <strong>Subject:</strong> ${subject || ""}
              <br/>
              <br/>
              <strong>Message:</strong> ${message}
              `,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error has occurred preventing the successful delivery of your message. Please try again later." },
      { status: 500 }
    );
  }
}

