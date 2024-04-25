import { Metadata } from "next"
import Image from "next/image"

import { Card, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import { SidebarNav } from "./components/sidebar-nav"

export const metadata: Metadata = {
  title: "Update",
}

const sidebarNavItems = [
  {
    title: "Account",
    href: "/dashboard/settings/account",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div>
        <div className="md:hidden">
          <Image
            src="/examples/forms-light.png"
            width={1280}
            height={791}
            alt="Forms"
            className="block dark:hidden"
          />
          <Image
            src="/examples/forms-dark.png"
            width={1280}
            height={791}
            alt="Forms"
            className="hidden dark:block"
          />
        </div>
        <div className="hidden space-y-6 p-5 pb-16 md:block">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
            <p className="text-muted-foreground">
              Manage your account settings and set e-mail preferences.
            </p>
          </div>
          <Separator className="my-6" />
          <Card>
            <CardHeader>
              <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                <aside className="mx-4 lg:w-1/5">
                  <SidebarNav items={sidebarNavItems} />
                </aside>
                <div className="flex-1 lg:max-w-2xl">{children}</div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  )
}
