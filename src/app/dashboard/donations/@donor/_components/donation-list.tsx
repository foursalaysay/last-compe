import { Separator } from "@/components/ui/separator"
import DonationCard from "./donation-card"

const DonationList = () => {
  return (
    <div className="w-full">
      <Separator className="my-6" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 ">
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
      </div>
    </div>
  )
}

export default DonationList
