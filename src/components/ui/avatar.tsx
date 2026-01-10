"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Wraps Radix's Avatar.Root with default avatar styling and forwards all props to the underlying element.
 *
 * @param className - Additional CSS classes to merge with the component's default avatar classes
 * @param props - Additional props forwarded to `AvatarPrimitive.Root`
 * @returns The rendered Avatar root element with combined classes and a `data-slot="avatar"` attribute
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders an Avatar image with a square aspect ratio and customizable classes.
 *
 * @param className - Additional CSS classes to merge with the component's default styles
 * @returns The Avatar image element with default sizing and any provided props applied
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

/**
 * Renders a styled avatar fallback used when an avatar image is unavailable.
 *
 * @returns The rendered fallback element with default avatar styling and any forwarded props
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }