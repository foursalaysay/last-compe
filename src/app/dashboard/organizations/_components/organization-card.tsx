import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const OrganizationCard = () => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-col">
          <div className="h-23 relative">
            <div className="">
              <Image
                src="https://placehold.co/600x400.png"
                alt="login image"
                objectFit="contain"
                height={100}
                width={100}
              />
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex flex-col gap-4 ">
            <div className="h-24">
              <span className="text-xs text-muted-foreground">Description</span>
              {/* <p className="text-sm ">{`${description?.slice(0, 90)}...`}</p> */}
              <p className="text-sm ">{`Sample desction very long description ...`}</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="inline-flex items-center gap-1 text-sm">
                {/* <StarFilledIcon className="" />
              <span className="font-semibold">5.0</span>
              <span>(400)</span> */}
              </div>
              {/* <p className="text-sm font-semibold">{`From  ₱${startingPrice.toString()}`}</p> */}
              <Link
                href={`/dashboard/overview/provider-info/${"ddfd"}`}
                className={cn(buttonVariants({ variant: "default" }))}
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
