//import React from 'react'

import { getProduct } from "@/actions/getProducts"
import DetailPagePresent from "@/components/detail-page-present"
import { HomeComp } from "@/components/home-comp"
import prData from "@/data/prData"
import productData from "@/data/productData"

export default async function page({ params }) {
  let [productUrlName, productKey] = params.productName.split('-p-')



  let product = await getProduct(productKey)

  return (
    <div>
      <DetailPagePresent
        product={product}
      />
    </div>
  )
}
