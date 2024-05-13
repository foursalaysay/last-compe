import { CheckCircle, Clock, User, XCircle } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import { DonationsOverview } from "../_components/donor/donations-overview"
import { RecentDonations } from "../_components/donor/recent-donations"
import { TopDonee } from "../_components/donor/top-donee"
import { data } from "../data"

const Recipient = async () => {
  return (
    <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
      <div className="space-y-0.5">
        <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
          Hi Donor Company, Welcome back 👋
        </h2>
        <p className="text-muted-foreground">
          Here is an overview of your account.
        </p>
      </div>
      <Separator className="my-6" />

      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pending Donations
              </CardTitle>
              <div className="flex items-center rounded-full bg-[#FFBF00] p-2 text-white">
                <Clock size={20} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">25</div>
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-green-500 ">+180%</span>{" "}
                from last month
              </p>
            </CardContent>
          </Card> */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Received Donations
              </CardTitle>
              <div className="flex items-center rounded-full bg-primary p-2 text-white">
                <User size={20} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">25</div>
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-green-500 ">+180%</span>{" "}
                from last month
                {/* {averageRating.lastMonth} from last month */}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Cancelled Donations
              </CardTitle>
              <div className="flex items-center rounded-full bg-[#D92027] p-2 text-white">
                <XCircle size={20} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">25</div>
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-green-500 ">+180%</span>{" "}
                from last month
                {/* {averageRating.lastMonth} from last month */}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Completed Donations
              </CardTitle>
              <div className="flex items-center rounded-full bg-[#28A745] p-2 text-white">
                <CheckCircle size={20} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">25</div>
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-green-500 ">+180%</span>{" "}
                from last month
                {/* {averageRating.lastMonth} from last month */}
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="col-span-7">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <DonationsOverview data={data} />
            </CardContent>
          </Card>
          <TopDonee />

          {/* <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar className={cn("!w-full")}  mode="single"/>
          </CardContent>
        </Card> */}
        </div>
      </div>
    </div>
  )
}

export default Recipient
