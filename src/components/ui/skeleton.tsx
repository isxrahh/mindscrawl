import { cn } from "@/lib/utils"

/**
 * Visual placeholder element that displays a pulsing skeleton.
 *
 * @param className - Additional CSS classes to merge with the skeleton's base styles
 * @returns A `div` element with `data-slot="skeleton"` and base classes for a pulsing, rounded placeholder
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }