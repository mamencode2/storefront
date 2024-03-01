"use client";
import React, { useEffect, useState } from "react";
import { HeartOutline, HeartFill } from "antd-mobile-icons";
import { Button } from "antd-mobile";
import { useDispatch, useSelector } from "react-redux";
import { addItemToFevList,removeItemFromList } from "@/redux/slices/favItemSlice";
//import { addItemToFevList, removeItemFromList } from "@/redux/slices/favItemSclice";

export default function AddToCartFrm({product}) {
    const [isLiked, setLiked]= useState(false)
const {savedItems} = useSelector((state)=> state.favItem)
console.log(savedItems)
    function handleFevAddRemove(){
       console.log(product) 
    }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
        maxWidth: "390px",
        padding: "8px 10px",
      }}
    >
      {isLiked ? (
        <HeartFill
        onClick={handleFevAddRemove}
          fontSize={45}
          style={{
            marginRight: "8px",
          }}
        />
      ) : (
        <HeartOutline
        onClick={handleFevAddRemove}
          fontSize={45}
          style={{
            marginRight: "8px",
          }}
        />
      )}

      <Button
        block
        size="large"
        style={{
          "--background-color": "#000",
          textTransform: "uppercase",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Add To Cart
      </Button>
    </div>
  )
}
