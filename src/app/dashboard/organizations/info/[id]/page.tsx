import BreadCrumb from "@/app/dashboard/_components/breadcrumb"
import { auth } from "@/auth"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { getOrganizationById } from "@/services/user"

import { OrganizationInfo } from "../_components/organization-info"

const OrganizationInfoPage = async ({
  params: { id },
}: {
  params: { id: string }
}) => {
  const session = await auth()
  const fd = session?.user.id
  const organizationInfo = await getOrganizationById(id)

  const breadcrumbItems = [
    { title: "Organizations", link: "/dashboard/organizations" },
    {
      title: `${organizationInfo?.name}`,
      link: `/dashboard/organizations/info/${organizationInfo?.id}`,
    },
  ]
  return (
    <ScrollArea className="h-[calc(100vh-80px)]">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex flex-col gap-5 ">
          <Card className="flex-1">
            <CardHeader>
              <OrganizationInfo organizationInfo={organizationInfo!} />
            </CardHeader>
          </Card>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Donors</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/avatars/01.png" />
                      <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        Sofia Davis
                      </p>
                      <p className="text-sm text-muted-foreground">
                        m@example.com
                      </p>
                    </div>
                  </div>
                  {/* {donations.map((review) => (
                    <ReviewCard reviewInfo={review} key={review._id} />
                  ))} */}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* <Card className="sticky top-8 h-full lg:w-1/2 xl:w-[450px]">
          <CardHeader>
            <CardTitle>Services Offered</CardTitle>
            <CardDescription>
              You can request for the following services from this provider.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SubmitRequestForm
              servicesOferrs={serviceOffers}
              providerInfo={providerInfo}
              userInfo={userInfo?.user}
            />
          </CardContent>
        </Card> */}
        </div>
      </div>
      <ScrollBar />
    </ScrollArea>
  )
}

export default OrganizationInfoPage
