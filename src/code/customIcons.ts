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
      {activeStep === steps.length ? (
        <Flex px={4} py={4} width="100%" flexDirection="column">
          <Heading fontSize="xl" textAlign="center">
            Woohoo! All steps completed!
          </Heading>
          <Button mx="auto" mt={6} size="sm" onClick={reset}>
            Reset
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
            size="sm"
            variant="ghost"
          >
            Prev
          </Button>
          <Button size="sm" onClick={nextStep}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

export default CustomIcons`
