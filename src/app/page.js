import { getProducts } from "@/actions/getProducts";
import HomeHeader from "@/components/HomeHeader";
import ListProducts from "@/components/ListProducts";
import { BottomNav } from "@/components/bottom-nav";
import { HomeComp } from "@/components/home-comp";
import { StoreFront } from "@/components/store-front";

const NUMBER_OF_PRODUCTS_TO_FETCH = 10;
export default async function Home() {
  let initialProducts = await getProducts(0,NUMBER_OF_PRODUCTS_TO_FETCH)
  return (
    <>
    <HomeHeader/> 
    <StoreFront />
    <ListProducts
initialProducts={initialProducts}
    />
    <BottomNav />
    </>
  );
}
