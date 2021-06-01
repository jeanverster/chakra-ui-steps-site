import { Flex, VStack } from "@chakra-ui/react"
import { Step, Steps, useSteps } from "chakra-ui-steps"
import * as React from "react"
import { LoremIpsum } from "react-lorem-ipsum"
import ResetPrompt from "../ResetPrompt"
import StepButtons from "../StepButtons/index"

const content = (
  <Flex py={4}>
    <LoremIpsum p={1} />
  </Flex>
)

const steps = [
  { label: "Step 1", description: "Step 1 description", content },
  { label: "Step 2", description: "Step 2 description", content },
  { label: "Step 3", description: "Step 3 description", content },
]

export const Descriptions = (): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })
  return (
    <VStack width="100%">
      <Steps colorScheme="telegram" activeStep={activeStep}>
        {steps.map(({ label, content, description }) => (
          <Step label={label} key={label} description={description}>
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

export default Descriptions
