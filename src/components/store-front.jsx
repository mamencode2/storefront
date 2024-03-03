/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/mZGP5GkWGQ1
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, Select } from "@/components/ui/select"
import productData from "@/data/productData";
import Link from "next/link";
import prData from "@/data/prData";

export function StoreFront() {
  return (
    (<div className="max-w-[600px] mx-auto bg-white">
      <div className="flex items-center justify-between p-4 border-b"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        
        backgroundColor:"white"
      }}
      
      >
        <MenuIcon className="text-black" />
        <Input className="flex-1 mx-2" placeholder="Search This Store" type="search" />
        <Link href='/wishlist'>

        <HeartIcon className="text-black" />
        
        </Link>
        <MoreVerticalIcon className="text-black" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              alt="SHEIN Kids SUNSHNE"
              className="h-12 w-12"
              height="50"
              src="https://img.ltwebstatic.com/images3_srm/2023/12/15/27/1702628520a24f30493940c377056687623a8beb3e.webp"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
              width="50" />
            <div className="ml-2">
              <div className="font-bold">SHEIN Kids SUNSHNE</div>
              <div className="flex mt-1 space-x-4">
                <div className="text-center">
                  <div className="font-bold">4.97</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">2.8K</div>
                  <div className="text-xs text-gray-500">Items</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">1.1K</div>
                  <div className="text-xs text-gray-500">Followers</div>
                </div>
              </div>
            </div>
          </div>
          <Button className="bg-black text-white">+ Follow</Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 p-4">
        {[
          {
            "daId": "1991",
            "imgSrc": "https://img.ltwebstatic.com/images3_abc/2023/03/01/1677602132e97a425f6e897bfe88a159b6a978733e_thumbnail_100x.png",
            "cateSrc": "Clothing"
          },
          {
            "daId": "2058",
            "imgSrc": "https://img.ltwebstatic.com/images3_abc/2023/07/26/1690355580e4e5ed15aebc2c854fd7c39afc30338e_thumbnail_100x.png",
            "cateSrc": "Clothing"
          },
          {
            "daId": "2059",
            "imgSrc": "https://img.ltwebstatic.com/images3_abc/2022/01/15/16422306993677e299457d9b806e6ee7ae35dd6997_thumbnail_100x.png",
            "cateSrc": "Clothing"
          },
          {
            "daId": "1990",
            "imgSrc": "https://img.ltwebstatic.com/images3_abc/2024/01/19/fd/1705673434c5049d43a1aea083bb260e51b213a483_thumbnail_100x.png",
            "cateSrc": "Clothing"
          }
        ].map((cate) => (
          <div className="p-2"
            key={cate.daId}
          >
            <img
              alt={cate.cateSrc}
              className="w-full"
              height="46px"
              src={cate.imgSrc}
              style={{
                aspectRatio: "100/100",
                
            objectFit: "cover",
            width: "52px"
              }}
              />

          </div>
        ))}


      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 overflow-x-auto">
        <Button className="text-black" variant="ghost">
          Recommended
        </Button>
        <Button className="text-black" variant="ghost">
          Most Popular
        </Button>
        <Button className="text-black" variant="ghost">
          Price
        </Button>
        <Button className="text-black" variant="ghost">
          Filter
        </Button>
        <Select>
          <SelectTrigger id="quickship">
            <SelectValue placeholder="QuickShip" />
          </SelectTrigger>
        </Select>
        <Select>
          <SelectTrigger id="category">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
        </Select>
        <Select>
          <SelectTrigger id="size">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
        </Select>
        <Select>
          <SelectTrigger id="color">
            <SelectValue placeholder="Color" />
          </SelectTrigger>
        </Select>
        <SettingsIcon className="text-black" />
      </div>


    </div>)
  );
}

function ListElements(){
  return(
    <div className="grid grid-cols-2 gap-4 p-4"
    style={{
      backgroundColor:'#f1f1f1' ,

    }}
    >
      {prData.map((product)=>(
        <div
        key={product.key}
       style={{
      backgroundColor:'#fff' ,
      
    }}
        >
       <div className=""
        style={{
          height:'250px'
        }}
       
       >
        <Link
        href={`${product.goods_url_name.split(' ').map((wrd)=>wrd).join('-')}-p-${product.key}`}

        
        >
       <img
          alt={product.goods_name}
          className="w-full"
          
          src={product.goods_img}
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
            height:"100%",
            
          }}
           />
           </Link>

       </div>
        <div className="text-center"
        
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
        >{product.goods_name}</div>
        <div className="text-center text-sm text-gray-500">60+ sold recently</div>
      </div>
      ))}
      
     
    </div>
  )
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function HeartIcon(props) {
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
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>)
  );
}


function MoreVerticalIcon(props) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>)
  );
}


function SettingsIcon(props) {
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
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}
