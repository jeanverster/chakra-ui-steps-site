import { Flex, Heading } from "@chakra-ui/react";
import * as React from "react";

type DummyContentProps = {
  title: string;
};

const DummyContent = ({ title }: DummyContentProps): JSX.Element => {
  return (
    <Flex
      justify="center"
      align="center"
      borderWidth={1}
      p={8}
      width="100%"
      flex={1}
      rounded="md"
    >
      <Heading fontSize="xl">{title}</Heading>
    </Flex>
  );
};

export default DummyContent;
