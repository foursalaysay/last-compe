"use client"

import { Loader, MapPin } from "lucide-react"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { useState } from "react"

import { auth } from "@/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ToastAction } from "@/components/ui/toast"
import { toast, useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { verifyUser } from "@/services/admin"
// import { getOrgInfo, sendOrgData } from "../../_actions/action"
import { createParticipation } from "@/services/donations"
import { getOrgById } from "@/services/organization"

const UserCard = () => {
  const sampleImg = "https://placehold.co/600x400.png"
  const orgInfoLink = "/dashboard/organizations/info/OrgID"
  const sampleOrgName = "Local Food Bank"
  const sampleContactInfo = "9123456789"

  const { toast } = useToast()

  const [isLoading, setIsLoading] = useState(false)

  const session = useSession()
  const getId = session.data?.user.id
  const getRole = session.data?.user.role

  // SENDING THE REQUEST FOR PARTICIPATION

  const handleConfirmation = async () => {
    setIsLoading(true)

    try {
      // Assuming verifyUser is already resolved from a database query

      if (getRole === "ADMIN") {
        verifyUser(getId!)
        toast({
          title: "User is verfied",
          description: `You have successfully verified a user`,
          action: (
            <ToastAction altText="Go back to Main Page">Back</ToastAction>
          ),
        })
      }
    } catch (error) {
      console.error("Error verifying:", error)
      toast({
        title: "Participation Failed",
        description: "Failed to participate. Please try again.",
        action: <ToastAction altText="Retry">Retry</ToastAction>,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="flex flex-col gap-5 p-5">
        <div className="flex flex-col">
          {/* <Separator className="my-4" /> */}
          <div className=" flex"></div>
          <div className="flex flex-col gap-2 ">
            <div className="flex items-center gap-2">
              <Avatar className="border">
                <AvatarImage src={`${sampleImg}`} alt="@shadcn" sizes="1000" />
                <AvatarFallback>{"CN"}</AvatarFallback>
              </Avatar>
              <div className="">
                {/* <p className="text-sm ">{`${description?.slice(0, 90)}...`}</p> */}
                <p className="text-base font-bold">{`${sampleOrgName}`}</p>
                <div className="flex gap-1">
                  <MapPin size={12} />
                  <span className="text-xs text-muted-foreground">
                    Cebu City, Philippines
                  </span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs text-muted-foreground">About</span>
              <p className="text-xs">
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc nec purus fermentum ultricies. ."
                }
              </p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground">Contact</span>
              <p>
                <a href={`tel:+${sampleContactInfo}`} className="text-xs">
                  +63{sampleContactInfo}
                </a>
              </p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground">
                Preferred food types
              </span>

              <ScrollArea className="w-full">
                <div className="flex gap-2 pb-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Badge key={index} variant="secondary">
                      {"Vegetables"}
                    </Badge>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>

            <div className="flex w-full  gap-2 ">
              {/* <p className="text-sm font-semibold">{`From  ₱${startingPrice.toString()}`}</p> */}
              <Link
                href={`${orgInfoLink}`}
                className={cn(buttonVariants({ variant: "outline" }), "w-1/3")}
              >
                Info
              </Link>
              <Button
                variant="outline"
                className={cn(buttonVariants({ variant: "default" }), "flex-1")}
                onClick={handleConfirmation}
                disabled={isLoading}
              >
                {isLoading ? <Loader /> : "Participate"}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default UserCard
