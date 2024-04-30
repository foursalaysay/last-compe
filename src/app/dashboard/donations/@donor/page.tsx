import { HandHeart } from "lucide-react"
import Link from "next/link"

import { Button, buttonVariants } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

import BreadCrumb from "../../_components/breadcrumb"
import { sampleData } from "./_components/data"
import { DataTable } from "./_components/data-table"
import { donationColumns } from "./_components/donation-columns"

const breadcrumbItems = [{ title: "Donations", link: "/dashboard/donations" }]

const DonationsDonorView = () => {
  return (
    <div className="m-auto w-full  space-y-4 overflow-hidden p-4 pt-6 md:p-8">
      <BreadCrumb items={breadcrumbItems} />
      <div className="space-y-6 pb-16  ">
        <div className="flex justify-between space-y-0.5  ">
          <div className="">
            <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
              <HandHeart />
              Donations
            </h2>
            <p className="text-muted-foreground">List of all donations</p>
          </div>
          <Link
            href={"/dashboard/organizations"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Donate Now
          </Link>
        </div>
        <Separator />
        <DataTable columns={donationColumns} data={sampleData} />
      </div>
    </div>
  )
}

export default DonationsDonorView
