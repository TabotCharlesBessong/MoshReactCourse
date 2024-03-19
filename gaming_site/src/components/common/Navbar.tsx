import { HStack, Image } from "@chakra-ui/react";
import { ColorModeSwitcher, SearchInput } from "..";
import logo from "../../assets/images/logo.webp";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
