export const sizesExample = `import { Step, Steps, useSteps } from "chakra-ui-steps"

type StateValue = "sm" | "md" | "lg"

const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]

const Sizes = () => {
  const { prevStep, nextStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })
  const [stepState, setStepState] = React.useState<StateValue>("md")
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
      <Flex width="100%" flexDir="column">
        <Steps size={stepState} activeStep={activeStep}>
          {steps.map(({ label }, index) => (
            <Step label={label} key={label}>
              <Contents index={index} />
            </Step>
          ))}
        </Steps>
      </Flex>
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
    </VStack>
  )
}

export default Sizes`;