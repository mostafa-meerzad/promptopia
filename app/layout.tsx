import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const roboto = Roboto({
  subsets: ["latin", "greek"],
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Promptopia",
  description: "AI Prompts Sharing Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
