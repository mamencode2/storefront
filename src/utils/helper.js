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