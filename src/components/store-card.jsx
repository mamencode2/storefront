'use client'

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/kc4UYSxz1tk
 */
import { Button } from "@/components/ui/button"
import { RightOutline } from "antd-mobile-icons";
import { Button as AntButton, Image } from 'antd-mobile'
import Link from 'next/link';
import { useEffect, useState } from "react";
import { getStoreData } from "@/actions/getProducts";
export function StoreCard({ product }) {
  const [storeData, setStoreData] = useState({})
  let sCode = product.store_code

  useEffect(() => {
    const sDRes = async () => {
      let rd = await getStoreData(sCode)
      console.log(rd)
      setStoreData(rd.store)
    }
    sDRes()

  }, [sCode])
  return (
    (<div className="max-w-[500px]  p-2"

      style={{
        width: '100%',
        backgroundColor: "white",
        marginTop: "8.3px",
      }}
    >
      <div className="flex items-center space-x-4"
        style={{
          padding: '10px 12.5px',
          paddingBottom: '16px'
        }}
      >
        <div className="flex justify-between items-center">
          <Image
            src={storeData.logo}
            fit="cover"
            style={{
              width: "50px",
              height: "50px",
              marginRight: "5px"
            }}
          />
          <div className="flex-1">
            <h1
              style={{
                fontSize: "14px"
              }}

              className=" font-bold">{storeData.title}</h1>
            <div className="">
            <p className="text-sm text-gray-500 truncate  desc-new"
              style={{
                maxWidth: "250px"
              }}
            >{storeData.descriptions}</p>
            </div>
          </div>
        </div>
        <div className="">
          <RightOutline fontSize={14}
            style={{

            }}
          />
        </div>
      </div>
      <div className="flex justify-between    px-3">
        <div className="text-center">
          <div className="text-[12px] font-semibold">{storeData.score}</div>
          <div className="text-[11px] text-gray-500">Rating</div>
        </div>
        <div className=" px-4">
          <div className="text-[12px] font-semibold">
            {storeData.quantity > 1000 ? `${Math.round(storeData.quantity / 1000)}K` : `${storeData.quantity}`}
          </div>
          <div className="text-[11px] text-gray-500">Items</div>
        </div>
        <div className="text-center">
          <div className="text-[12px] font-semibold">{storeData.followsCount}</div>
          <div className="text-[11px] text-gray-500">Followers</div>
        </div>
      </div>
      <div className="flex space-x-4 mt-4 mx-2">
        <AntButton shape="rounded" className="flex-1" variant="outline"
          style={{
            fontSize: "14px",
            fontWeight: "600"
          }}
        >
          + Follow
        </AntButton>
        <AntButton shape="rounded" className="flex-1" variant="outline"
          style={{
            fontSize: "14px",
            fontWeight: "600"
          }}
        >
          All Items
        </AntButton>
      </div>
    </div>)
  );
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>)
  );
}
