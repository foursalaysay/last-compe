import { Building2, Home, ShoppingBasket } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

import BreadCrumb from "../../_components/breadcrumb"
import { getOrgInfo, sendOrgData } from "../_actions/action"
import ParticipationList from "./_components/participation-list"

const breadcrumbItems = [
  { title: "Participation", link: "/dashboard/participation" },
]

export type Donation = {
  id: string
  ownerId: string
  title: string
  description: string | null
  img: string
  quantity: number
  due: Date
  doneeId: string
}

const ParticipationPage = ({ donations }: { donations: Donation[] }) => {
  // const [donationsList, setDonationsList] = useState([])

  // useEffect(() => {
  //   // Set the donations list in state when component mounts
  //   return setDonationsList(donations)
  // }, [donations])

  return (
    <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex w-full justify-between space-y-0.5">
        <div className="">
          <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <ShoppingBasket />
            Product Listings
          </h2>
          <p className="text-muted-foreground">
            Here are the product listing that you could participate
          </p>
        </div>
      </div>
      <Separator className="my-6" />
      <ParticipationList />
    </div>
  )
}

export default ParticipationPage
