import { Label } from "@radix-ui/react-label"
import { HandHeart } from "lucide-react"
import Link from "next/link"

import BreadCrumb from "@/app/dashboard/_components/breadcrumb"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

import CreateDonationForm from "./_components/create-donation-form"

const breadcrumbItems = [
  { title: "Donations", link: "/dashboard/donations" },
  { title: "Create ", link: "/dashboard/donations/create" },
]

const DonationsDonorView = () => {
  return (
    <div className="m-auto w-full  space-y-4 overflow-hidden p-4 pt-6 md:p-8">
      <BreadCrumb items={breadcrumbItems} />
      <div className="space-y-6 pb-16  ">
        <div className="flex justify-between space-y-0.5  ">
          <div className="">
            <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
              <HandHeart />
              Submit a Donation
            </h2>
            <p className="text-muted-foreground">
              Create a donation to help the less privileged
            </p>
          </div>
          {/* <Link
            href={"/dashboard/organizations"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Donate Now
          </Link> */}
        </div>
        <Separator />
        <CreateDonationForm />
      </div>
    </div>
  )
}

export default DonationsDonorView
