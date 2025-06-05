import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Provider from "./Provider";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>
        <Provider>
          <Navbar />
        <Box p={10}>
            <main className="p-10">{children}</main>
        </Box>
        </Provider>
      </body>
    </html>
  );
}
