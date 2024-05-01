import OrganizationCard from "@/app/dashboard/organizations/_components/organization-card"
import { Separator } from "@/components/ui/separator"

const ParticipationList = () => {
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

export default ParticipationList
