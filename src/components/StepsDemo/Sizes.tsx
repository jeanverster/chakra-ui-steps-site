import { Flex, HStack, Radio, RadioGroup, VStack } from "@chakra-ui/react"
import { Step, Steps, useSteps } from "chakra-ui-steps"
import * as React from "react"
import Contents from "../Contents/index"
import ResetPrompt from "../ResetPrompt"
import StepButtons from "../StepButtons"

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
      {activeStep === 3 ? (
        <ResetPrompt onReset={reset} />
      ) : (
        <StepButtons
          nextStep={nextStep}
          prevStep={prevStep}
          prevDisabled={activeStep === 0}
        />
      )}
    </VStack>
  )
}

export default Sizes
