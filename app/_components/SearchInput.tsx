"use client";
import { Input, InputGroup } from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDebounce } from "use-debounce";

const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [txt, setTxt] = useState(params.get("q") ?? "");
//   const [debounced] = useDebounce(txt, 400);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("handle submit clicked", pathname);
    router.replace(`${pathname}?q=${txt}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <InputGroup startElement={<CiSearch size={"20px"} />}>
        <Input
          placeholder="Search a prompt..."
          borderRadius={"full"}
          onChange={(e) => setTxt(e.target.value)}
          value={txt}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
