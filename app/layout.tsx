import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
    title: "GitHub Code PR Reviewer",
    description:
        "Automatically review GitHub pull requests with AI-powered code analysis, feedback, and suggestions before merging.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
