"use client"

import { Search } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

import { MobileSidebar } from "./mobile-sidebar"
import ModeToggle from "./mode-toggle"
import SearchProviderInput from "./search-provider-input"

const Navbar = () => {
  const session = useSession()
  const pathname = usePathname()

  return (
    <div className="sticky w-full border-b ">
      <div className="flex h-20 items-center justify-between px-4 md:px-8">
        <div className="flex w-1/2 items-center">
          <div className={cn("block lg:!hidden")}>
            <MobileSidebar />
          </div>
          {session.data?.user.role === "customer" &&
            pathname.includes("overview") && <SearchProviderInput />}
        </div>
        <div className="flex gap-3">
          <ModeToggle />
          {/* <Button variant={"ghost"} size="icon">
            <MessageSquare />
          </Button>
          <Button variant={"ghost"} size="icon">
            <Bell />
          </Button>
          <Button variant={"ghost"} size="icon">
            <Info />
          </Button> */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage
                  src={session.data?.user.image || "#"}
                  alt="@shadcn"
                />
                <AvatarFallback>
                  {session.data?.user.name?.substring(0, 2).toUpperCase() ||
                    "CN"}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/dashboard/settings/account" className="w-full">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/dashboard/settings/account" className="w-full">
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={async () => await signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default Navbar
