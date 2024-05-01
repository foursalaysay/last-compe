"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Tag, TagInput } from "emblor"
import { Loader2 } from "lucide-react"
import React, { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { SSInputAddress } from "@/components/ss/ss-input-address"
import { SSPasswordInput } from "@/components/ss/ss-password-input"
import { SSSinglePhoneINput } from "@/components/ss/ss-single-phone-input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { RegisterSchema, RegisterType } from "../_types"
import { register } from "../action"

//THIS SHOULD BE FETCH FROM ADMIN

// export async function getSkill() {
//   try {
//     const res = await fetch("/api/skills");
//     return await res.json();
//   } catch (error) {
//     console.log("Failed");
//   }
// }

const CompanyRegisterForm = () => {
  const [tags, setTags] = useState<Tag[]>([])
  const [isPending, startTransition] = useTransition()
  const form = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      mobileNumber: "+63",
      description: "",
      password: "",
      confirmPassword: "",
      role: "ORGANIZATION",
    },
  })

  const onSubmit = async (data: RegisterType) => {
    startTransition(() => {
      register(data).then((res) => {
        if (res.success) {
          toast.success(res.success)
        } else {
          toast.error(res.error)
        }
      })
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset disabled={isPending} className="space-y-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Four Company" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <SSInputAddress
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mobileNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <SSSinglePhoneINput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Description about your company... "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferredFoods"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Foods To Donate</FormLabel>
                <FormControl>
                  <TagInput
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    {...field}
                    placeholder="Canned Goods"
                    tags={tags}
                    setTags={(newTags) => {
                      setTags(newTags)
                      form.setValue(
                        "preferredFoods",
                        newTags as [Tag, ...Tag[]],
                      )
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <SSPasswordInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <SSPasswordInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            {isPending ? <Loader2 className="animate-spin" /> : "Register"}
          </Button>
        </fieldset>
      </form>
    </Form>
  )
}

export default CompanyRegisterForm
