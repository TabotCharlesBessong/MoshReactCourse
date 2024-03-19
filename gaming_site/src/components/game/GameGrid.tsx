import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../../hooks/useGames";
import { GameCard, GameCardContainer, GameCardSkeleton } from "..";
import { Genre } from "../../hooks/useGenres";
import { FC } from "react";

interface GameGridProps {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid: FC<GameGridProps> = ({ selectedGenre, selectedPlatform }) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  console.log(selectedGenre, selectedPlatform);
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
