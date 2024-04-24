import { auth } from "@/auth"

import DonorOverview from "./_components/donor/donor-overview"

const OverviewPage = async () => {
  // const session = await auth()

  const role = "DONOR"

  return (
    <>
      {/* {role === "customer" && <CustomerOverview />}
      {role === "service_provider" && <ServiceProviderOverview />} */}
      {role === "DONOR" && <DonorOverview />}
    </>
  )
}

export default OverviewPage
