import { Separator } from "@/components/ui/separator"

import OrganizationCard from "./organization-card"

const OrganizationList = () => {
  return (
    <div className="w-full">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 ">
        <OrganizationCard />
        <OrganizationCard />
        <OrganizationCard />
        <OrganizationCard />
        <OrganizationCard />
        <OrganizationCard />
        <OrganizationCard />
        <OrganizationCard />
        <OrganizationCard />
        <OrganizationCard />
      </div>
    </div>
  )
}

export default OrganizationList
