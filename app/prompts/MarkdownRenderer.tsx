import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

interface Props {
  markdown: string;
}
const MarkdownRenderer = ({ markdown }: Props) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
