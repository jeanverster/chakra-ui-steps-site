export const verticalLabelsExample = `const steps = [
  { label: "Step 1", description: "Step 1 description" },
  { label: "Step 2", description: "Step 2 description" },
  { label: "Step 3", description: "Step 3 description" },
]

export const VerticalLabels = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })
  return (
    <Flex flexDir="column" width="100%">
      <Steps labelOrientation="vertical" activeStep={activeStep}>
        {steps.map(({ label, description }, index) => (
          <Step label={label} key={label} description={description}>
            <Contents index={index} />
          </Step>
        ))}
      </Steps>
      {activeStep === 3 ? (
        <ResetPrompt onReset={reset} />
      ) : (
        <StepButtons
          nextStep={nextStep}
          prevStep={prevStep}
          prevDisabled={activeStep === 0}
        />
      )}
    </Flex>
  )
}

export default VerticalLabels`
