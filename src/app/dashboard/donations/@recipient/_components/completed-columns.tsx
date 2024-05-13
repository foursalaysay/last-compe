"use client"
import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { DataTableColumnHeader } from "./data-table-column-header"
import DonationAction from "./donation-action"
// import { ServiceAction } from "./service-action"

export const completedColumns: ColumnDef<any>[] = [
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
      <DataTableColumnHeader column={column} title="Recipient" />
    ),
    cell: ({ row }) => {
      return <span className="truncate">{row.getValue("organization")}</span>
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return <span className="truncate">{row.getValue("title")}</span>
    },
    filterFn: (row, id, value) => {
      console.log(row.getValue("organizationId"))

      return value.includes(row.getValue("organizationId"))
    },
    enableHiding: false,
  },
  {
    accessorKey: "dateSubmitted",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date Submitted" />
    ),
    cell: ({ row }) => {
      const date =
        format(new Date(row.getValue("dateSubmitted")), "MM/dd/yyyy") ||
        format(Date.now(), "MM/dd/yyyy")
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
        <Badge className="bg-[#20c997] text-white hover:bg-[#20c997]">
          {row.getValue("donorStatus")}
        </Badge>
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
