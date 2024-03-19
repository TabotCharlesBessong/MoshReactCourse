import { Box } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

interface GameCardContainerProps {
  children:ReactNode
}

const GameCardContainer:FC<GameCardContainerProps> = ({children}) => {
  return (
    <Box
      sx={{ justifySelf: "center" }}
      width="400px"
      overflow="hidden"
      padding={10}
      borderRadius={10}
    >
      {children}
    </Box>
  );
}

export default GameCardContainer