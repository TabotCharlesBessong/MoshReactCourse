import { HStack, Image } from "@chakra-ui/react";
import { ColorModeSwitcher } from "..";
import logo from "../../assets/images/logo.webp";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
