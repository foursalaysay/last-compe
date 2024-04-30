import { z } from "zod"

export const RegisterSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    address: z.string().min(8, "Address must be at least 1 character long"),
    role: z.string(),
    contact: z
      .string()
      .min(11, "Contact number must be at least 11 characters long"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    about: z.string().min(8, "About must be at least 8 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export type RegisterType = z.infer<typeof RegisterSchema>
