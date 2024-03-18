import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { FC } from "react";
import { CriticScore, PlatformIconList } from ".";
import { Game } from "../hooks/useGames";

interface GameCardProps {
  game: Game;
}

const GameCard: FC<GameCardProps> = ({ game }) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Heading fontSize="2xl">{game.rating}</Heading>
        <HStack>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
