import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Raleway } from "next/font/google";

// Configure Raleway with desired settings, such as weights and subsets
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify the weights you need
  variable: "--font-raleway", // CSS variable for custom styling if needed
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Vishnu | Portfolio",
  description: "Checkout my Work here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/signature2.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.4.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
