//import React from 'react'

import { HomeComp } from "@/components/home-comp"
import productData from "@/data/productData"

export default function page({ params }) {
  let [productUrlName, productKey] = params.productName.split('-p-')



  let product = productData.find((item) => item.key === productKey)

  return (
    <div>
      <HomeComp
        product={product}
      />
    </div>
  )
}
