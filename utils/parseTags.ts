const parseDelimiter = /[#,\s]+/;
const joinDelimiter = ", ";
export const parseTags = (raw?: string) =>
  raw
    ? raw
        .split(parseDelimiter)
        .map((t) => t.trim().toLowerCase())
        .filter(Boolean)
    : [];

export const joinTags = (tags?: string[]) => {
  return tags && tags.length ? tags.join(joinDelimiter) : "";
};
