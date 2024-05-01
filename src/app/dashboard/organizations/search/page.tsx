import { Building2 } from "lucide-react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { getOrganizationBySearch } from "@/services/user"

import BreadCrumb from "../../_components/breadcrumb"
import { OrganizationList } from "../_components/organization-list"
import SearchOrganizationInput from "../_components/search-organization-input"

const SearchOrganizationPage = async ({
  searchParams,
}: {
  searchParams: { query: string }
}) => {
  const organizations = await getOrganizationBySearch(searchParams.query)
  const breadcrumbItems = [
    { title: "Organizations", link: "/dashboard/organizations" },
    {
      title: "Search Result",
      link: `/dashboard/organizations/search?query=${searchParams.query}`,
    },
    {
      title: `${searchParams.query}`,
      link: `/dashboard/organizations/search?query=${searchParams.query}`,
    },
  ]

  return (
    <ScrollArea className="h-[calc(100vh-80px)]">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex w-full justify-between space-y-0.5">
          <div className="">
            <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
              <Building2 />
              Organizations
            </h2>
            <p className="text-muted-foreground">
              Here are the list of organizations you want to donate
            </p>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col-reverse gap-4 md:flex-row md:gap-0">
          <div className="lg:flex-1 ">
            <SearchOrganizationInput />
          </div>
          <div className="flex items-center">
            {/* <div className={cn(buttonVariants({ variant: "link" }), "p-0")}>
              <MapPin size={15} />
              <div className="flex flex-col">
                <span className="ml-2">{session?.user.address}</span>
                <span className="ml-2">20km</span>
              </div>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col gap-5 overflow-hidden">
          {organizations?.length === 0 ? (
            <div className="mt-10">
              <p className="text-center text-2xl font-bold text-muted-foreground">
                No results found for{" "}
                <span className="text-primary">{searchParams.query}</span>
              </p>
            </div>
          ) : (
            <div>
              <h1 className="my-2 font-semibold">
                Search result for{" "}
                <span className="text-primary">{searchParams.query}</span>
              </h1>

              <OrganizationList organizations={organizations || []} />
            </div>
          )}
        </div>
      </div>
    </ScrollArea>
  )
}

export default SearchOrganizationPage
