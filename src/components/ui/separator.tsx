"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

/**
 * Render a themed separator element for dividing content.
 *
 * @param className - Additional CSS class names to apply to the separator
 * @param orientation - Direction of the separator; `"horizontal"` or `"vertical"`. Default: `"horizontal"`
 * @param decorative - Whether the separator is decorative and should be hidden from assistive technologies. Default: `true`
 * @returns The rendered separator element
 */
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }