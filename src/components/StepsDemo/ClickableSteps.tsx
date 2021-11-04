import { Flex } from "@chakra-ui/react"
import { Step, Steps, useSteps } from "chakra-ui-steps"
import * as React from "react"
import Contents from "../Contents"
import ResetPrompt from "../ResetPrompt"
import StepButtons from "../StepButtons"

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

export default ClickableSteps
