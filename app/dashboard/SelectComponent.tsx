"use client";
import {
  createListCollection,
  Portal,
  SelectContent,
  SelectControl,
  SelectHiddenSelect,
  SelectIndicator,
  SelectIndicatorGroup,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@chakra-ui/react";
import React from "react";

const frameworks = createListCollection({
  items: [
    { label: "public", value: "public" },
    { label: "private", value: "private" },
    { label: "recent", value: "recent" },
    { label: "oldest", value: "oldest" },
  ],
});

const SelectComponent = () => {
  return (
    <SelectRoot
      collection={frameworks}
      size="md"
      width={{ base: "full", md: "200px", lg: "320px" }}
    >
      <SelectHiddenSelect />
      <SelectControl>
        <SelectTrigger>
          <SelectValueText placeholder="Sort by..." />
        </SelectTrigger>
        <SelectIndicatorGroup>
          <SelectIndicator />
        </SelectIndicatorGroup>
      </SelectControl>
      <Portal>
        <SelectPositioner>
          <SelectContent>
            {frameworks.items.map((framework) => (
              <SelectItem item={framework} key={framework.value}>
                {framework.label}
                <SelectItemIndicator />
              </SelectItem>
            ))}
          </SelectContent>
        </SelectPositioner>
      </Portal>
    </SelectRoot>
  );
};

export default SelectComponent;
