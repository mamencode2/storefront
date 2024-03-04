'use client'
import { Button, Image, Skeleton } from 'antd-mobile'
import React from 'react'

export default function StoreCard({ store }) {
    return (
        <div className="p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Image

                        src={store.logo}
                        alt={store.title}
                        fit='cover'
                        placeholder={
                            <Skeleton
                                style={{
                                    width: "50px",
                                    height: "50px"
                                }}
                            />
                        }
                    />
                    <div className="ml-2">
                        <div className="font-bold">
                            {store.title}
                        </div>
                        <div className="flex mt-1 space-x-4">
                            <div className="text-center">
                                <div className="font-bold">{store.score}</div>
                                <div className="text-xs text-gray-500">Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold">{Math.round(store.quantity / 1000)}K</div>
                                <div className="text-xs text-gray-500">Items</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold">
                                    {store.followsCount}
                                </div>
                                <div className="text-xs text-gray-500">Followers</div>
                            </div>
                        </div>

                    </div>
                </div>
                <Button
                style={{
                    backgroundColor:"black",
                    color:"white"
                }}
                >+ Follow</Button>
            </div>
        </div>
    )
}
