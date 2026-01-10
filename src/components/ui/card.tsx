import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Renders a card container element with default styling and the `data-slot="card"` attribute.
 *
 * @returns The card container div element with `data-slot="card"` and combined default and provided classes.
 */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the header region of a Card component.
 *
 * The rendered element includes a `data-slot="card-header"` attribute and merges any
 * provided `className` with the component's default header classes.
 *
 * @param className - Additional CSS class names to append to the header's default classes
 * @param props - Additional props passed through to the underlying `div` element
 * @returns A React element representing the card header
 */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the title slot for a Card component.
 *
 * The element is a div with data-slot="card-title" and the title styling classes applied; any additional div props (including `className`) are passed through.
 *
 * @returns A div element serving as the card's title slot
 */
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

/**
 * Renders a styled container for a card's descriptive text.
 *
 * @returns A div element used for the card description with muted foreground coloring and small text size
 */
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

/**
 * Renders the card's action container positioned within the card layout.
 *
 * Produces a div with `data-slot="card-action"` and layout classes that position
 * the action area (top-right) inside the card; any supplied `className` and
 * other div props are forwarded to the element.
 *
 * @returns The card action container element.
 */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a container element for a card's main content.
 *
 * The element includes the `data-slot="card-content"` attribute, applies horizontal padding, and merges any supplied `className`.
 *
 * @returns The rendered `div` element for card content.
 */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

/**
 * Renders a card footer container with center-aligned items, horizontal padding, and optional top spacing when a top border is present.
 *
 * @returns A div element with `data-slot="card-footer"` intended as the card's footer area.
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}