import { HStack, Image } from "@chakra-ui/react";
import { ColorModeSwitcher, SearchInput } from "..";
import logo from "../../assets/images/logo.webp";
import { FC } from "react";

interface NavBarProps {
  onSearch:(searchText:string) => void
}

const NavBar:FC<NavBarProps> = ({onSearch}) => {
  return (
    <HStack justifyContent="space-evenly" padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
