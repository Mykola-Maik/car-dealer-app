import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/containers";
import { Footer, Header } from "@/components";

export const metadata: Metadata = {
  title: "Car dealer",
  description: "Car dealer application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <Providers>
          <main className="overflow-hidden relative flex flex-col flex-grow items-center justify-center px-[15px]">
            {children}
          </main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
