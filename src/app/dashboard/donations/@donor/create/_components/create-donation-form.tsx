"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { AlertTriangleIcon, Loader2, Plus, Trash2Icon } from "lucide-react"
import Link from "next/link"
import { useState, useTransition } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { Label } from "recharts"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

import { DonationFormValues, donationSchema } from "../formSchema"

const CreateDonationForm = () => {
  const [isPending, startTransition] = useTransition()
  const [loading, setLoading] = useState(false)
  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      title: "",
      description: "",
      deliveryOptions: "Delivery",
      products: [
        {
          name: "",
          description: "",
          quantity: 1,
          expirationDate: "",
        },
      ],
    },
  })

  const {
    control,
    formState: { errors },
  } = form

  const { append, remove, fields } = useFieldArray({
    control,
    name: "products",
  })

  const onSubmit = async (data: DonationFormValues) => {
    startTransition(() => {})
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset disabled={isPending} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your donation title"
                    {...field}
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="grid">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="deliveryOptions"
            render={({ field }) => (
              <FormItem className="grid">
                <FormLabel>Delivery Options</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="pya">Pick up in Your Area</SelectItem>
                    <SelectItem value="da">Deliver to Recipient</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="">
            <label>Products</label>
            <div className="grid gap-2 lg:grid-cols-3">
              {fields?.map((field, index) => (
                <Card
                  // type="single"
                  // collapsible
                  // defaultValue="item-1"
                  key={field.id}
                >
                  <CardHeader
                  // value="item-1"
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle>{`Product ${index + 1}`}</CardTitle>
                      <Button
                        variant="outline"
                        size="icon"
                        className=""
                        onClick={() => remove(index)}
                      >
                        <Trash2Icon className="h-4 w-4 " />
                      </Button>
                    </div>
                    {errors?.products?.[index] && (
                      <span className="alert absolute right-8">
                        <AlertTriangleIcon className="h-4 w-4   text-red-700" />
                      </span>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div
                      className={cn(
                        "relative mb-4 gap-8 rounded-md border p-4",
                      )}
                    >
                      <FormField
                        control={form.control}
                        name={`products.${index}.name`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Product Name</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                disabled={loading}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`products.${index}.quantity`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Quantity</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                disabled={loading}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`products.${index}.description`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea disabled={loading} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`products.${index}.expirationDate`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Expiration Date</FormLabel>
                            <FormControl>
                              <Input
                                type="date"
                                disabled={loading}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              <div
                className="mt-4 flex h-[434.667px] items-center justify-center border-2 border-dashed "
                onClick={() =>
                  append({
                    name: "",
                    description: "",
                    expirationDate: "",
                    quantity: 0,
                  })
                }
              >
                <Plus size={100} />
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <Button type="submit" className="m-auto w-1/4">
              {isPending ? <Loader2 className="animate-spin" /> : "Submit"}
            </Button>
          </div>
          {/* <Button
        variant="outline"
        type="button"
        className="w-full"
        onClick={() => "login"}
      >
        Login with Google
      </Button> */}
        </fieldset>
      </form>
    </Form>
  )
}

export default CreateDonationForm
