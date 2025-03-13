import { NextResponse } from "next/server";
import Event from "@/app/(models)/events";

export async function GET() {
  try {
    const events = await Event.find().sort({date: 'desc'});
    return NextResponse.json({ events }, { status: 200 });
  } catch (error) {
    console.error("Error: ", error);
    return NextResponse.json(
      { message: "An error has occurred" },
      { status: 500 }
    );
  }
}