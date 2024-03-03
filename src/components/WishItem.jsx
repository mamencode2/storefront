'use client'
import { currencyConvert } from '@/utils/helper'
import { Grid, Card, Image } from 'antd-mobile'
import Link from 'next/link'
import React from 'react'

export default function WishItem({ item }) {
    return (
        <Grid.Item
            style={{
                backgroundColor: 'white',

                borderTopLeftRadius: '4px',

                borderTopRightRadius: '4px'


            }}
        >




            <div
                style={{
                    paddingBottom: '20px'
                }}

            >
                <Link

                    href={`${item.goods_url_name.split(' ').map((wrd) => wrd).join('-')}-p-${item.key}`}



                >

                    <Image src={item.goods_img}
                        style={{
                            borderTopLeftRadius: '4px',

                            borderTopRightRadius: '4px'

                        }}

                    />
                </Link>

                <div className="goods-name"
                    style={{
                        marginTop: '8px'
                    }}
                >
                    <h1 className='detail-title'
                        style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            padding: '0 8px'
                        }}
                    >
                        <span className="detail-title-text">
                            {item.goods_name}
                        </span>
                    </h1>
                    
                </div>

                <PriceLable
product={item}
                    />
            </div>
        </Grid.Item>
    )
}


function PriceLable({product}){
    let salePrice = currencyConvert(Number(product.salePrice.amount))
    let retailPrice = currencyConvert(Number(product.retailPrice.amount))
    return(
        <div
                className=""
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: '0 8px'
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
                            fontSize: "17px",
                            fontWeight: "600",
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
    )
}