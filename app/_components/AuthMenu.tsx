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
import { ReactNode } from "react";

interface Props {
  status: "authenticated" | "unauthenticated" | "loading";
  user: User;
  onLogin: () => void;
  onLogout: () => void;
  onDashboardNavigate: () => void;
}

const AuthMenu = ({
  onLogin,
  onLogout,
  onDashboardNavigate,
  status,
  user,
}: Props) => {
  if (status === "loading")
    return <Skeleton w={9} h={9} borderRadius={"full"} />;

  if (status === "unauthenticated")
    return (
      <Button
        variant={"outline"}
        borderRadius={"full"}
        px={6}
        fontWeight={"semibold"}
        onClick={onLogin}
      >
        Login
      </Button>
    );

  return (
    <MenuRoot>
      <MenuTrigger _focus={{ outline: "none" }}>
        <AvatarRoot variant={"outline"} cursor={"pointer"}>
          <AvatarFallback name={user?.name ?? "?"} />
          <AvatarImage src={user?.image ?? undefined} />
        </AvatarRoot>
      </MenuTrigger>
      <Portal>
        <MenuPositioner ml={10} mt={3}>
          <MenuContent p={3}>
            <CustomMenuItem value={user.email ?? "?"}>
              {user.email ?? undefined}
            </CustomMenuItem>
            <CustomMenuItem value={"dashboard"}>
              <CustomButton
                value="Dashboard"
                handleClick={onDashboardNavigate}
                variant="outline"
              />
            </CustomMenuItem>
            <CustomMenuItem value={"log out"}>
              <CustomButton handleClick={onLogout} value="log out" />
            </CustomMenuItem>
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </MenuRoot>
  );
};

// ------------- custom UI components -----------
const CustomMenuItem = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode | string;
}) => (
  <MenuItem
    _hover={{ background: "none" }}
    _focus={{ background: "none" }}
    _active={{ background: "none" }}
    value={value}
  >
    {children}
  </MenuItem>
);

const CustomButton = ({
  value,
  variant,
  handleClick,
}: {
  value: string;
  variant?: "outline" | "solid" | "surface";
  handleClick: () => void;
}) => (
  <Button
    _focus={{ outline: "none" }}
    borderRadius={"full"}
    fontWeight={"semibold"}
    w={"full"}
    onClick={handleClick}
    variant={variant}
  >
    {value}
  </Button>
);

export default AuthMenu;
