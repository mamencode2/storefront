'use client'

import CartBadge from '@/components/CartBadge'
import { Button, ErrorBlock, NavBar, Space } from 'antd-mobile'
import { useRouter } from 'next/navigation'
import { UnorderedListOutline } from "antd-mobile-icons";
import React from 'react'
import { useSelector } from 'react-redux';
import WishListItems from '@/components/WishListItems';

export default function WishListLayout({ children }) {
  const { savedItems } = useSelector((state) => state.favItem)
  return (
    <div
      style={{
        padding: '8px 12px'
      }}
    >
      <HeaderElement />
      {savedItems.length > 0 ? <WishListItems /> : <EmpetyWishList />}
      {children}
    </div>
  )
}

function EmpetyWishList() {
  return (
    <ErrorBlock
      image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
      style={{
        '--image-height': '150px',
      }}
      description={
        <span>
          Wish List Empety
        </span>
      }
    >
      <Button color='primary'>Shop Now</Button>
    </ErrorBlock>
  )
}
function HeaderElement() {
  const router = useRouter()

  const right = (
    <div  >
      <Space style={{ '--gap': '10px' }}>
        < UnorderedListOutline fontSize={24} />
        <CartBadge />
      </Space>
    </div>
  )
  return (
    <NavBar
      onBack={() => {
        router.back()
      }}

      right={right}
    >
      <h3
        style={{
          fontWeight: 'bold'
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
