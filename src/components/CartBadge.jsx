'use client'


import { Badge } from 'antd-mobile';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';
import { HeartOutline, HeartFill } from "antd-mobile-icons";
export function WishBadge(){
  const {savedItems}= useSelector((state)=> state.favItem)

  return(
    <Link href='/wishlist'>
      <Badge
      content={savedItems.length>0 ?Badge.dot:''}
      >
        <HeartOutline
        fontSize={24}
        color='#222'
        />
      </Badge>
    </Link>
  )
}
export default function CartBadge() {
    const {cartItems}= useSelector((state)=> state.cart)

  return (
    <Link href='/cart'>
    <Badge
    content={cartItems.length >0? cartItems.length:''}
    >

    <ShoppingCartIcon className="text-black" />
    </Badge>
</Link>
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
