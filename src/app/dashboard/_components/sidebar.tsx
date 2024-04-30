import Link from "next/link"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

import Profile from "./profile"
import SidebarMenuItems from "./sidebar-menu-items"

const Sidebar = () => {
  return (
    <ScrollArea
      className={cn(`relative hidden h-screen w-72 border-r lg:block`)}
    >
      <div className="mx-4 flex items-center justify-between md:justify-center">
        <a href="#" className="flex h-20  items-center"></a>
        <h1 className="text-2xl font-black">
          <Link href={"/"}>
            <span className="text-primary">Share</span>Surplus
          </Link>
        </h1>
        {/* <X
      						onClick={closeSidebar}
      						className="block cursor-pointer md:hidden"
      					/> */}
      </div>
      <ScrollArea>
        <SidebarMenuItems />
      </ScrollArea>
      <Profile />
      <ScrollBar />
    </ScrollArea>
  )
}

export default Sidebar
