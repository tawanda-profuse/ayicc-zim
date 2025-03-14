import User from "@/app/(models)/user";
import { NextResponse } from "next/server";

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

    return NextResponse.json(
      {
        message: `The users has been ${user.isVerified ? "verified" : "unverified"}.`,
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
