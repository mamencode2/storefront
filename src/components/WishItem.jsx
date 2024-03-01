'use client'
import { Grid, Card, Image } from 'antd-mobile'
import React from 'react'

export default function WishItem({ item }) {
    return (
        <Grid.Item
            style={{
                backgroundColor: 'white',
                borderRadius: '10px'

            }}
        >

            <div
                style={{
                    paddingBottom: '20px'
                }}

            >

                <Image src={item.goods_img} 
                style={{
                    borderTopLeftRadius:'10px',
                    borderTopRightRadius:'10px'

                }}

                />


                <div className="goods-name">
                    <h1 className='detail-title'
                        style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                        }}
                    >
                        <span className="detail-title-text">
                            {item.goods_name}
                        </span>
                    </h1>
                </div>
            </div>
        </Grid.Item>
    )
}
