export const horizontalExample = `import { Step, Steps, useSteps } from "chakra-ui-steps"
import { LoremIpsum } from "react-lorem-ipsum"

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

export const Horizontal = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })
  return (
    <VStack width="100%">
      <Steps activeStep={activeStep}>
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
}`
