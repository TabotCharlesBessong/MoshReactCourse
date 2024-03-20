import { Image, ImageProps } from "@chakra-ui/react";
import { FC } from "react";
import images from "../../constants/images";

interface EmojiProps {
  rating: number;
}

const Emoji: FC<EmojiProps> = ({ rating }) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: images.meh, boxSize: "25px" },
    4: { src: images.thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: images.bullsEye, alt: "Exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
