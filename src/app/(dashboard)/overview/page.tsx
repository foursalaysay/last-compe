import { auth } from "@/auth"
import { UpdateForm } from "@/components/account/folder/new-account-form"

const OverviewPage = () => {
  // const session = await auth();

  return (
    <>
      <div>
        <UpdateForm />
      </div>
    </>
  )
}

export default OverviewPage
