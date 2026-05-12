import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)

    const  query  = searchParams.get("q")

    const res = await fetch(
      `https://suggestqueries.google.com/complete/search?client=chrome&q=${query}`,
    );
    const data = await res.json();
    console.log(data);

    return NextResponse.json(data);
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
