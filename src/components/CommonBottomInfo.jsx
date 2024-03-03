'use-client'

import { currencyConvert } from '@/utils/helper'
import React from 'react'

export default function CommonBottomInfo({ product }) {
    let salePrice = currencyConvert(Number(product.salePrice.amount))
    let retailPrice = currencyConvert(Number(product.retailPrice.amount))
    return (
        <div
            className=""
            style={{
                marginTop: "8.3px",
                padding: "0 12px",

            }}
        >
            <div
                className=""
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <div className=""
                style={{
                    display:'flex',
                    alignItems:'center'
                }}
                >
                    <span
                        style={{
                            fontSize: "20px",
                            fontWeight: "400",
                            color: Number(product.salePrice.amount) < Number(product.retailPrice.amount) ? "#fa6338" : '',
                        }}
                    >
                        {salePrice.curAmt}
                    </span>
                    {" "}
                    <span
                        style={{
                            fontSize: "12px",
                        }}
                    >
                        ብር
                    </span>
                    <div className=""
                    style={{
                        marginLeft:'8px'
                    }}
                    >
                    <span
                        style={{
                            fontSize: "12px",
                            textDecoration:'line-through'
                        }}
                    >
                        {retailPrice.curAmt}
                        {' '}
                        ብር
                    </span>

                    </div>
                </div>
                <div className="" />
            </div>
            <div className="goods-name">
                <h1 className='detail-title'
                 style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                    <span className="detail-title-text">
                        {product.goods_name}
                    </span>
                </h1>
            </div>
        </div>
    )
}

