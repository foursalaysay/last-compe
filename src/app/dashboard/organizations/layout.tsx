import { Building2, MapPin } from "lucide-react"

import { auth } from "@/auth"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

export default async function OrganizationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  return <ScrollArea className="h-[calc(100vh-80px)]">{children}</ScrollArea>
}
