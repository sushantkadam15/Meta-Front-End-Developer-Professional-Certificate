import { Heading, Stack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" borderRadius="5" color="black">
      <Image src={imageSrc} />
      <Stack p="3" align="start">
        <Heading size="sm">{title}</Heading>
        <Text fontSize="xs" color="gray.600">
          {description}
        </Text>
        <Text align="end" fontSize="sm" fontWeight="semibold">
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </Stack>
    </VStack>
  );
};

export default Card;
