"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { SocketCoordinatorProvider } from "@/components/provider/socket-coordinator";
import { useEffect } from "react";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// Define the title (using Metadata is disallowed with 'use client')
	useEffect(() => {
		document.title = "Mariana";
	}, []);

	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<main className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
					<div className="max-w-3xl mx-auto">
						<Header />
						<SocketCoordinatorProvider>
							{children}
						</SocketCoordinatorProvider>
					</div>
				</main>
			</body>
		</html>
	);
}
