import { z } from "zod"

const thirtyDaysAgo = new Date()

thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

const thirtyDaysAgoISOString = thirtyDaysAgo.toISOString().split("T")[0]

export const dueDate = z.string().refine(
  (str: string) => {
    const currentDate = new Date()
    const selectedDate = new Date(str)

    return (
      /^\d{4}-\d{2}-\d{2}$/.test(str) && // Check if it's in YYYY-MM-DD format
      selectedDate.toISOString().startsWith(str) && // Ensure selected date is valid (e.g., Feb 30 won't pass)
      selectedDate <= currentDate && // Ensure selected date is not in the future
      selectedDate >= thirtyDaysAgo // Ensure selected date is at least 30 days ago
    )
  },
  {
    message:
      "Selected date must be in the format YYYY-MM-DD and must be at least 30 days ago",
  },
)
