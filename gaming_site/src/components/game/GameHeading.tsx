import { FC } from "react";
import { GameQuery } from "../../types";
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading: FC<GameHeadingProps> = ({ gameQuery }) => {
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {`${gameQuery.platform?.name || ""}${gameQuery.genre?.name || ""} Games`}
    </Heading>
  );
};

export default GameHeading;
