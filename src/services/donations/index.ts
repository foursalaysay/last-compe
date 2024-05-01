import { db } from "@/lib/db"

export const getProdList = async () => {
  try {
    const list = db.donation.findMany()
    return list
  } catch (error) {
    return null
  }
}

export const createParticipation = async (id: string) => {
  try {
    const participate = await db.Particpant.create({
      data: {
        organizationId: id,
      },
    })
    return participate
  } catch (error) {
    console.error("Error creating participation:", error)
    throw new Error("Failed to create participation")
  }
}
