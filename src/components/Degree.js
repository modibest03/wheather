import { Flex } from "@chakra-ui/react";
import { Circle } from "@chakra-ui/react";
import "./Degree.scss";

function Degree() {
  return (
    <div className="degree">
      <Flex justify="flex-end" mb="6.6rem">
        <Circle
          size="4rem"
          bg="#E7E7EB"
          mr="1.2rem"
          fontSize="1.8rem"
          fontWeight="700"
          display={{ lg: "none" }}
        >
          ℃
        </Circle>
        <Circle
          size="4rem"
          bg="#585676"
          fontSize="1.8rem"
          fontWeight="700"
          display={{ lg: "none" }}
        >
          ℉
        </Circle>
      </Flex>
    </div>
  );
}

export default Degree;
