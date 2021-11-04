export const customCheckIconExample = `import { Step, Steps, useSteps } from "chakra-ui-steps"
import { FiCheckCircle } from "react-icons/fi"

const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]

export const CustomCheckIcon = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })
  return (
    <Flex flexDir="column" width="100%">
      <Steps checkIcon={FiCheckCircle} activeStep={activeStep}>
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

export default CustomCheckIcon`
