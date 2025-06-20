import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  Button,
  MenuContent,
  MenuItem,
  MenuPositioner,
  MenuRoot,
  MenuTrigger,
  Portal,
  Skeleton,
} from "@chakra-ui/react";
import { User } from "next-auth";

interface Props {
  status: "authenticated" | "unauthenticated" | "loading";
  user: User;
  onLogin: () => void;
  onLogout: () => void;
  onDashboardNavigate: () => void;
}

const AuthMenu = ({ onLogin, onLogout, onDashboardNavigate, status, user }: Props) => {
  if (status === "loading")
    return <Skeleton w={9} h={9} borderRadius={"full"} />;

  if (status === "unauthenticated")
    return (
      <Button
        variant={"outline"}
        borderRadius={"full"}
        px={6}
        onClick={onLogin}
      >
        Login
      </Button>
    );

  return (
    <MenuRoot>
      <MenuTrigger>
        <AvatarRoot variant={"outline"} outline={"none"} cursor={"pointer"}>
          <AvatarFallback name={user?.name ?? "?"} />
          <AvatarImage src={user?.image ?? undefined} />
        </AvatarRoot>
      </MenuTrigger>
      <Portal>
        <MenuPositioner ml={10} mt={3}>
          <MenuContent p={3}>
            <MenuItem
              _hover={{ background: "none" }}
              _focus={{ background: "none" }}
              _active={{ background: "none" }}
              value={user?.email ?? "?"}
            >
              {user?.email ?? undefined}
            </MenuItem>
            <MenuItem
              _hover={{ background: "none" }}
              _focus={{ background: "none" }}
              _active={{ background: "none" }}
              value={"dashboard"}
            >
              <Button
                borderRadius={"full"}
                fontSize={"sm"}
                w={"full"}
                onClick={onDashboardNavigate}
                variant={"outline"}
              >
                Dashboard
              </Button>
            </MenuItem>
            <MenuItem
              _hover={{ background: "none" }}
              _focus={{ background: "none" }}
              _active={{ background: "none" }}
              value={"log out"}
            >
              <Button
                borderRadius={"full"}
                fontSize={"sm"}
                w={"full"}
                onClick={onLogout}
              >
                log out
              </Button>
            </MenuItem>
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </MenuRoot>
  );
};

export default AuthMenu;
