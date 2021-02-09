import { Flex } from "@chakra-ui/react";
import { Circle } from "@chakra-ui/react";

function Degree() {
  return (
    <Flex justify="flex-end" mb="6.6rem">
      <Circle
        size="4rem"
        bg="#E7E7EB"
        mr="1.2rem"
        fontSize="1.8rem"
        fontWeight="700"
      >
        ℃
      </Circle>
      <Circle size="4rem" bg="#585676" fontSize="1.8rem" fontWeight="700">
        ℉
      </Circle>
    </Flex>
  );
}

export default Degree;
