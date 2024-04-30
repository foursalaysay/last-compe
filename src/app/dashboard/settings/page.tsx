import { Separator } from "@/components/ui/separator"

import { UpdateForm } from "./account/new-account-form"
import { ProfileForm } from "./profile.form"

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <div>
        <Separator />
        <UpdateForm />
      </div>
    </div>
  )
}
