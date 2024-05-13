import * as z from "zod"

export const donationSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Product Name must be at least 3 characters" }),
  description: z
    .string()
    .min(3, { message: "Product Name must be at least 3 characters" }),
  deliveryOptions: z
    .string()
    .min(1, { message: "Please select delivery options" }),
  products: z.array(
    z.object({
      name: z.string().min(1, { message: "Please enter product name" }),
      description: z.string(),
      quantity: z.number().min(1, { message: "Please enter quantity" }),
      expirationDate: z
        .string()
        .refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
          message: "Start date should be in the format YYYY-MM-DD",
        }),
    }),
  ),
})

export type DonationFormValues = z.infer<typeof donationSchema>
