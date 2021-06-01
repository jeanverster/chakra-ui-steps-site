export const verticalExample = `import { Step, Steps, useSteps } from "chakra-ui-steps"
import { LoremIpsum } from "react-lorem-ipsum"

const content = (
  <Flex textAlign="left" py={2} px={4}>
    <LoremIpsum p={1} />
  </Flex>
)

const steps = [
  { label: "Step 1", content },
  { label: "Step 2", content },
  { label: "Step 3", content },
]

export const Vertical = (): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })

  return (
    <VStack width="100%">
      <Steps orientation="vertical" activeStep={activeStep}>
        <Steps activeStep={activeStep}>
          {steps.map(({ label, content }) => (
            <Step label={label} key={label}>
              {content}
            </Step>
          ))}
        </Steps>
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
