export const verticalExample = `import { Step, Steps, useSteps } from "chakra-ui-steps"

const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]

export const Vertical = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })
  return (
    <>
      <Steps orientation="vertical" activeStep={activeStep}>
        {steps.map(({ label }, index) => (
          <Step width="100%" label={label} key={label}>
            <Contents my={1} index={index} />
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
    </>
  )
}

export default Vertical`
