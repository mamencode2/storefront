'use client'
import { currencyConvert } from '@/utils/helper';
//import { Swiper ,Image, Skeleton} from 'antd-mobile/es/components/swiper/swiper';
import { Image, ImageViewer, Skeleton, SwipeAction, Swiper } from 'antd-mobile';
import Link from 'next/link';
import React, { useState } from 'react'
import AddToCartFrm from './AddToCartFrm';
import { useRouter } from 'next/navigation';

export default function DetailPagePresent({ product }) {
    return (
        <div>
            <DetailHeader />
            <HeroBanner
                product={product}
            />

            <AddToCartFrm

                product={product}
            />
        </div>
    )
}

function BottomInfo({ product }) {
    let salePrice = currencyConvert(Number(product.salePrice.amount))
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
                <div className="">
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
                </div>
                <div className="" />
            </div>
            <h3>Bottom Info</h3>
        </div>
    )
}
function HeroBanner({ product }) {
    console.log(product)
    const [currentIndex, setCurrentIndex] = useState(0);
    let dImgs = [...product.detail_image, product.goods_img]
    const [isVisible, setVisible] = useState(false);
    //console.log(dImgs)

    let items = dImgs.map((item, index) => (
        <Swiper.Item key={index}
            onClick={() => {
                setVisible(true);
                setCurrentIndex(index);
            }}

        >
            <Image
                style={{
                    marginRight: "8px",
                }}
                src={
                    item
                    // "data:image/jpeg;base64, " + arrayBufferToBase64(photo.bufImg.data)
                }
                placeholder={
                    <Skeleton
                        style={{
                            width: "100vw",
                            maxHeight: "60vh",
                        }}
                    />
                }
            />
        </Swiper.Item>
    ))

    function MultiImgElemets() {
        return (
            <ImageViewer.Multi
                visible={isVisible}
                images={dImgs}
                onClose={() => {
                    setVisible(false);
                }}
                defaultIndex={currentIndex}
                onIndexChange={(index) => {
                    setCurrentIndex(index);
                }}
            />
        )
    }
    return (
        <>
            {isVisible ? <MultiImgElemets /> : (
                <>
                    <Swiper
                        slideSize={68}
                        onIndexChange={(index) => {
                            setCurrentIndex(index);
                        }}
                        defaultIndex={currentIndex}

                    >
                        {items}
                    </Swiper>
                    <BottomInfo
                        product={product}
                    />
                </>
            )}
        </>
    )
}
function DetailHeader(props) {
    const router = useRouter();
    return (
        <div className="flex items-center justify-between px-4 py-2"

            style={{
                position: "sticky",
                top: 0,
                zIndex: 999,

                backgroundColor: "white"
            }}
        >
            <ArrowLeftIcon className="text-black"
                onClick={() => router.back()}

            />
            <div className="flex-1 text-center font-bold text-black">SHEIN</div>
            <div className="flex space-x-2">
                <SearchIcon className="text-black" />
                <Link href='/cart'>
                    <ShoppingCartIcon className="text-black" />
                </Link>
            </div>
        </div>
    )
}

function ArrowLeftIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
        </svg>)
    );
}


function SearchIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>)
    );
}


function ShoppingCartIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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


function StarIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>)
    );
}