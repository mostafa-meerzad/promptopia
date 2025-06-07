"use client";

import { ColorModeProvider } from "@/components/ui/color-mode";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <ChakraProvider value={defaultSystem}>
        <ColorModeProvider>
        {children}
        </ColorModeProvider>
    </ChakraProvider>
  );
};

export default Provider;
