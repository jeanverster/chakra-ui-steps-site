import { Button, Divider, Flex, Heading, VStack } from "@chakra-ui/react";
import * as React from "react";
import { FiCode } from "react-icons/fi";
import CodeBlock from "../CodeBlock";

type SectionProps = {
  title: string;
  subTitle?: React.ReactNode;
  children?: React.ReactNode;
  codeString?: string;
};

const Section: React.FC<SectionProps> = ({
  title,
  subTitle,
  codeString,
  children,
}: SectionProps): JSX.Element => {
  const [showCode, setShowCode] = React.useState(false);

  return (
    <>
      <Flex width="100%" align="center" justify="flex-start">
        <VStack pr={6} py={6} flex={1} align="flex-start" justify="flex-start">
          <Heading fontSize="xl" textAlign="left">
            {title}
          </Heading>
          {subTitle}
        </VStack>
        {!!codeString && (
          <Button
            size="sm"
            rightIcon={<FiCode />}
            aria-label="show code snippet"
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? "Hide" : "Show"} Code
          </Button>
        )}
      </Flex>
      {children}
      {!!codeString && (
        <CodeBlock codeString={codeString || ""} show={showCode} />
      )}
      <Divider pb={4} />
    </>
  );
};

export default Section;
