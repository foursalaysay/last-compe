import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import RegisterForm from "./_components/register-form"

export const metadata: Metadata = {
  title: "Sign up",
  description:
    "Sign up for an account to access exclusive features and content.",
}

export default async function SignupPage() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="relative hidden h-full flex-col bg-muted p-10  dark:border-r lg:flex">
        <Image
          src="/public/logo.jpg"
          alt="login image"
          objectFit="contain"
          fill
        />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <h1 className="text-2xl font-black">
            <Link href={"/"}>
              <span className="text-primary">Share</span>Surplus
            </Link>
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid gap-6 md:w-[400px] ">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your information to create an account
            </p>
          </div>
          <RegisterForm />
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Log in
            </Link>
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
