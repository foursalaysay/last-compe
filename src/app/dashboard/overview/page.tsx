import { auth } from "@/auth"
import { ScrollArea } from "@/components/ui/scroll-area"

import DonorOverview from "./_components/donor/donor-overview"

const OverviewPage = async () => {
  // const session = await auth()

  const role = "DONOR"

  return (
    <ScrollArea className="m-auto h-[calc(100vh-72.8px)]">
      {/* {role === "customer" && <CustomerOverview />}
      {role === "service_provider" && <ServiceProviderOverview />} */}
      {role === "DONOR" && <DonorOverview />}
    </ScrollArea>
  )
}

export default OverviewPage
