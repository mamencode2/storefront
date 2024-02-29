/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/L6ubWqFwFoE
 */
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ProductFourm() {
  return (
    (<div className="bg-gray-50 dark:bg-gray-850">
      <div className="grid gap-4 lg:gap-8 max-w-5xl mx-auto py-6 px-4">
        <div className="flex items-center space-x-3 text-sm">
          <Link className="font-medium underline" href="#">
            ← Back to product
          </Link>
        </div>
        <h1 className="text-3xl font-bold">New Product</h1>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Product Information</CardTitle>
              <CardDescription className="text-sm">Fill in the information below to add your product.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className="form-label" htmlFor="name">
                    Product Name
                  </Label>
                  <Input id="name" required />
                </div>
                <div>
                  <Label className="form-label" htmlFor="price">
                    Price
                  </Label>
                  <Input id="price" required type="number" />
                </div>
              </div>
              <div>
                <Label className="form-label" htmlFor="description">
                  Description
                </Label>
                <Textarea id="description" required />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Product Images</CardTitle>
              <CardDescription className="text-sm">
                Upload images for your product. You can select up to 5 images at once.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Label
                    className="border-dashed border-2 cursor-pointer rounded-lg flex items-center gap-4 p-4 w-full [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800"
                    htmlFor="image1">
                    <ImageIcon className="w-6 h-6" />
                    <span>Choose Image</span>
                    <input
                      accept="image/*"
                      className="sr-only"
                      id="image1"
                      max="5"
                      multiple
                      type="file" />
                  </Label>
                </div>
                <div className="grid gap-2">
                  <img
                    alt="Uploaded Image"
                    className="aspect-[4/3] object-cover border"
                    height={150}
                    src="/placeholder.svg"
                    width={200} />
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-end items-center gap-4">
            <Link className="inline-flex items-center gap-2" href="#">
              <ChevronLeftIcon className="w-4 h-4" />
              Back to products
            </Link>
            <Button type="submit">Save Product</Button>
          </div>
        </div>
      </div>
    </div>)
  );
}


function ImageIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>)
  );
}


function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>)
  );
}