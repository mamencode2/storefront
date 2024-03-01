'use client'
import { Grid, Card, Image } from 'antd-mobile'
import React from 'react'

export default function WishItem({ item }) {
    return (
        <Grid.Item
            style={{
                backgroundColor: 'gray',
                borderRadius: '10px'

            }}
        >
            <Card
                style={{
                    padding: '0px'
                }}

            >

                <Image src={item.goods_img} />


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
            </Card>
        </Grid.Item>
    )
}
