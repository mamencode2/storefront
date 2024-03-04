'use client'
import { Button, Image, Skeleton } from 'antd-mobile'
import React from 'react'

export default function StoreCard({ store }) {
    store = {
        "storeCode": 2452103564,
        "title": "SHEIN ICON",
        "logo": "https://img.ltwebstatic.com/images3_srm/2023/07/14/1689316995256c877762064041b0a7ccca2c7b9b2e.png",
        "descriptions": "SHEIN ICON ensures you never go unnoticed with their always-trendy & equally edgy looks.",
        "storeStatus": 1,
        "storeType": 2,
        "storeStoreType": 2,
        "salesArea": 0,
        "stockMode": 0,
        "tocPerformParty": 0,
        "sellerId": 2000000015,
        "sellerSource": 1,
        "storeBusinessType": 1,
        "subjectId": null,
        "isBrandStore": false,
        "quantity": 17228,
        "labels": [
            {
                "labelCode": "Show_Description",
                "labelName": "展示描述",
                "storeCode": 2452103564
            }
        ],
        "followsCount": "51K",
        "followsStatus": null,
        "score": "4.87",
        "storeServicePolicyLabel": [],
        "siteUid": "pwus",
        "link": "/store-comment?shop_id=2452103564",
        "storeBG": "https://img.ltwebstatic.com/images3_pi/2023/12/14/2b/1702535021f0db7ea12bb0c26113852216c444c60d_thumbnail_405x552.jpg",
        "hideStoreWishlist": false
    }
    return (
        <div className="p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Image
                        style={{
                            width: "50px",
                            height: "50px"
                        }}
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
                        backgroundColor: "black",
                        color: "white"
                    }}
                >+ Follow</Button>
            </div>
        </div>
    )
}
