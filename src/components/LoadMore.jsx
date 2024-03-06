"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { DotLoading, Grid } from "antd-mobile";
import WishItem from "./WishItem";
import Image from "next/image";

async function fetchProductss(page,limit){
    let response = await fetch(`/api/productsList/info?page=${page}&limit=${limit}`, { cache: 'force-cache' })

    let data = await response.json()
    return data
}
let page = 1;
export default function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState([]);

  useEffect(()=>{
if (inView) {
    fetchProductss(page,10).then((res)=>{
      
      setData((prevData)=> [...prevData,...res])
        //setData([...data,...res])
        page++
    })
}
  },[inView,data,page])
  console.log(data)
  return (
    <div>
      <Grid
        columns={2}
        gap={6}
        style={{
          background: "#f1f1f1",
          padding: "0 6.2px",
        }}
      >
        {data.map((item) => (
          <WishItem key={item.key} item={item} />
        ))}
      </Grid>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
