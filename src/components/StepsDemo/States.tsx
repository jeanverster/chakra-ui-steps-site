import { HStack, Radio, RadioGroup, VStack } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import * as React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import ResetPrompt from "../ResetPrompt";
import StepContent from "../StepContent";

type StateValue = "loading" | "error" | undefined;

const States = (): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const [stepState, setStepState] = React.useState<StateValue>("loading");

  return (
    <VStack width="100%">
      <VStack width="100%" mb={8} align="flex-start">
        <RadioGroup
          onChange={(val) => setStepState(val as StateValue)}
          defaultValue="loading"
        >
          <HStack direction="row">
            <Radio value="loading">Loading</Radio>
            <Radio value="error">Error</Radio>
          </HStack>
        </RadioGroup>
      </VStack>
      <Steps state={stepState} activeStep={activeStep}>
        <Step label="Step 1">
          <StepContent
            isHorizontal
            onClickNext={nextStep}
            onClickPrev={prevStep}
            prevDisabled={activeStep === 0}
          >
            <LoremIpsum p={1} />
          </StepContent>
        </Step>
        <Step label="Step 2">
          <StepContent
            isHorizontal
            onClickNext={nextStep}
            onClickPrev={prevStep}
          >
            <LoremIpsum p={1} />
          </StepContent>
        </Step>
        <Step label="Step 3">
          <StepContent
            isHorizontal
            onClickNext={nextStep}
            onClickPrev={prevStep}
          >
            <LoremIpsum p={1} />
          </StepContent>
        </Step>
      </Steps>
      {activeStep === 3 && <ResetPrompt onReset={reset} />}
    </VStack>
  );
};

export default States;
