import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { Circle } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import HighlightCard from "./HighlightCard";
import { BsFillCursorFill } from "react-icons/bs";

function DayHighlights() {
  return (
    <Box mt="7.2rem">
      <Text color="#fff" mb="3.2rem" fontSize="2.4rem">
        Today’s Hightlights{" "}
      </Text>
      <Flex wrap="wrap" justify="space-between">
        <HighlightCard>
          <Text fontSize="1.6rem" color="#E7E7EB" fontWeight="light">
            Wind status
          </Text>
          <Box color="#E7E7EB" mb="3.2rem">
            <Text as="span" fontWeight="600" fontSize="4.6rem">
              7
            </Text>
            <Text as="span" fontWeight="300" fontSize="2.6rem">
              mph
            </Text>
          </Box>
          <HStack spacing="1.87rem">
            <Circle size="2.9rem" bg=" rgb(105, 104, 104)" color="#E7E7EB">
              <BsFillCursorFill />
            </Circle>
            <Text fontSize="1.4rem" fontWeight="300" color="#E7E7EB">
              wsw
            </Text>
          </HStack>
        </HighlightCard>
        <HighlightCard>
          <Text fontSize="1.6rem" color="#E7E7EB" fontWeight="light">
            Humidity
          </Text>
          <Box color="#E7E7EB" mb="3.2rem">
            <Text
              as="span"
              fontWeight="600"
              fontSize="4.6rem"
              fontFamily="Raleway"
            >
              84
            </Text>
            <Text as="span" fontWeight="300" fontSize="2.6rem">
              %
            </Text>
          </Box>
          <Box bgColor="#fff" w="100%">
            <Progress size="md" colorScheme="yellow" value={80} />
          </Box>
        </HighlightCard>
        <HighlightCard>
          <Text fontSize="1.6rem" color="#E7E7EB" fontWeight="light">
            Visibility
          </Text>
          <Box color="#E7E7EB">
            <Text
              as="span"
              fontWeight="600"
              fontSize="4.6rem"
              fontFamily="Raleway"
            >
              6,4
            </Text>
            <Text as="span" fontWeight="300" fontSize="2.6rem">
              miles
            </Text>
          </Box>
        </HighlightCard>
        <HighlightCard>
          <Text fontSize="1.6rem" color="#E7E7EB" fontWeight="light">
            Air Pressure
          </Text>
          <Box color="#E7E7EB">
            <Text
              as="span"
              fontWeight="600"
              fontSize="4.6rem"
              fontFamily="Raleway"
            >
              998
            </Text>
            <Text as="span" fontWeight="300" fontSize="2.6rem">
              mb
            </Text>
          </Box>
        </HighlightCard>
      </Flex>
    </Box>
  );
}

export default DayHighlights;
