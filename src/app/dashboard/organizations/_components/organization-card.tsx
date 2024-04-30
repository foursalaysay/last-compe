import { MapPin } from "lucide-react"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

const OrganizationCard = () => {
  const sampleImg = "https://placehold.co/600x400.png"
  const orgInfoLink = "/dashboard/organizations/info/OrgID"
  const orgDonateLink = "/dashboard/organizations/donate/OrgID"
  const sampleOrgName = "Local Food Bank"
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
              <span className="text-xs text-muted-foreground">
                Preferred food types
              </span>

              <ScrollArea className="w-full">
                <div className="flex gap-2 pb-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Badge key={index} variant="outline">
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
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "w-1/3",
                )}
              >
                Info
              </Link>
              <Link
                href={`${orgDonateLink}`}
                className={cn(buttonVariants({ variant: "default" }), "flex-1")}
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default OrganizationCard
