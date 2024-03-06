'use client'
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { DotLoading, Grid } from 'antd-mobile';
import WishItem from './WishItem';


let page =1
export default function LoadMore() {
    const {ref,inView}= useInView()
    const [data,setData]= useState([])
  return (
    <div>LoadMore</div>
  )
}
