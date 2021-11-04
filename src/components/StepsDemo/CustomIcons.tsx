import { Flex } from "@chakra-ui/react"
import { Step, Steps, useSteps } from "chakra-ui-steps"
import * as React from "react"
import { FiClipboard, FiDollarSign, FiUser } from "react-icons/fi"
import Contents from "../Contents"
import ResetPrompt from "../ResetPrompt"
import StepButtons from "../StepButtons"

const steps = [
  { label: "Login", icon: FiUser },
  { label: "Verification", icon: FiClipboard },
  { label: "Pay", icon: FiDollarSign },
]

export const CustomIcons = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })
  return (
    <Flex flexDir="column" width="100%">
      <Steps activeStep={activeStep}>
        {steps.map(({ label, icon }, index) => (
          <Step label={label} key={label} icon={icon}>
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

export default CustomIcons
