import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  MenuContent,
  MenuItem,
  MenuPositioner,
  MenuRoot,
  MenuTrigger,
  Portal,
  Spacer,
  Text,
} from "@chakra-ui/react";
const Menu = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Open
        </Button>
      </MenuTrigger>
      <Portal>
        <MenuPositioner>
          <MenuContent>
            <MenuItem value="new-txt">New Text File</MenuItem>
            <MenuItem value="new-file">New File...</MenuItem>
            <MenuItem value="new-win">New Window</MenuItem>
            <MenuItem value="open-file">Open File...</MenuItem>
            <MenuItem value="export">Export</MenuItem>
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </MenuRoot>
  );
};

export default Menu;
