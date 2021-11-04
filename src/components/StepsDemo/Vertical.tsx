import { Step, Steps, useSteps } from "chakra-ui-steps"
import * as React from "react"
import Contents from "../Contents"
import ResetPrompt from "../ResetPrompt"
import StepButtons from "../StepButtons"

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
      {activeStep === 3 ? (
        <ResetPrompt onReset={reset} />
      ) : (
        <StepButtons
          nextStep={nextStep}
          prevStep={prevStep}
          prevDisabled={activeStep === 0}
        />
      )}
    </>
  )
}

export default Vertical
