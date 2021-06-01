import { Flex, VStack } from "@chakra-ui/react"
import { Step, Steps, useSteps } from "chakra-ui-steps"
import * as React from "react"
import { FiClipboard, FiDollarSign, FiUser } from "react-icons/fi"
import { LoremIpsum } from "react-lorem-ipsum"
import ResetPrompt from "../ResetPrompt"
import StepButtons from "../StepButtons/index"

const content = (
  <Flex py={4}>
    <LoremIpsum p={1} />
  </Flex>
)

const steps = [
  { label: "Login", icon: FiUser, content },
  { label: "Verification", icon: FiClipboard, content },
  { label: "Pay", icon: FiDollarSign, content },
]

export const CustomIcons = (): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })
  return (
    <VStack width="100%">
      <Steps activeStep={activeStep}>
        {steps.map(({ label, content, icon }) => (
          <Step label={label} key={label} icon={icon}>
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

export default CustomIcons
