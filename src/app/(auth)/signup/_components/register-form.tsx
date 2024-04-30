"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import React, { useTransition } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { SSInputAddress } from "@/components/ss/ss-input-address"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
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

const RegisterForm = () => {
  const [isPending, startTransition] = useTransition()
  const form = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
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

  const getLatLng = async (address) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address,
      )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    )
    const data = await response.json()

    if (data.status === "OK") {
      const { lat, lng } = data.results[0].geometry.location
      return { lat, lng }
    } else {
      throw new Error("Error getting latitude and longitude")
    }
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
                <FormLabel>Organization Name</FormLabel>
                <FormControl>
                  <Input placeholder="Local Food Community" {...field} />
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
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input placeholder="09*********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">About</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder=" is a successful organization ... "
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
                  <Input {...field} type="password" />
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
                  <Input {...field} type="password" />
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

export default RegisterForm
