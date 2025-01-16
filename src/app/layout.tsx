import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
	title: {
		template: "%s || Geek Cave",
		default: "Geek Cave"
	},
	description: "Developed by Gusta MiiTHeRsZ",
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
