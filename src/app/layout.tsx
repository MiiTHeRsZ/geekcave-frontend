import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
	title: "Geek Cave",
	description: "Develope by Gusta MiiTHeRsZ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${GeistSans.className} antialiased`}>{children}</body>
		</html>
	);
}
