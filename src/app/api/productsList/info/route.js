import { NextRequest,NextResponse } from "next/server";
import { cookies,headers } from "next/headers";

export async function GET(request){
try {
    console.log(request)
    return NextResponse.json({
        msg:"ok",
        status:200
    })
} catch (error) {
    return NextResponse.json({
        msg:"error",
        status:404
    })
}
}