'use client'
import { Grid, Card } from 'antd-mobile'
import React from 'react'

export default function WishItem({ item }) {
    return (
        <Grid.Item>
            <Card>




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
