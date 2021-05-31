import { VStack } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import * as React from "react";
import { FiClipboard, FiDollarSign, FiUser } from "react-icons/fi";
import { LoremIpsum } from "react-lorem-ipsum";
import ResetPrompt from "../ResetPrompt";
import StepContent from "../StepContent";

const CustomIcons = (): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <VStack width="100%">
      <Steps activeStep={activeStep}>
        <Step icon={FiUser} label="Login">
          <StepContent
            isHorizontal
            onClickNext={nextStep}
            onClickPrev={prevStep}
            prevDisabled={activeStep === 0}
          >
            <LoremIpsum p={1} />
          </StepContent>
        </Step>
        <Step icon={FiClipboard} label="Verification">
          <StepContent
            isHorizontal
            onClickNext={nextStep}
            onClickPrev={prevStep}
          >
            <LoremIpsum p={1} />
          </StepContent>
        </Step>
        <Step icon={FiDollarSign} label="Pay">
          <StepContent
            isLast
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

export default CustomIcons;
