import { Label } from "@radix-ui/react-label"
import { HandHeart } from "lucide-react"
import Link from "next/link"

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

import BreadCrumb from "../../_components/breadcrumb"
import { assignedColumns } from "./_components/assigned-columns"
import { cancelledColumns } from "./_components/cancelled-columns"
import { completedColumns } from "./_components/completed-columns"
import {
  assignedData,
  cancelledData,
  completedData,
  pendingData,
} from "./_components/data"
import { DataTable } from "./_components/data-table"
import { donationColumns } from "./_components/donation-columns"
import { pendingColumns } from "./_components/pending-columns"

const breadcrumbItems = [{ title: "Donations", link: "/dashboard/donations" }]

const RecipientPageView = () => {
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
          {/* <Link
            href={"/dashboard/organizations"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Donate Now
          </Link> */}
        </div>
        <Separator />

        <Tabs defaultValue="pending">
          <TabsList className="flex w-full lg:grid lg:w-1/2 lg:grid-cols-4">
            <TabsTrigger value="pending">Received</TabsTrigger>
            {/* <TabsTrigger value="assigned">Assigned</TabsTrigger> */}
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          <TabsContent value="pending">
            <Card>
              <CardHeader className="">
                <DataTable columns={pendingColumns} data={pendingData} />
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="assigned">
            <Card>
              <CardHeader className="">
                <DataTable columns={assignedColumns} data={assignedData} />
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="completed">
            <Card>
              <CardHeader className="">
                <DataTable columns={completedColumns} data={completedData} />
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="cancelled">
            <Card>
              <CardHeader className="">
                <DataTable columns={cancelledColumns} data={cancelledData} />
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default RecipientPageView
