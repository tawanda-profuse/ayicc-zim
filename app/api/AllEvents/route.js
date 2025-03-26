import { NextResponse } from "next/server";
import Event from "@/app/(models)/events";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const location = searchParams.get("location") || "";
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;

    const query = {};
    if (location) query.location = { $regex: location, $options: "i" };

    const events = await Event.find(query)
      .sort({ date: "asc" })
      .skip((page - 1) * limit)
      .limit(Number(limit));
    const totalCount = await Event.countDocuments(query);

    return NextResponse.json(
      {
        data: events,
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
