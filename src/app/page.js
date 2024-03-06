import { getProducts } from "@/actions/getProducts";
import HomeHeader from "@/components/HomeHeader";
import ListProducts from "@/components/ListProducts";
import { BottomNav } from "@/components/bottom-nav";
import { HomeComp } from "@/components/home-comp";
import { StoreFront } from "@/components/store-front";

const NUMBER_OF_PRODUCTS_TO_FETCH = 10;
export default async function Home({ searchParams }) {
  //console.log(searchParams.getAll())
  const requestType = searchParams.requestType ||'firstload'
  const page = searchParams.page ||'1' 
  console.log(requestType,page)
  let initialProducts = await getProducts(0, NUMBER_OF_PRODUCTS_TO_FETCH,requestType,page)
  return (
    <>
      <HomeHeader />
      <StoreFront />
      <ListProducts
        initialProducts={initialProducts}
      />
      <BottomNav />
    </>
  );
}
