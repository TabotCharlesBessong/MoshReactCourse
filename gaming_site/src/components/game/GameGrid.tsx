import { SimpleGrid, Text } from "@chakra-ui/react";
import { FC } from "react";
import { GameCard, GameCardContainer, GameCardSkeleton } from "..";
import useGames from "../../hooks/useGames";
import { GameQuery } from "../../types";

interface GameGridProps {
  gameQuery:GameQuery
}

const GameGrid: FC<GameGridProps> = ({ gameQuery }) => {
  const { data, error, isLoading } = useGames(gameQuery);
  console.log(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding="10px"
        spacing={3}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      >
        {isLoading &&
          skeletons.map((skel) => (
            <GameCardContainer key={skel}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
