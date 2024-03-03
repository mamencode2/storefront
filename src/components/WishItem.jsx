'use client'
import { currencyConvert } from '@/utils/helper'
import { Grid, Card, Image, Popup } from 'antd-mobile'
import Link from 'next/link'
import React, { useState } from 'react'
import { CloseOutline } from "antd-mobile-icons";
import AddToCartFrm from './AddToCartFrm'

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


function PriceLable({ product }) {
    let salePrice = currencyConvert(Number(product.salePrice.amount))
    let retailPrice = currencyConvert(Number(product.retailPrice.amount))
    return (
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
                    display: 'flex',
                    alignItems: 'center'
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
                        marginLeft: '8px'
                    }}
                >
                    <span
                        style={{
                            fontSize: "12px",
                            textDecoration: 'line-through'
                        }}
                    >
                        {retailPrice.curAmt}
                        {' '}
                        ብር
                    </span>

                </div>
            </div>
            <QuickView product={product} />

        </div>
    )
}


function ShoppingCartIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path
                d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>)
    );
}


function QuickView({ product }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <div className="" role='button'
                style={{
                    border: '1px solid black',
                    padding: '2px 8px',
                    borderRadius: '45%'
                }}
                onClick={() => setOpen(true)}

            >
                <ShoppingCartIcon />
            </div>
            <Popup visible={isOpen}
                closeOnMaskClick
                position='bottom'
                bodyStyle={{
                    maxHeight: '80vh',
                    minHeight: '50vh'
                }}
                onClose={() => {
                    setOpen(false)
                }}
            >
                <div className="">

                    <div className=""
                        style={{
                            padding: "8px 12.5px"
                        }}
                    >
                        <PopupHeader onClose={() => setOpen(false)} />
                        <h1> hello {product.goods_name}</h1>
                    </div>
                    <AddToCartFrm
                        product={product}
                    />
                </div>


            </Popup>

        </>
    )
}

function PopupHeader({ onClose }) {
    return  (
        <div style={{
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <div className="" role='button'
            
            onClick={onClose}
            >
                <CloseOutline />
            </div>
            <div className=""></div>
        </div>
    )
}