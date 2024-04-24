"use client";

import { useState, useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from "lucide-react"; // Assuming you have icons for eye and eye-closed

const accountFormSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    // address: z.string().min(8, "Address must be at least 1 character long"),
    previousPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
    newPassword: z.string(),
  })
  .refine((data) => data.previousPassword === data.newPassword, {
    message: "Passwords should not match",
    path: ["newPassword"],
  });

type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
};

export function UpdateForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState<AccountFormValues>({
    name: "",
    email: "",
    previousPassword: "",
    newPassword: "",
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch("/api/getData");
        const jsonData = await response.json();
        setUser(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getUser();
  }, []);

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  function onSubmit(data: AccountFormValues) {
    // UPDATE ACCOUNT ACTION TS
    // UpdateCAccount();

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* UPDATE NAME */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input defaultValue={user.name} {...field} />
              </FormControl>
              <FormDescription>
                This is the name that will be displayed on your profile and in
                emails.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* UPDATE EMAIL */}
        {/* <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input value={user.email} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        {/* UPDATE PASSWORD */}
        <FormField
          control={form.control}
          name="previousPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  type={showPassword ? "text" : "password"}
                  defaultValue={user.previousPassword}
                  {...field}
                />
                <button
                  onMouseDown={() => setShowPassword(true)}
                  onMouseUp={() => setShowPassword(false)}
                  onMouseOut={() => setShowPassword(false)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* UPDATE NEW PASSWORD */}
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Input here new password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Update account</Button>
      </form>
    </Form>
  );
}
