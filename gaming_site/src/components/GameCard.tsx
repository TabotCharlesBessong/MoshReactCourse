import { FC } from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { PlatformIconList } from ".";

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
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
