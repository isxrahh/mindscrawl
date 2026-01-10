import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/ThemeProvider";
import React from "react";


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],  // Add common weights for flexibility
    variable: "--font-poppins",                  // CSS variable for Tailwind
    display: "swap",                             // Prevents FOIT (flash of invisible text)
});

export const metadata: Metadata = {
    title: "MindScrawl - Your Productivity Workspace",
    description: "Beautiful all-in-one notes, tasks, and databases",
};


/**
 * Root layout component that renders the HTML document structure and provides theming for the app.
 *
 * @param children - The application content to render inside the layout.
 * @returns The root HTML element (with language and body font) that wraps `children` with a ThemeProvider configured for system theme handling.
 */
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={poppins.className}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}