"use client";

import * as React from "react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {type ThemeProviderProps} from "next-themes";

/**
 * Wraps children with the theme provider from next-themes and forwards all props.
 *
 * Forwards all received ThemeProviderProps to NextThemesProvider so consumers can
 * configure theme behavior (e.g., defaultTheme, attribute, storageKey).
 *
 * @param children - The React nodes to render inside the theme provider
 * @param props - Remaining ThemeProviderProps forwarded to NextThemesProvider
 * @returns The NextThemesProvider element wrapping `children`
 */
export function ThemeProvider({children, ...props}: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}