import { Building2, MapPin } from "lucide-react"

import { auth } from "@/auth"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { getAllOrganizations } from "@/services/user"
import { getOrganizationsNearby } from "@/utils/geocode-address"

import BreadCrumb from "../_components/breadcrumb"
import { OrganizationList } from "./_components/organization-list"
import SearchOrganizationInput from "./_components/search-organization-input"

const Organizations = async () => {
  const response = await getAllOrganizations()
  return response
}

const OrganizationsNearby = async (userAddress: string, radius: number) => {
  console.log(
    `Getting organizations nearby ${userAddress} within ${radius} kilometers`,
  )

  const response = await getOrganizationsNearby(userAddress, radius)
  return response
}

const breadcrumbItems = [
  { title: "Organizations", link: "/dashboard/organizations" },
]

const OrganizationPage = async () => {
  const session = await auth()
  const organizations = await Organizations()
  const nearbyOrganizations = await OrganizationsNearby(
    session?.user.address || "",
    20,
  )
  return (
    <ScrollArea className="h-[calc(100vh-80px)]">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex w-full justify-between space-y-0.5">
          <div className="">
            <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
              <Building2 />
              Organizations
            </h2>
            <p className="text-muted-foreground">
              Here are the list of organizations you want to donate
            </p>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col-reverse gap-4 md:flex-row md:gap-0">
          <div className="lg:flex-1 ">
            <SearchOrganizationInput />
          </div>
          <div className="flex items-center">
            <div className={cn(buttonVariants({ variant: "link" }), "p-0")}>
              <MapPin size={15} />
              <div className="flex flex-col">
                <span className="ml-2">{session?.user.address}</span>
                <span className="ml-2">20km</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 overflow-hidden">
          <div>
            <h1 className="my-5 font-semibold">Organizations Nearby</h1>
            <OrganizationList organizations={nearbyOrganizations || []} />
          </div>
          <h1 className="my-5 font-semibold">All</h1>
          <OrganizationList organizations={organizations || []} />
        </div>
      </div>
    </ScrollArea>
  )
}

export default OrganizationPage
