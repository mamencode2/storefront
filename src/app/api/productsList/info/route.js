import { NextRequest,NextResponse } from "next/server";
import { cookies,headers } from "next/headers";
import storwithD from "@/data/storwithD";

export async function GET(request){
    const searchParams = request.nextUrl.searchParams
    let request_type = searchParams.get('request_type')
    let limit = searchParams.get('limit')
    let page = searchParams.get('page')

    console.log(request_type,limit,page)
try {
    let products = storwithD.map((sdata) => sdata.pItems).flat();
    //console.log(request)
    console.log(products.length)
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