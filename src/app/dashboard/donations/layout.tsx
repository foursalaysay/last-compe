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
    <div>
      {role === "donor" && donor}
      {role === "admin" && admin}
      {role === "donee" && donee}
      <div>{children}</div>
    </div>
  )
}

export default DonationLayout
