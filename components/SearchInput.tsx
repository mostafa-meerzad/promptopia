"use client";
import { Flex, IconButton, Input } from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [txt, setTxt] = useState(params.get("q") ?? "");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.replace(`${pathname}?q=${txt.trim()}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <Flex gap={2}>
        <Input
          placeholder="Search a prompt..."
          borderRadius="full"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
        />
        <IconButton aria-label="Search" type="submit" borderRadius="full">
          <CiSearch />
        </IconButton>
      </Flex>
    </form>
  );
};

export default SearchInput;
