import React from "react"

type Props = {
  children: React.ReactNode
  donor: React.ReactNode
  admin: React.ReactNode
  donee: React.ReactNode
}

const DonationLayout = async ({ children, donor, admin, donee }: Props) => {
  const role = "donor"
  return (
    <div className="h-[calc(100vh-80px)]">
      {role === "donor" && donor}
      {role === "admin" && admin}
      {role === "donee" && donee}
      <div className="">{children}</div>
    </div>
  )
}

export default DonationLayout
