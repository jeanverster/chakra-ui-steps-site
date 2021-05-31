export const verticalExample = `
const Vertical = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  return (
    <VStack width="100%">
      <Steps orientation="vertical" activeStep={activeStep}>
        <Step label="Step 1">
          <StepContent
            onClickNext={nextStep}
            onClickPrev={prevStep}
            prevDisabled={activeStep === 0}
          >
            <LoremIpsum p={1} />
          </StepContent>
        </Step>
        <Step label="Step 2">
          <StepContent onClickNext={nextStep} onClickPrev={prevStep}>
            <LoremIpsum p={1} />
          </StepContent>
        </Step>
        <Step label="Step 3">
          <StepContent isLast onClickNext={nextStep} onClickPrev={prevStep}>
            <LoremIpsum p={1} />
          </StepContent>
        </Step>
      </Steps>
      {activeStep === 3 && <ResetPrompt onReset={reset} />}
    </VStack>
  );
};
`;
