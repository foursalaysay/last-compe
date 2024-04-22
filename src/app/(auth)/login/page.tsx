import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import LoginForm from "./_components/login-form"

export const metadata: Metadata = {
  title: "Log in",
  description:
    "Log in to your account to access exclusive features and content.",
}

export default async function LoginPage() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="relative hidden h-full flex-col bg-muted p-10  dark:border-r lg:flex">
        <div className="absolute inset-0 ">
          <Image
            src="https://placehold.co/600x400.png"
            alt="login image"
            objectFit="contain"
            fill
          />
        </div>
        <div className="relative z-20 flex items-center text-lg font-medium">
          <h1 className="text-2xl font-black">
            <Link href={"/"}>
              <span className="text-primary">MiJo </span> Express
            </Link>
          </h1>
        </div>
      </div>
      <div className="mx-auto flex items-center justify-center py-12">
        <div className="mx-auto grid gap-6 md:w-[400px] ">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <LoginForm />
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
