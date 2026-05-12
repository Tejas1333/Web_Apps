import googleTrends from "google-trends-api";
import { NextResponse } from "next/server";

export  async function GET() {
  try {
    const result  = await fetch("https://suggestqueries.google.com/complete/search?client=chrome&q=currenttrends")

    const data = await result.json()
    console.log(data);

    return NextResponse.json(data);
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "server error" }, { status: 500 });
  }
}
