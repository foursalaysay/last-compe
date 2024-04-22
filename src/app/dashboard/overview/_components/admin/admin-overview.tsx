import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import { CheckCircle, Circle, Clock, Home, XCircle } from "lucide-react"

import { TopPerformingProvider } from "./top-performing-provider"
import TotalUsers from "./card-stats"

// const totalRevenue = {
//   lastMonth: 10000,
//   thisMonth: 12000,
// };

const AdminOverview = async () => {
  // const pendingRequests = JSON.parse(await getTotalStatusRequests('pending'));
  // const acceptedRequests = JSON.parse(await getTotalStatusRequests('accepted'));
  // const completedRequests = JSON.parse(
  //   await getTotalStatusRequests('completed'),
  // );
  // const cancelledRequests = JSON.parse(
  //   await getTotalStatusRequests('cancelled'),
  // );

  return (
    <div className=" space-y-6 p-5 pb-16 ">
      <div className="space-y-0.5">
        <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
          <Home />
          Overview
        </h2>
        <p className="text-muted-foreground">
          Here is an overview of your account.
        </p>
      </div>
      <Separator className="my-6" />

      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Pending Requests
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" color="gray" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {/* {pendingRequests.thisMonth} */}
              </div>
              <p className="text-xs text-muted-foreground">
                {/* {`${pendingRequests.lastMonth} from last month`} */}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Accepted Requests
              </CardTitle>
              <CheckCircle
                className="h-4 w-4 text-muted-foreground"
                color="green"
              />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {/* {acceptedRequests.thisMonth} */}
              </div>
              <p className="text-xs text-muted-foreground">
                {/* {`${acceptedRequests.lastMonth} from last month`} */}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Completed Requests
              </CardTitle>
              <Circle className="h-4 w-4 text-muted-foreground" color="blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {/* {completedRequests.thisMonth} */}
              </div>
              <p className="text-xs text-muted-foreground">
                {/* {completedRequests.lastMonth} from last month */}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Cancelled Requests
              </CardTitle>
              <XCircle className="h-4 w-4 text-muted-foreground" color="red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {/* {cancelledRequests.thisMonth} */}
              </div>
              <p className="text-xs text-muted-foreground">
                {/* {`${cancelledRequests.lastMonth}`} from last month */}
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <div className="col-span-4">
            <TopPerformingProvider />
          </div>
          <div className="col-span-3">
            <TotalUsers />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminOverview
