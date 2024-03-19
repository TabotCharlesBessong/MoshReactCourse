import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { FC } from "react";
import useGenres, { Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList: FC<GenreListProps> = ({ onSelectGenre, selectedGenre }) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              color={genre.id === selectedGenre?.id ? "gold" : ""}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
