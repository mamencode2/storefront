import prData from "@/data/prData";

export function currencyConvert(amount){
    let convertedCurr =new Intl.NumberFormat("am-ET", {
      maximumFractionDigits: 0,
        style: "currency",
        currency: "ETB",
        
      }).format(amount *65);
      let curAmt = convertedCurr.slice(2).trim()
      let symbol = convertedCurr.slice(0,2)
    return  {symbol,curAmt}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function sliceArray(array, sliceSize) {
  const slicedArrays = [];
  for (let i = 0; i < array.length; i += sliceSize) {
    const slice = array.slice(i, i + sliceSize);
    slicedArrays.push(slice);
  }
  return slicedArrays;
}
let count =0
let slicedproducts = sliceArray(prData,20)
export async function mockRequest(){
  if (count >= slicedproducts.length) {
    return []
  }
  await sleep(2000)
  count++

  return slicedproducts[count]
}