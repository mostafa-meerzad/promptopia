import { Box } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Provider from "./Provider";
import Navbar from "./_components/Navbar";
import AuthProvider from "./auth/Provider";
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
        <AuthProvider>
          <Provider>
            <Box
              px={{ base: 5, md: 8, lg: 10 }}
              pb={10}
              maxW="1440px"
              mx="auto"
            >
              <Navbar />
              <main>{children}</main>
            </Box>
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
