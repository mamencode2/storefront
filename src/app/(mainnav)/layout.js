import { BottomNav } from "@/components/bottom-nav";


export default function MainNav({children}) {
  return (
    <div>
         <BottomNav />
         {children}
    </div>
  )
}
