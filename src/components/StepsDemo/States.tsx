import { Flex, HStack, Radio, RadioGroup, VStack } from "@chakra-ui/react"
import { Step, Steps, useSteps } from "chakra-ui-steps"
import * as React from "react"
import Contents from "../Contents"
import ResetPrompt from "../ResetPrompt"
import StepButtons from "../StepButtons/index"

type StateValue = "loading" | "error" | undefined

const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]

export const States = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })

  const [stepState, setStepState] = React.useState<StateValue>("loading")

  return (
    <Flex flexDir="column" width="100%">
      <VStack width="100%" mb={8} align="flex-start">
        <RadioGroup
          defaultValue="loading"
          onChange={(val) => setStepState(val as StateValue)}
        >
          <HStack direction="row">
            <Radio value="loading">Loading</Radio>
            <Radio value="error">Error</Radio>
          </HStack>
        </RadioGroup>
      </VStack>
      <Steps state={stepState} activeStep={activeStep}>
        {steps.map(({ label }, index) => (
          <Step label={label} key={label}>
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

export default States
