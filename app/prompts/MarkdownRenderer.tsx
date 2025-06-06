"use client";

import { Box } from "@chakra-ui/react";
import DOMPurify from "dompurify";
import { marked } from "marked";
import { useMemo } from "react";

interface Props {
  markdown: string;
}

const MarkdownRenderer = ({ markdown }: Props) => {
  const safeHtml = useMemo(() => {
    const html = marked.parse(markdown);
    return DOMPurify.sanitize(html as string);
  }, [markdown]);

  return (
    <Box
      className="markdown-output"
      mb={5}
      dangerouslySetInnerHTML={{ __html: safeHtml }}
    />
  );
};

export default MarkdownRenderer;
