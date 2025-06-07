import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Provider from "./Provider";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";
import "./global.css";

const urbanist = Urbanist({
  subsets: ["latin"],
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanist.className} antialiased`}>
        <Provider>
          <Navbar />
          <Box p={{ sm: 3, md: 6, lg: 10 }}>
            <main className="p-10">{children}</main>
          </Box>
        </Provider>
      </body>
    </html>
  );
}
