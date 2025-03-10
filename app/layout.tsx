import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Encuentro con Disney",
  description: "Encuentro con Disney",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
