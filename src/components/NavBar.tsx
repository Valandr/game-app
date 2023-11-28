import { HStack, Image, Text } from "@chakra-ui/react";
import logoGame from "../assets/logo-game.webp";
const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={logoGame} boxSize="60px" />
        <Text>NavBar</Text>
      </HStack>
    </div>
  );
};

export default NavBar;
