'use client'


import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Link from "next/link";
import { AddToCart } from "./add-to-cart";

export function HomeComp({product}) {
  console.log(product.detail_image)
  console.log(product)
  
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between px-4 py-2"
      
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        
        backgroundColor:"white"
      }}
      >
        <ArrowLeftIcon className="text-black" />
        <div className="flex-1 text-center font-bold text-black">SHEIN</div>
        <div className="flex space-x-2">
          <SearchIcon className="text-black" />
          <Link href='/cart'>
          <ShoppingCartIcon className="text-black" />
          </Link>
        </div>
      </div>
      <Carousel className="relative">
        <CarouselContent>
          {Array.from(Array(5)).map((_,i)=>(
            <CarouselItem
            key={i}
            >
            <img
              alt="Yellow Spaghetti Strap Tank Top And Floral Printed Denim Shorts"
              className="w-full max-h-[45vh]"
            
              src={product.goods_img}
              style={{
                aspectRatio: "300/500",
                objectFit: "cover",
              }}
              width="300" />
          </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="relative">
        

        <div
          className="absolute bottom-0 left-0 right-0 flex justify-center bg-white bg-opacity-75 py-1">
          <span className="text-xs text-black">1/7</span>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="flex items-baseline justify-between">
          <div className="flex items-baseline">
            <span className="text-lg font-bold text-black">
              {product.salePrice.amountWithSymbol}
            </span>
            <span className="ml-2 text-sm line-through text-gray-500">
            {product.retailPrice.amountWithSymbol}

            </span>
            <span className="ml-1 rounded bg-red-200 px-1 text-xs text-red-600">-14%</span>
          </div>
          <div className="flex items-center">
            <StarIcon className="text-yellow-400" />
            <span className="ml-1 text-sm text-black">5.00 (1)</span>
          </div>
        </div>
        <div className="mt-1">
          <h1 className="text-lg font-bold text-black"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          >
           {product.goods_name }
          </h1>
        </div>
        <div className="mt-4">
          <Select>
            <SelectTrigger id="size">
              <SelectValue placeholder="Size US" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="8Y">8Y(48-50IN)</SelectItem>
              <SelectItem value="9Y">9Y(50-53IN)</SelectItem>
              <SelectItem value="10Y">10Y(53-55IN)</SelectItem>
              <SelectItem value="11Y">11Y(55-58IN)</SelectItem>
              <SelectItem value="12Y">12Y(58-60IN)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold text-black">Promotion</h2>
          <div className="mt-2 flex space-x-4">
            <Badge variant="secondary">10% OFF For orders $69.00+</Badge>
            <Badge variant="secondary">15% OFF For orders $109.00...</Badge>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold text-black">Shipping to United States</h2>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <TruckIcon className="text-green-600" />
              <span className="ml-2 text-sm text-black">Free standard shipping on orders over $29.00</span>
            </div>
            <span className="text-sm text-gray-500">Estimated to be delivered on 03/09/2024 -</span>
          </div>
        </div>
        <div >
          <AddToCart/>
        </div>
      </div>
    </div>
  );
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


function TruckIcon(props) {
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
      <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
      <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
      <circle cx="7" cy="18" r="2" />
      <path d="M15 18H9" />
      <circle cx="17" cy="18" r="2" />
    </svg>)
  );
}
