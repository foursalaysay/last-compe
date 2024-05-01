import { UserAsOrganization } from "@/services/user"

import OrganizationCard from "./organization-card"

interface OrganizationListProps {
  organizations: UserAsOrganization[]
}

export const OrganizationList = ({ organizations }: OrganizationListProps) => {
  return (
    <div className="w-full">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4">
        {organizations.map((organization) => (
          <OrganizationCard
            key={organization.id}
            description={organization.description}
            address={organization.address}
            email={organization.email}
            id={organization.id}
            mobileNumber={organization.mobileNumber}
            name={organization.name}
            preferredFoods={organization.preferredFoods}
          />
        ))}
      </div>
    </div>
  )
}
