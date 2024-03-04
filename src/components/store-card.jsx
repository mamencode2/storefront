/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/kc4UYSxz1tk
 */
import { Button } from "@/components/ui/button"

export function StoreCard() {
  return (
    (<div className="max-w-2xl mx-auto p-4">
      <div className="flex items-center space-x-4">
        <img
          alt="SHEIN ICON"
          className="h-20 w-20"
          height="80"
          src="/placeholder.svg"
          style={{
            aspectRatio: "80/80",
            objectFit: "cover",
          }}
          width="80" />
        <div className="flex-1">
          <h1 className="text-2xl font-bold">SHEIN ICON</h1>
          <p className="text-sm text-gray-500 truncate">SHEIN ICON ensures you never go unnoticed with...</p>
        </div>
        <ChevronRightIcon className="h-6 w-6 text-gray-400" />
      </div>
      <div className="flex justify-between border-t border-b py-4">
        <div className="text-center">
          <div className="text-lg font-semibold">4.87</div>
          <div className="text-sm text-gray-500">Rating</div>
        </div>
        <div className="border-l border-r px-4">
          <div className="text-lg font-semibold">17K</div>
          <div className="text-sm text-gray-500">Items</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold">51K</div>
          <div className="text-sm text-gray-500">Followers</div>
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        <Button className="flex-1" variant="outline">
          + Follow
        </Button>
        <Button className="flex-1" variant="outline">
          All Items
        </Button>
      </div>
    </div>)
  );
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>)
  );
}
