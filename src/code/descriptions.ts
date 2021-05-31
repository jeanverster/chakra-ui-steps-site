export const descriptionsExample = `
const Descriptions = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  return (
    <VStack width="100%">
      <Steps colorScheme="telegram" activeStep={activeStep}>
        <Step label="Step 1" description="Step 1 description">
          <StepContent
            isHorizontal
            onClickNext={nextStep}
            onClickPrev={prevStep}
            prevDisabled={activeStep === 0}
          >
            <LoremIpsum p={1} />
          </StepContent>
        </Step>
        <Step label="Step 2" description="Step 2 description">
          <StepContent
            isHorizontal
            onClickNext={nextStep}
            onClickPrev={prevStep}
          >
            <LoremIpsum p={1} />
          </StepContent>
        </Step>
        <Step label="Step 3" description="Step 3 description">
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
`;
