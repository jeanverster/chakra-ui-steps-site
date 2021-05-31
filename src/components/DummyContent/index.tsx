import { Flex, Heading } from "@chakra-ui/react";
import * as React from "react";

type DummyContentProps = {
  title: string;
};

const DummyContent = ({ title }: DummyContentProps): JSX.Element => {
  return (
    <Flex
      p={8}
      flex={1}
      width="100%"
      rounded="md"
      align="center"
      borderWidth={1}
      justify="center"
    >
      <Heading fontSize="xl">{title}</Heading>
    </Flex>
  );
};

export default DummyContent;
