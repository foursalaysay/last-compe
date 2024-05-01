"use client"
import { MapPin } from "lucide-react"
import Link from "next/link"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { UserAsOrganization } from "@/services/user"

const OrganizationCard = ({
  description,
  address,
  email,
  id,
  mobileNumber,
  name,
  preferredFoods,
}: UserAsOrganization) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Avatar className="border">
            {/* <AvatarImage src={`${sampleImg}`} alt="@shadcn" sizes="1000" /> */}
            <AvatarFallback>{`${name?.split(" ")[0]?.charAt(0)}${name?.split(" ")[1]?.charAt(0).toUpperCase()}`}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col overflow-hidden">
            {/* <p className="text-sm ">{`${description?.slice(0, 90)}...`}</p> */}
            <p className=" truncate font-bold">{`${name}`}</p>
            <div className="flex gap-1">
              <MapPin size={12} />
              <p className="truncate text-xs text-muted-foreground">
                {`${address}`}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 ">
            <div>
              <span className="text-xs text-muted-foreground">About</span>
              <p className="text-xs">{`${description?.slice(0, 100)}...`}</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground">Contact</span>
              <p>
                <a href={`tel:${mobileNumber}`} className="text-xs">
                  {mobileNumber}
                </a>
              </p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground">
                Preferred food types
              </span>

              <ScrollArea className="w-full">
                <div className="flex w-full gap-2  pb-2 pt-1 ">
                  {preferredFoods.map((_, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="min-w-fit font-semibold"
                    >
                      {_.text}
                    </Badge>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full flex-col gap-2 md:flex-row">
          {/* <p className="text-sm font-semibold">{`From  ₱${startingPrice.toString()}`}</p> */}
          <Link
            href={`/dashboard/organizations/info/${id}`}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Info
          </Link>
          <Link
            href={`/dashboard/organizations/donate/${id}`}
            className={cn(buttonVariants({ variant: "default" }), "flex-1")}
          >
            Donate
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

export default OrganizationCard
