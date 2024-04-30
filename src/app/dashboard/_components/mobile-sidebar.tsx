"use client"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import Profile from "./profile"
import SidebarMenuItems from "./sidebar-menu-items"

// import { Playlist } from "../data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
}

export const MobileSidebar = ({ className }: SidebarProps) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="w-72 !px-0">
          <div className="mx-4 flex items-center justify-between md:justify-center">
            <h1 className="text-xl font-black lg:text-2xl">
              <Link href={"/"}>
                <span className="text-primary">Share</span>Surplus
              </Link>
            </h1>
            {/* <X
						onClick={closeSidebar}
						className="block cursor-pointer md:hidden"
					/> */}
          </div>
          <SidebarMenuItems />
          <Profile />
        </SheetContent>
      </Sheet>
    </>
  )
}
