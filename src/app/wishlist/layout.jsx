'use client'

import CartBadge from '@/components/CartBadge'
import { NavBar, Space } from 'antd-mobile'
import { useRouter } from 'next/navigation'
import { UnorderedListOutline } from "antd-mobile-icons";
import React from 'react'

export default function WishListLayout({children}) {
  return (
    <div
    style={{
        padding:'8px 12px'
    }}
    >
<HeaderElement/>
        {children}
    </div>
  )
}


function HeaderElement(){
    const router = useRouter()

    const right = (
        <div style={{ fontSize: 24 }}>
          <Space style={{ '--gap': '16px' }}>
            < UnorderedListOutline/>
            <CartBadge/>
          </Space>
        </div>
      )
    return(
        <NavBar
        onBack={()=>{
            router.back()
        }}

        right={right}
        >
            <h3
            style={{
                fontWeight:'bold'
            }}
            >
                WishList
            </h3>
        </NavBar>
    )
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
