import { db } from "@/lib/db"

// GETTING THE INFORMATION OF ORGANIZATION
// PASSED TO THE PARTICIPATION PAGE
export const getOrgById = async (id: string) => {
  try {
    const user = db.user.findUnique({ where: { id } })
    return user
  } catch (error) {
    return null
  }
}
