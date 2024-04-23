import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HandHeart } from "lucide-react"
import Link from "next/link"
import { DataTable } from "./_components/data-table"
import { donationColumns } from "./_components/donation-columns"
import { sampleData } from "./_components/data"

const DonationsDonorView = () => {
  return (
    <div>
      <div className=" space-y-6 p-5 pb-16 ">
        <div className="flex w-full justify-between space-y-0.5">
          <div className="">
            <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
              <HandHeart />
              Donations
            </h2>
            <p className="text-muted-foreground">Here is your donations</p>
          </div>
          <Button>Add new listing</Button>
        </div>
        <Separator className="my-6" />
        <DataTable columns={donationColumns} data={sampleData} />
      </div>
    </div>
  )
}

export default DonationsDonorView