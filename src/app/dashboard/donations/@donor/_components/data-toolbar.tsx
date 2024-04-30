"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { DataTableFacetedFilter } from "./data-table-faceted-filter"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

const organization = [{ label: "Patay Gutom", value: "patay-gutom" }]

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search organizations..."
            value={
              (table.getColumn("organization")?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn("organization")
                ?.setFilterValue(event.target.value)
            }
            className=" w-[150px] bg-muted pl-8 lg:w-[250px]"
          />
        </div>
        {table.getColumn("organization") && (
          <DataTableFacetedFilter
            column={table.getColumn("organization")}
            title="Organization"
            options={organization}
          />
        )}
        {table.getColumn("donorStatus") && (
          <DataTableFacetedFilter
            column={table.getColumn("donorStatus")}
            title="Status"
            options={[
              { label: "Submitted", value: "submitted" },
              { label: "Approved", value: "approved" },
              { label: "Declined", value: "declined" },
              { label: "Waiting for pickup", value: "Waiting   pickup" },
              { label: "Cancelled", value: "cancelled" },
              { label: "Completed", value: "completed" },
            ]}
          />
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className=" px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      {/* <DataTableViewOptions table={table} /> */}
    </div>
  )
}
