export const customIconsExample = `import { Step, Steps, useSteps } from "chakra-ui-steps"
import { FiClipboard, FiDollarSign, FiUser } from "react-icons/fi"

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

export default CustomIcons`
