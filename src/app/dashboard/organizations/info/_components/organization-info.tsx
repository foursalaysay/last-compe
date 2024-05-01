import { StarFilledIcon } from "@radix-ui/react-icons"
import { HeartHandshake, Mail, MapPin, PhoneIcon } from "lucide-react"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { OrganizationDetails } from "@/services/user"

interface OrganizationInfoProps {
  organizationInfo: OrganizationDetails
}

export const OrganizationInfo = ({
  organizationInfo,
}: OrganizationInfoProps) => {
  const {
    name,
    address,
    description,
    mobileNumber,
    donations,
    image,
    email,
    createdAt,
    preferredFoods,
  } = organizationInfo
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-20 w-20">
            <AvatarImage src={`${image || "#"}`} alt="@shadcn" />
            <AvatarFallback>
              {name?.substring(0, 2).toUpperCase() ?? "U"}
            </AvatarFallback>
          </Avatar>
          <div className="flex">
            {/* <h1>{fullName}</h1>
                    <div className="inline-flex items-center gap-1 text-sm">
                      <StarFilledIcon className="" />
                      <span className="font-semibold">5.0</span>
                      <span>(400)</span>
                    </div> */}
            <div className="flex flex-col gap-2  font-medium">
              <div className="flex flex-col gap-2">
                <p className="text-xl font-bold">{name}</p>
                <div className="flex items-center">
                  <MapPin size={15} className="text-primary" />
                  <time
                    dateTime={createdAt?.toString()}
                    className="block text-xs text-gray-500 dark:text-gray-400"
                  >
                    {address}
                  </time>
                </div>
              </div>
              {donations.length === 0 && (
                <Link
                  className="inline-flex items-center gap-1 text-sm hover:underline"
                  href="#reviews"
                >
                  <time
                    dateTime={createdAt?.toString()}
                    className="block text-xs text-gray-500 dark:text-gray-400"
                  >
                    Received
                  </time>
                  <span className="font-semibold">({donations.length})</span>
                  {/* <span>{`(${reviews.length})`}</span> */}
                </Link>
              )}
            </div>
          </div>
        </div>
        <Link
          href={`${`/dashboard/organizations/donate/${organizationInfo.id}`}`}
          className={`${cn(buttonVariants({ variant: "default" }), "hidden items-center md:flex")}`}
        >
          Donate
        </Link>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col gap-4">
        <div className="">
          <span className="text-sm text-muted-foreground">Description</span>
          <p className="">{description}</p>
        </div>
        <div className="">
          <span className="text-sm text-muted-foreground">Contact Info</span>
          <div className="flex flex-col gap-1">
            <p className="flex items-center  gap-2">
              <PhoneIcon size={15} className="text-primary" />{" "}
              <a href={`tel:${mobileNumber}`} className="">
                {mobileNumber}
              </a>
            </p>
            <p className="flex items-center  gap-2">
              <Mail size={15} className="text-primary" />
              {email}
            </p>
          </div>
        </div>
        <div>
          <span className="text-sm text-muted-foreground">
            Preferred food types
          </span>

          <div className="flex w-full flex-wrap  gap-2 pb-2 pt-1 ">
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
        </div>
        <div className="w-full">
          <Link
            href={`${`/dashboard/organizations/donate/${organizationInfo.id}`}`}
            className={`${cn(buttonVariants({ variant: "default" }), "w-full md:hidden")}`}
          >
            Donate
          </Link>
        </div>
      </div>
    </div>
  )
}
