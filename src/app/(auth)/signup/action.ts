"use server"
import { RegisterSchema, RegisterType } from "./_types"
import bcryptjs from "bcryptjs"
import { db } from "@/lib/db"
import { getUserByEmail } from "@/services/user"

export const register = async (data: RegisterType) => {
  const parsedData = RegisterSchema.safeParse(data)

  if (!parsedData.success) {
    return { error: "Invalid fields" }
  }

  const { email, password, name } = parsedData.data

  const hashedPassword = await bcryptjs.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) return { error: "User already exists" }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      address: "test",
      role: "ADMIN",
    },
  })

  /**
   * @todo Send email to user
   */

  return { success: "User created" }
}

// export const sigInWithGoogle = async () => await signIn("google");
