"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider
        attribute={"class"}
        defaultTheme="light"
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default Provider;
