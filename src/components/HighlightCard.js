import { Flex } from "@chakra-ui/react";

function HighlightCard({ children }) {
  return (
    <Flex
      w="32.8rem"
      p="3.2rem"
      bgColor="#1E213A
    "
      flexDir="column"
      align="center"
      mb="4.8rem"
    >
      {children}
    </Flex>
  );
}

export default HighlightCard;
