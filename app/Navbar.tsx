"use client";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, Flex, HStack, Spacer } from "@chakra-ui/react";
import { User } from "next-auth";
import AuthMenu from "./_components/AuthMenu";
import CreatePrompt from "./_components/CreatePrompt";
import Logo from "./_components/Logo";
import { useAuth } from "./auth/hooks/useAuth";
import Drawer from "./dashboard/Drawer";

const Navbar = () => {
  const { status, user, login, logout, createNew, onDashBoardNavigate } =
    useAuth();

  return (
    <Box as={"nav"} py={5}>
      <Flex align={"center"}>
        <Logo />
        <Spacer />
        <HStack gap={3}>
          <CreatePrompt
            status={status}
            onUnAuthorized={login}
            onAuthorized={createNew}
          />
          <AuthMenu
            status={status}
            user={user as User}
            onLogin={login}
            onLogout={logout}
            onDashboardNavigate={onDashBoardNavigate}
          />
          <ColorModeButton />
          <Drawer />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
