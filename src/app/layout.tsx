import type { Metadata } from "next";
// import "bootstrap."
// import "./globals.css";
import "/public/css/bootstrap.min.css";
import "/public/css/sb.css";

export const metadata: Metadata = {
	title: "Edux",
	description: "Built with Love Ethiopia",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}