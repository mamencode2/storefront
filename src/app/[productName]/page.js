//import React from 'react'

import DetailPagePresent from "@/components/detail-page-present"
import { HomeComp } from "@/components/home-comp"
import prData from "@/data/prData"
import productData from "@/data/productData"

export default function page({ params }) {
  let [productUrlName, productKey] = params.productName.split('-p-')



  let product = prData.find((item) => item.key === productKey)

  return (
    <div>
      <DetailPagePresent
        product={product}
      />
    </div>
  )
}
