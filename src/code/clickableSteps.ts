export const clickableStepsExample = `import { Step, Steps, useSteps } from "chakra-ui-steps"

const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]

export const ClickableSteps = () => {
  const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
    initialStep: 0,
  })

  return (
    <Flex flexDir="column" width="100%">
      <Steps onClickStep={(step) => setStep(step)} activeStep={activeStep}>
        {steps.map(({ label }, index) => (
          <Step label={label} key={label}>
            <Contents index={index} />
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex px={4} py={4} width="100%" flexDirection="column">
          <Heading fontSize="xl" textAlign="center">
            Woohoo! All steps completed!
          </Heading>
          <Button mx="auto" mt={6} size="sm" onClick={reset}>
            Reset
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
            size="sm"
            variant="ghost"
          >
            Prev
          </Button>
          <Button size="sm" onClick={nextStep}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Flex>
      )}
    </Flex>
  )
}`
