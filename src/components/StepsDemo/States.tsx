import {
  Button,
  Flex,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react"
import { Step, Steps, useSteps } from "chakra-ui-steps"
import * as React from "react"
import Contents from "../Contents"

type StateValue = "loading" | "error" | undefined

const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]

export const States = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })

  const [stepState, setStepState] = React.useState<StateValue>("loading")

  return (
    <Flex flexDir="column" width="100%">
      <VStack width="100%" mb={8} align="flex-start">
        <RadioGroup
          defaultValue="loading"
          onChange={(val) => setStepState(val as StateValue)}
        >
          <HStack direction="row">
            <Radio value="loading">Loading</Radio>
            <Radio value="error">Error</Radio>
          </HStack>
        </RadioGroup>
      </VStack>
      <Steps state={stepState} activeStep={activeStep}>
        {steps.map(({ label }, index) => (
          <Step label={label} key={label}>
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

export default States
