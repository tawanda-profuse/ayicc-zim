import { NextResponse } from "next/server";
import Event from "@/app/(models)/events";

export async function GET() {
  try {
    const events = await Event.find().sort({date: 'desc'}).limit(3);

    return NextResponse.json({ events }, { status: 200 });
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
    const newEvent = new Event(body);

    await newEvent.save();
    return NextResponse.json(
      { message: "New event created successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error: ", error);
    return NextResponse.json({ message: `Error: ${error}` }, { status: 500 });
  }
}
