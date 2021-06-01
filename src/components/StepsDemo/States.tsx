import { Flex, HStack, Radio, RadioGroup, VStack } from "@chakra-ui/react"
import { Step, Steps, useSteps } from "chakra-ui-steps"
import * as React from "react"
import { LoremIpsum } from "react-lorem-ipsum"
import ResetPrompt from "../ResetPrompt"
import StepButtons from "../StepButtons/index"

type StateValue = "loading" | "error" | undefined

const content = (
  <Flex py={4}>
    <LoremIpsum p={1} />
  </Flex>
)

const steps = [
  { label: "Step 1", content },
  { label: "Step 2", content },
  { label: "Step 3", content },
]

export const States = (): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })

  const [stepState, setStepState] = React.useState<StateValue>("loading")

  return (
    <VStack width="100%">
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
        {steps.map(({ label, content }) => (
          <Step label={label} key={label}>
            {content}
          </Step>
        ))}
      </Steps>
      {activeStep === 3 ? (
        <ResetPrompt onReset={reset} />
      ) : (
        <StepButtons
          {...{ nextStep, prevStep }}
          prevDisabled={activeStep === 0}
        />
      )}
    </VStack>
  )
}

export default States
