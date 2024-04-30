"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// QUESTION ARISE
// IF DONATION ONLY CATERS ONE ITEM OR MANY IF MANY GO WITH ARRAY OF OBJECTS
export const donationItem = z.object({
  pName: z.string(),
  pQuan: z.number(),
  //   The validation logic inside the refinement function checks
  //   whether the string matches the format YYYY-MM-DD (e.g., 2024-04-24)
  pExDate: z.string().refine((str: string) => {
    return (
      /^\d{4}-\d{2}-\d{2}$/.test(str) &&
      new Date(str).toISOString().startsWith(str)
    )
  }),
  pDesc: z.string(),
})

// VALIDATION FOR THE IMAGE
const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
]

export const donation = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  image: z
    .any()
    // To not allow empty files
    .refine((files) => files?.length >= 1, { message: "Image is required." })
    // To not allow files other than images
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
      message: ".jpg, .jpeg, .png and .webp files are accepted.",
    })
    // To not allow files larger than 5MB
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
      message: `Max file size is 5MB.`,
    }),
  dItemArray: z.array(donationItem),
  dueDate: z.string().refine((str: string) => {
    return (
      /^\d{4}-\d{2}-\d{2}$/.test(str) &&
      new Date(str).toISOString().startsWith(str)
    )
  }),
  dEnumShopee: z.enum(["Delivery", "Pick-Up"]),
})

export type dDonationType = z.infer<typeof donation>
export type dItemType = z.infer<typeof donationItem>

const DEFAULT_FORM_VALUES = {
  title: "Default Title",
  image: [],
  dItemArray: [], // Default to an empty array for donation items
  dueDate: new Date().toISOString().split("T")[0], // Default to today's date
  dEnumShopee: "Delivery", // Default to "Delivery"
}

export function DemoReportAnIssue() {
  const form = useForm<dDonationType>({
    resolver: zodResolver(donation),
    defaultValues: {
      title: "Default Title",
      image: [],
      dItemArray: [], // Default to an empty array for donation items
      dueDate: new Date().toISOString().split("T")[0], // Default to today's date
      dEnumShopee: "Delivery",
    },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Listing of Donation Product</CardTitle>
        <CardDescription>List the item that you want to donate</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Please include all information relevant to your issue."
          />
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <Button variant="ghost">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  )
}
