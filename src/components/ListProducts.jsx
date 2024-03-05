'use client'

import { DotLoading, Grid } from 'antd-mobile';
import React,{useState,useEffect} from 'react'
import { useInView } from 'react-intersection-observer';
import WishItem from './WishItem';
import { getProducts } from '@/actions/getProducts';
const NUMBER_OF_PRODUCTS_TO_FETCH = 10;

const InfiniteScroller = (props) => {
  const { children, loading, loadNext } = props;
  const scrollListener = useRef(loadNext);
  useEffect(() => {
    scrollListener.current = loadNext;
  }, [loadNext]);
  const onScroll = () => {
    const documentHeight = document.documentElement.scrollHeight;
    const scrollDifference = Math.floor(window.innerHeight + window.scrollY);
    const scrollEnded = documentHeight == scrollDifference;
    if (scrollEnded && !loading) {
      scrollListener.current();
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return <>{children}</>;
};
export default function ListProducts({initialProducts}) {
    const [offset, setOffset] = useState(NUMBER_OF_PRODUCTS_TO_FETCH)
    const [products,setProducts]= useState(initialProducts)
    const { ref, inView } = useInView();
const loadMoreProducts=async () =>{
    const apiProducts = await getProducts(offset,NUMBER_OF_PRODUCTS_TO_FETCH)
    setProducts([...products,...apiProducts])
    setOffset(offset+NUMBER_OF_PRODUCTS_TO_FETCH)
}

useEffect(()=>{
if (inView) {
    loadMoreProducts()
}
},[inView])
  return (
    <div>
        <Grid columns={2} gap={6}
        style={{
          background: '#f1f1f1',
          padding: '0 6.2px'
        }}
      >
        {products.map((item)=>(
            <WishItem
            key={item.key}
            item={item}
          />
        ))}

        <div className=""
        ref={ref}
        >
            <DotLoading/>
        </div>
      </Grid>
    </div>
  )
}
