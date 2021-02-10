import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import shower from "../assets/Shower.png";

function Card() {
  return (
    <Flex justify="space-between" wrap="wrap">
      <Box bg="#1E213A" p="1.8rem 2.2rem" mb={{ base: "3.2rem", md: 0 }}>
        <Text fontSize="1.6rem" fontWeight="500" mb="1rem" color="#E7E7EB">
          Tomorrow
        </Text>
        <Image src={shower} objectFit="contain" boxSize="5.6rem" mb="3.1rem" />
        <HStack spacing="1.6rem">
          <Box
            as="span"
            fontSize="1.6rem"
            fontWeight="500"
            color="#E7E7EB;
"
          >
            16°C
          </Box>
          <Box
            as="span"
            fontSize="1.6rem"
            fontWeight="500"
            color="#A09FB1;
"
          >
            11°C
          </Box>
        </HStack>
      </Box>
      <Box bg="#1E213A" p="1.8rem 2.2rem" mb={{ base: "3.2rem", md: 0 }}>
        <Text fontSize="1.6rem" fontWeight="500" mb="1rem" color="#E7E7EB">
          Tomorrow
        </Text>
        <Image src={shower} objectFit="contain" boxSize="5.6rem" mb="3.1rem" />
        <HStack spacing="1.6rem">
          <Box
            as="span"
            fontSize="1.6rem"
            fontWeight="500"
            color="#E7E7EB;
"
          >
            16°C
          </Box>
          <Box
            as="span"
            fontSize="1.6rem"
            fontWeight="500"
            color="#A09FB1;
"
          >
            11°C
          </Box>
        </HStack>
      </Box>
      <Box bg="#1E213A" p="1.8rem 2.2rem" mb={{ base: "3.2rem", md: 0 }}>
        <Text fontSize="1.6rem" fontWeight="500" mb="1rem" color="#E7E7EB">
          Tomorrow
        </Text>
        <Image src={shower} objectFit="contain" boxSize="5.6rem" mb="3.1rem" />
        <HStack spacing="1.6rem">
          <Box
            as="span"
            fontSize="1.6rem"
            fontWeight="500"
            color="#E7E7EB;
"
          >
            16°C
          </Box>
          <Box
            as="span"
            fontSize="1.6rem"
            fontWeight="500"
            color="#A09FB1;
"
          >
            11°C
          </Box>
        </HStack>
      </Box>
      <Box bg="#1E213A" p="1.8rem 2.2rem" mb={{ base: "3.2rem", md: 0 }}>
        <Text fontSize="1.6rem" fontWeight="500" mb="1rem" color="#E7E7EB">
          Tomorrow
        </Text>
        <Image src={shower} objectFit="contain" boxSize="5.6rem" mb="3.1rem" />
        <HStack spacing="1.6rem">
          <Box
            as="span"
            fontSize="1.6rem"
            fontWeight="500"
            color="#E7E7EB;
"
          >
            16°C
          </Box>
          <Box
            as="span"
            fontSize="1.6rem"
            fontWeight="500"
            color="#A09FB1;
"
          >
            11°C
          </Box>
        </HStack>
      </Box>
      <Box bg="#1E213A" p="1.8rem 2.2rem">
        <Text fontSize="1.6rem" fontWeight="500" mb="1rem" color="#E7E7EB">
          Tomorrow
        </Text>
        <Image src={shower} objectFit="contain" boxSize="5.6rem" mb="3.1rem" />
        <HStack spacing="1.6rem">
          <Box
            as="span"
            fontSize="1.6rem"
            fontWeight="500"
            color="#E7E7EB;
"
          >
            16°C
          </Box>
          <Box
            as="span"
            fontSize="1.6rem"
            fontWeight="500"
            color="#A09FB1;
"
          >
            11°C
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
}

export default Card;
