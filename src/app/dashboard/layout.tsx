import Link from "next/link"

import { ScrollArea } from "@/components/ui/scroll-area"

import Navbar from "./_components/navbar"
import Profile from "./_components/profile"
import Sidebar from "./_components/sidebar"
import SidebarMenuItems from "./_components/sidebar-menu-items"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <div className="h-screen flex-1 overflow-hidden">
        <Navbar />
        <main className="w-full">{children}</main>
      </div>
    </div>
  )
}
