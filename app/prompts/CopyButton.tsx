"use client";

import { Button } from "@chakra-ui/react";
import { useState } from "react";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log("can't copy");
      setCopied(false);
    }
  };
  return (
    <Button
      onClick={handleCopy}
      backgroundColor={copied ? "green.400" : "black"}
      variant={"solid"}
    >
      {copied ? "Copied" : "Copy"}{" "}
    </Button>
  );
  //   return (
  //     <Button onClick={handleCopy}>
  //       copy
  //     </Button>
  //   );
};

export default CopyButton;
