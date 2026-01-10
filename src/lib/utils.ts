import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Normalize multiple class name inputs and resolve Tailwind CSS class conflicts into a single class string.
 *
 * @param inputs - One or more class representations (strings, arrays, objects, etc.) to be combined
 * @returns The resulting class string with conflicting Tailwind classes resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}