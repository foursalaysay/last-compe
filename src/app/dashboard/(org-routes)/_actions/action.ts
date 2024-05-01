import { db } from "@/lib/db"

export type sendOrgData = {
  id: string
  name: string
  contact: string
  address: string
}

// GETS ALL THE LIST OF PRODUCTS FOR PARTICIPATION

export const sendParticipation = async (id: string) => {
  try {
    const user = db.user.findUnique({ where: { id } })
    return user
  } catch (error) {
    return null
  }
}

// HERE INPUT THE FETCH STATEMENT TO GET THE ORG INFO TO SEND TO PARTICIPATE
export async function getOrgInfo(id: string) {
  const res = await fetch(`https://api.example.com/artist/${id}`)
  return res.json()
}
