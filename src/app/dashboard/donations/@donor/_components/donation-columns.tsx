"use client"
import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "./data-table-column-header"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
// import { ServiceAction } from "./service-action"

export const donationColumns: ColumnDef<any>[] = [
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      return <span className=" truncate ">{row.getValue("date")}</span>
    },
    enableSorting: false,
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => {
      return <span className="truncate ">{row.getValue("fullName")}</span>
    },
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="EMAIL" />
    ),
    cell: ({ row }) => {
      const category = row.original.serviceCategory as any

      return (
        <div className="flex space-x-2">
          <span className=" truncate ">{row.getValue("email")}</span>
        </div>
      )
    },
    enableHiding: false,
  },

  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ROLE" />
    ),
    cell: ({ row }) => {
      return <span className="flex flex-col">{row.getValue("role")}</span>
    },
    enableSorting: false,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="JOINED " />
    ),
    cell: ({ row }) => {
      return (
        <span className="">
          {format(row.getValue("createdAt"), "LLL, dd, y")}
        </span>
      )
    },
    enableSorting: false,
  },
  {
    enableSorting: false,
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ACTION" />
    ),
    cell: ({ row }) => {
      // return <ServiceAction id="eheheh" serviceInfo={row.original} />
      return <Button>Hello</Button>
    },
  },
]
