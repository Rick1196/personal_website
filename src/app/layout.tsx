import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ricardo Perez Resume",
    description: "Ricardo Perez personal website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" >
            <head>
                <title>Ricardo, Software Engineer</title>
                <meta
                    name="description"
                    content="Ricardo, software engineer personal site"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
                <ThemeProvider>
                    <Header
                    />
                    <main>
                        <Suspense fallback={<div>Loading...</div>}>
                            {children}
                        </Suspense>
                    </main>
                </ThemeProvider>
                <Footer />
            </body>
        </html>
    );
}