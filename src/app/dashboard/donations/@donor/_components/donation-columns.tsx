"use client"
import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"

import { DataTableColumnHeader } from "./data-table-column-header"
import DonationAction from "./donation-action"
// import { ServiceAction } from "./service-action"

export const donationColumns: ColumnDef<any>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Donation ID" />
    ),
    cell: ({ row }) => {
      return <span className=" truncate ">{row.getValue("id")}</span>
    },
    enableSorting: false,
  },
  {
    accessorKey: "organization",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Organization" />
    ),
    cell: ({ row }) => {
      return <span className="truncate">{row.getValue("organization")}</span>
    },
    enableHiding: false,
  },
  {
    accessorKey: "donationDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Donation Date" />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("donationDate")).toLocaleDateString()
      return (
        <div className="flex space-x-2">
          <span className=" truncate ">{date}</span>
        </div>
      )
    },
    enableHiding: false,
  },

  {
    accessorKey: "donorStatus",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return (
        <span className="flex flex-col capitalize">
          {row.getValue("donorStatus")}
        </span>
      )
    },
    enableSorting: false,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    enableSorting: false,
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ACTION" />
    ),
    cell: ({ row }) => {
      return <DonationAction />
    },
  },
]
