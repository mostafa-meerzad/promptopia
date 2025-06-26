import {
  CloseButton,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerPositioner,
  DrawerRoot,
  DrawerTrigger,
  HStack,
  Portal,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserInfo from "./UserInfo";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  if (pathName !== "/dashboard") return null;
  return (
    <HStack
      gap={2}
      w={"min"}
      ml={"auto"}
      display={{ base: "block", md: "none" }}
    >
      <DrawerRoot
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        placement={"start"}
      >
        <DrawerTrigger asChild>
          <BsThreeDotsVertical cursor={"pointer"} size={"20px"} />
        </DrawerTrigger>
        <Portal>
          <DrawerBackdrop />
          <DrawerPositioner>
            <DrawerContent>
              <DrawerBody py={"28"}>
                <UserInfo />
              </DrawerBody>

              <DrawerCloseTrigger asChild>
                <CloseButton size="sm" />
              </DrawerCloseTrigger>
            </DrawerContent>
          </DrawerPositioner>
        </Portal>
      </DrawerRoot>
    </HStack>
  );
};

export default Drawer;
