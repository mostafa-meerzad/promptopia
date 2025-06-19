export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/prompts/new", "/prompts/edit/:id+"],
};
