import { useSession } from "next-auth/react"
import React from "react"

import { auth } from "@/auth"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

type Props = {
  children: React.ReactNode
  donor: React.ReactNode
  admin: React.ReactNode
  recipient: React.ReactNode
}

const OverviewLayout = async ({ children, donor, admin, recipient }: Props) => {
  const session = await auth()
  const role = session?.user?.role

  console.log(role)

  return (
    <ScrollArea className="h-[calc(100vh-80px)]">
      {role === "DONOR" && donor}
      {role === "ADMIN" && admin}
      {role === "ORGANIZATION" && recipient}
      <div className="">{children}</div>
      <ScrollBar />
    </ScrollArea>
  )
}

export default OverviewLayout
