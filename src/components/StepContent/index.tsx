import { Button, HStack, VStack } from "@chakra-ui/react";
import * as React from "react";

type StepContentProps = {
  onClickNext?: () => void;
  onClickPrev?: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  isLast?: boolean;
  isHorizontal?: boolean;
};

const StepContent: React.FC<StepContentProps> = ({
  children,
  onClickNext,
  onClickPrev,
  prevDisabled,
  nextDisabled,
  isLast,
  isHorizontal,
}) => {
  return (
    <VStack
      ml={2}
      width="100%"
      rounded="md"
      textAlign="left"
      align="flex-start"
      px={isHorizontal ? 0 : 2}
      py={isHorizontal ? 4 : 0}
    >
      {children}
      <HStack
        pt={4}
        spacing={4}
        width="100%"
        justify={isHorizontal ? "flex-end" : "flex-start"}
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={onClickPrev}
          isDisabled={prevDisabled}
        >
          Prev
        </Button>
        <Button isDisabled={nextDisabled} size="sm" onClick={onClickNext}>
          {isLast ? "Finish" : "Next"}
        </Button>
      </HStack>
    </VStack>
  );
};

export default StepContent;
