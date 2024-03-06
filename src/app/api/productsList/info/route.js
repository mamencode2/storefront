import { NextRequest,NextResponse } from "next/server";
import { cookies,headers } from "next/headers";
import storwithD from "@/data/storwithD";

export async function GET(request){
    const searchParams = request.nextUrl.searchParams
    let request_type = searchParams.get('request_type')
    let limit = Number(searchParams.get('limit')) ||20
    let page = Number(searchParams.get('page'))

    console.log(limit,page)
    let strIndex= (page-1)*limit
    let endIndex = (strIndex+limit)-1
    console.log(strIndex,endIndex)
try {
    let products = storwithD.map((sdata) => sdata.pItems).flat();
    //console.log(request)
    let totalItems=products.length
    console.log()
    let responseProducts = products.slice(strIndex,endIndex+1)
    // const maxPage = Math.ceil(totalItems/Number(limit))
    // const requestedPage = Math.min(page,maxPage)
    // const startItem = (requestedPage-1)*limit
    // const endItem = Math.min(startItem+limit-1,totalItems-1)
    // let responseProducts =products.slice(startItem,endItem)
    // console.log(responseProducts.length)
    return NextResponse.json(responseProducts)
} catch (error) {
    return NextResponse.json({
        msg:"error",
        status:404
    })
}
}