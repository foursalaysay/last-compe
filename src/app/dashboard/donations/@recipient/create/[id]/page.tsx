import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Form } from "@/components/ui/form"

const CreateDonationPage = ({ params: { id: string } }: { params: string }) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Create Donation</CardTitle>
          <CardDescription>
            Create a donation to help those in need.
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  )
}

export default CreateDonationPage
