"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Search } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  searchValue: z.string().min(1),
})

type FormData = z.infer<typeof formSchema>

const SearchOrganizationInput = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchValue: searchParams.get("query") || "",
    },
  })

  const onSubmit = (data: FormData) => {
    router.push(`/dashboard/organizations/search?query=${data.searchValue}`)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset disabled={form.formState.isSubmitting}>
          <FormField
            control={form.control}
            name="searchValue"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search organizations you want to donate to"
                      className="pl-8 lg:w-1/2"
                      {...field}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </fieldset>
      </form>
    </Form>
  )
}

export default SearchOrganizationInput
