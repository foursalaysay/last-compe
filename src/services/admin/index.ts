import { db } from "@/lib/db"

export const verifyUser = async (userId: string) => {
  await db.user.update({
    where: {
      id: userId,
      role: "ADMIN",
    },
    data: {
      valid: "verified", // Set the `valid` field to "verified" for matched records
      // You can include other fields and their updated values here if needed
    },
  })
}
export const getAllUser = await db.user.findMany({
  where: {
    valid: "unVerified",
  },
})

export const getVerifiedOrgUser = await db.user.findMany({
  where: {
    valid: "verified",
    role: "ORGANIZATION",
  },
})

const getVerifiedComUser = await db.user.findMany({
  where: {
    valid: "verified",
    role: "COMPANY",
  },
})
