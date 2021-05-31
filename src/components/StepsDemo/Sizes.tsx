import { HStack, Radio, RadioGroup, VStack } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import * as React from "react";
import ResetPrompt from "../ResetPrompt";
import StepContent from "../StepContent";

type StateValue = "sm" | "md" | "lg";

const Sizes = (): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const [stepState, setStepState] = React.useState<StateValue>("md");

  return (
    <VStack width="100%">
      <VStack width="100%" mb={8} align="flex-start">
        <RadioGroup
          defaultValue="md"
          onChange={(val) => setStepState(val as StateValue)}
        >
          <HStack direction="row">
            <Radio value="sm">Small</Radio>
            <Radio value="md">Medium</Radio>
            <Radio value="lg">Large</Radio>
          </HStack>
        </RadioGroup>
      </VStack>
      <Steps size={stepState} activeStep={activeStep}>
        <Step label="Step 1">
          <StepContent
            isHorizontal
            onClickNext={nextStep}
            onClickPrev={prevStep}
            prevDisabled={activeStep === 0}
          />
        </Step>
        <Step label="Step 2">
          <StepContent
            isHorizontal
            onClickNext={nextStep}
            onClickPrev={prevStep}
          />
        </Step>
        <Step label="Step 3">
          <StepContent
            isHorizontal
            onClickNext={nextStep}
            onClickPrev={prevStep}
          />
        </Step>
      </Steps>
      {activeStep === 3 && <ResetPrompt onReset={reset} />}
    </VStack>
  );
};

export default Sizes;
