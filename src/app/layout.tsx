import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StyleProvider, ThemePicker } from "vcc-ui";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volvo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyleProvider>
          <ThemePicker variant="light">{children}</ThemePicker>
        </StyleProvider>
      </body>
    </html>
  );
}
