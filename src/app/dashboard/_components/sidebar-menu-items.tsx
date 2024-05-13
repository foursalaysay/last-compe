"use client"
import {
  Bell,
  Building2,
  HandHeart,
  HomeIcon,
  LucideIcon,
  MessageCircle,
  Settings,
  Users,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import React from "react"

import { buttonVariants } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface IDashProps {
  Icon: LucideIcon
  className?: string
  size?: number
}

const DashIcon: React.FC<IDashProps> = ({
  Icon,
  className = "",
  size,
  ...props
}) => {
  return <Icon className={className} size={size} {...props} />
}

const SidebarMenuItems = () => {
  const pathname = usePathname()
  const { status, data } = useSession({
    required: true,
  })

  if (status === "loading") {
    return (
      <div className="h-[calc(100vh-162px)] px-4">
        <ul className="flex flex-col gap-4 ">
          <li className="w-full ">
            <div className="">
              <p className="mb-4 text-sm font-semibold ">Loading...</p>
              <div className="flex flex-col gap-4">
                {[1, 2, 3, 4, 5].map((_, index2) => (
                  <Skeleton
                    key={index2 + 1}
                    className="flex animate-pulse flex-row justify-between rounded-md   p-2 px-4 transition-colors"
                  >
                    <Skeleton className="flex items-center gap-2 ">
                      <Skeleton className="h-6 w-6 rounded-full bg-gray-300"></Skeleton>
                      <Skeleton className="h-4 w-20 rounded bg-gray-300"></Skeleton>
                    </Skeleton>
                  </Skeleton>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }

  const role = data?.user.role
  const sidebarMenu = [
    {
      groupName: "Working Space",
      items: [
        { name: "Overview", url: "overview", icon: HomeIcon },
        // ...(role === "customer"
        //   ? [{ name: "Providers", url: "providers", icon: Briefcase }]
        //   : []),
        // { name: "Goods", url: "goods", icon: Inbox },
        ...(role === "DONOR" || role === "ADMIN" || role === "ORGANIZATION"
          ? [{ name: "Donations", url: "donations", icon: HandHeart }]
          : []),
        // ...(role !== "admin"
        //   ? [{ name: "Appointments", url: "appointments", icon: Calendar }]
        //   : []),
        ...(role === "ADMIN"
          ? [{ name: "Users", url: "users", icon: Users }]
          : []),
        ...(role === "DONOR"
          ? [{ name: "Organizations", url: "organizations", icon: Building2 }]
          : []),
        { name: "Messages", url: "messages", icon: MessageCircle },
        { name: "Notifications", url: "notifications", icon: Bell },

        ...(role === "ADMIN"
          ? [{ name: "Reports", url: "reports", icon: Users }]
          : []),
      ],
    },
    {
      groupName: "Personal",
      items: [{ name: "Settings", url: "settings", icon: Settings }],
    },
  ]
  // const sidebarMenu = [
  //   {
  //     groupName: "Working Space",
  //     items: [
  //       { name: "Overview", url: "overview", icon: Home },
  //       // ...(role === "customer"
  //       //   ? [{ name: "Providers", url: "providers", icon: Briefcase }]
  //       //   : []),
  //       { name: "Service Request", url: "service-request", icon: Inbox },
  //       ...(role === "service_provider" || role === "admin"
  //         ? [{ name: "Services", url: "services", icon: Briefcase }]
  //         : []),
  //       ...(role !== "admin"
  //         ? [{ name: "Appointments", url: "appointments", icon: Calendar }]
  //         : []),
  //       ...(role === "admin"
  //         ? [{ name: "Users", url: "users", icon: Users }]
  //         : []),
  //       { name: "Reports", url: "reports", icon: BadgeAlert },
  //     ],
  //   },
  //   {
  //     groupName: "Personal",
  //     items: [{ name: "Settings", url: "settings", icon: Settings }],
  //   },
  // ];

  return (
    <div className="h-[calc(100vh-162px)] px-4">
      <ul className="flex flex-col gap-4 ">
        {sidebarMenu.map((group, index) => (
          <li key={index} className="w-full ">
            <div className="">
              <p className="mb-4 text-sm font-semibold ">{group.groupName}</p>
              <div className="flex flex-col gap-4">
                {group.items.map((item, index2) => (
                  <Link
                    href={`/dashboard/${item.url as string}`}
                    key={index2 + 1}
                    className={cn(
                      buttonVariants({
                        variant: pathname.includes(item.url as string)
                          ? "default"
                          : "ghost",
                      }),
                      "flex flex-row justify-between rounded-md    p-2 px-4 transition-colors  ",
                    )}
                  >
                    <div className="flex items-center gap-2 ">
                      <DashIcon Icon={item.icon} size={20} />
                      <p>{item?.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SidebarMenuItems
