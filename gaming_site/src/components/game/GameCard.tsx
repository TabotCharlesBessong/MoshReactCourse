import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { FC } from "react";
import { CriticScore, Emoji, PlatformIconList } from "..";
import getCroppedImageUrl from "../../services/image-url";
import { Game } from "../../types";

interface GameCardProps {
  game: Game;
}

const GameCard: FC<GameCardProps> = ({ game }) => {
  console.log(game);
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name} <Emoji rating={game.rating_top} />{" "}
        </Heading>
        <Heading fontSize="2xl">{game.rating}</Heading>
        <Heading fontSize="2xl">{game.added}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
