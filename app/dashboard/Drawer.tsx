"use client";
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  Box,
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
import { Session } from "next-auth";
import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";

const Drawer = ({ session }: { session: Session | null }) => {
  const [open, setOpen] = useState(false);
  return (
    <HStack gap={2} w={"min"} ml={"auto"}>
      <Text>Settings</Text>

      <DrawerRoot
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        placement={"start"}
      >
        <DrawerTrigger asChild>
          <Button variant="outline" size="sm" w={"10"} ml={"auto"}>
            <IoSettingsOutline />
          </Button>
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
                    <AvatarFallback name={session?.user?.name ?? "?"} />
                    <AvatarImage src={session?.user?.image ?? undefined} />
                  </AvatarRoot>

                  <Text>{session?.user?.name}</Text>
                  <Text>{session?.user?.email}</Text>

                  <VStack alignItems={"start"} w="full" my={5}>
                    <HStack>
                      <Text>Public Prompts</Text>
                      <TagRoot size={"xl"}>
                        <TagLabel>{10}</TagLabel>
                      </TagRoot>
                    </HStack>
                    <HStack>
                      <Text>Private Prompts</Text>
                      <TagRoot size={"xl"}>
                        <TagLabel>{10}</TagLabel>
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
