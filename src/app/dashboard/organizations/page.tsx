import { Building2, HandHeart, Home } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import BreadCrumb from "../_components/breadcrumb"
import OrganizationList from "./_components/organization-list"

const breadcrumbItems = [
  { title: "Organizations", link: "/dashboard/organizations" },
]

const OrganizationPage = () => {
  return (
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
      <OrganizationList />
    </div>
  )
}

export default OrganizationPage
