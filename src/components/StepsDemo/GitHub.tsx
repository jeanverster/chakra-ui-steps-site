import { Flex } from "@chakra-ui/react"
import { Step, Steps, useSteps } from "chakra-ui-steps"
import * as React from "react"
import { FiCheckCircle } from "react-icons/fi"
import Contents from "../Contents"
import ResetPrompt from "../ResetPrompt"
import StepButtons from "../StepButtons"

const steps = [
  { label: "Two Factor Authentication" },
  { label: "Authentication Verification" },
  { label: "Save Your Recovery Codes" },
  {
    label: "Two Factor Authentication Activated",
    icon: FiCheckCircle,
    isCompletedStep: true,
  },
]

export const Github = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })
  return (
    <>
      <Steps
        checkIcon={FiCheckCircle}
        orientation="vertical"
        activeStep={activeStep}
      >
        {steps.map(({ label, icon }, index) => {
          const isLast = index === steps.length - 1
          return (
            <Step width="100%" label={label} key={label} icon={icon}>
              {isLast ? (
                <Flex
                  py={4}
                  rounded="md"
                  align="center"
                  bg="green.500"
                  justify="center"
                >
                  <ResetPrompt onReset={reset} />
                </Flex>
              ) : (
                <Contents my={1} index={index} />
              )}
            </Step>
          )
        })}
      </Steps>
      {activeStep !== 3 && (
        <StepButtons
          nextStep={nextStep}
          prevStep={prevStep}
          prevDisabled={activeStep === 0}
        />
      )}
    </>
  )
}

export default Github
