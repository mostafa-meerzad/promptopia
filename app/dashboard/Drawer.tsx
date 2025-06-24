import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  Button,
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
  TagLabel,
  TagRoot,
  Text,
  VStack,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAuth } from "../auth/hooks/useAuth";
import { usePrompts } from "../prompts/hooks/usePrompts";

const Drawer =  () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const { privatePromptsCount, publicPromptsCount } = usePrompts();
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
          <RxHamburgerMenu cursor={"pointer"} size={"20px"} />
        </DrawerTrigger>
        <Portal>
          <DrawerBackdrop />
          <DrawerPositioner>
            <DrawerContent>
              <DrawerBody py={"28"}>
                <VStack
                  color={{ _dark: "whiteAlpha.700", _light: "blackAlpha.700" }}
                >
                  <AvatarRoot
                    variant={"outline"}
                    outline={"none"}
                    cursor={"pointer"}
                    w={"36"}
                    h={"36"}
                  >
                    <AvatarFallback name={user?.name ?? "?"} />
                    <AvatarImage src={user?.image ?? undefined} />
                  </AvatarRoot>

                  <Text>{user?.name}</Text>
                  <Text>{user?.email}</Text>

                  <VStack alignItems={"start"} w="full" my={5}>
                    <HStack>
                      <Text>Public Prompts</Text>
                      <TagRoot size={"xl"}>
                        <TagLabel>{publicPromptsCount}</TagLabel>
                      </TagRoot>
                    </HStack>
                    <HStack>
                      <Text>Private Prompts</Text>
                      <TagRoot size={"xl"}>
                        <TagLabel>{privatePromptsCount}</TagLabel>
                      </TagRoot>
                    </HStack>
                  </VStack>

                  <Button
                    mt={5}
                    w="full"
                    borderRadius={"full"}
                    fontSize={"lg"}
                    fontWeight={"semibold"}
                  >
                    Logout
                  </Button>
                </VStack>
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
