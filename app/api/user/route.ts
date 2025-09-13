import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        username : "chaitanya",
        email : "chaitanya@gmail"
    })
}