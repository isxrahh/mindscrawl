"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

/**
 * Wraps Radix's TooltipProvider, supplying a data-slot and forwarding all props.
 *
 * @param delayDuration - Delay in milliseconds applied to tooltip open/close interactions (defaults to 0)
 * @returns A React element rendering a TooltipProvider with `data-slot="tooltip-provider"` and the provided props
 */
function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

/**
 * Wraps a Radix Tooltip root in a tooltip provider to ensure it is rendered within the provider context.
 *
 * @param props - Props forwarded to the underlying Tooltip root component.
 * @returns A Tooltip root element wrapped with a TooltipProvider.
 */
function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

/**
 * Provides the trigger element for a tooltip and forwards all received props to the underlying trigger component.
 *
 * @param props - Props passed to the tooltip trigger (same as React.ComponentProps<typeof TooltipPrimitive.Trigger>)
 * @returns A React element that renders the tooltip trigger
 */
function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

/**
 * Renders tooltip content inside a portal with consistent styling, entrance/exit animations, and a matching arrow.
 *
 * @param className - Additional CSS classes to append to the component's default class list
 * @param sideOffset - Distance in pixels between the trigger and the tooltip content (default: 0)
 * @param children - Elements rendered inside the tooltip content
 * @returns The tooltip content element wrapped in a portal, including an arrow aligned to the content
 */
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }