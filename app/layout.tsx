import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reuven's Portfolio",
  description: "My own portfolios website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://media.licdn.com/dms/image/v2/D4D03AQEnZ7QYWh2N1Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730892873195?e=1744243200&v=beta&t=MUx-Y8qJ8QpguCfjmqjhsiOfKj306CJgna230esytA0"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
