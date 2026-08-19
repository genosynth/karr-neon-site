import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K.A.R.R. — Runaway Heart",
  description: "Official K.A.R.R. website. Runaway Heart — 28 August 2026.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
