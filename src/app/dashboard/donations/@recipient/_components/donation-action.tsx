import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Info, Trash, X } from "lucide-react"

import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const DonationAction = () => {
  const handleDelete = () => {
    console.log("Delete")
  }
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <DotsHorizontalIcon className="h-5 w-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Info className="mr-2 h-4 w-4" />
              Activity
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem onClick={handleDelete} className="text-red-600">
            <X className="mr-2 h-4 w-4" />
            Cancel
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Dialog>
  )
}

export default DonationAction
