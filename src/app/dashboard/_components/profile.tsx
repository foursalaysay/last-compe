"use client"

import { useSession } from "next-auth/react"
import React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Profile = () => {
  const session = useSession()

  return (
    <div className="absolute bottom-0 left-0 right-0 border-t bg-background p-4">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={"#"} alt="@shadcn" />
          <AvatarFallback>
            {session.data?.user.name?.substring(0, 2).toUpperCase() || "CN"}
          </AvatarFallback>
        </Avatar>
        <div className="">
          <h3 className="font-semibold">{session.data?.user.name}</h3>
          <p className="text-sm">{session.data?.user.email}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
