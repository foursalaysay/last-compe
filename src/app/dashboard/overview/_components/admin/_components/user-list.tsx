import { Separator } from "@/components/ui/separator"

import UserCard from "./user-card"

const UserList = () => {
  return (
    <div className="w-full">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 ">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  )
}

export default UserList
