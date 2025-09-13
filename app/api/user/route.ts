import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


const client = new PrismaClient();

// export async function GET() {
//     const user = await client.user.findFirst({
//     })

//     return NextResponse.json({
//         email : user?.email,
//         username : "chaitanya122"
//     })
// }

// 
export async function POST(request: Request) {
    const body = await request.json();
    // console.log("Username:" ,username);
    // console.log("Password:" , password);
    try {
        await client.user.create({
            data: {
                email: body.username,
                password: body.password
            }
        })
        return NextResponse.json({message: "Sign up successfully", body})
    } catch (error) {
        return NextResponse.json({message: error})
    }

}