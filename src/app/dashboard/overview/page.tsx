import { auth } from "@/auth"
import { ScrollArea } from "@/components/ui/scroll-area"

import AdminOverview from "./_components/admin/admin-overview"
import DoneeOverview from "./_components/donee/donee-overview"
import DonorOverview from "./_components/donor/donor-overview"

const OverviewPage = async () => {
  // const session = await auth()

  const role = "ADMIN"

  return (
    <ScrollArea className="m-auto h-[calc(100vh-72.8px)]">
      {/* {role === "customer" && <CustomerOverview />}
      {role === "service_provider" && <ServiceProviderOverview />} */}
      {/* {role === "DONOR" && <DonorOverview />} */}
      {/* {role === "DONEE" && <DoneeOverview />} */}
      {role === "ADMIN" && <AdminOverview />}
    </ScrollArea>
  )
}

export default OverviewPage
