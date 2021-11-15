import {
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react"
import { Step, Steps, useSteps } from "chakra-ui-steps"
import * as React from "react"
import Contents from "../Contents/index"

type StateValue = "sm" | "md" | "lg"

const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]

const Sizes = () => {
  const { prevStep, nextStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })
  const [stepState, setStepState] = React.useState<StateValue>("md")
  return (
    <VStack width="100%">
      <VStack width="100%" mb={8} align="flex-start">
        <RadioGroup
          defaultValue="md"
          onChange={(val) => setStepState(val as StateValue)}
        >
          <HStack direction="row">
            <Radio value="sm">Small</Radio>
            <Radio value="md">Medium</Radio>
            <Radio value="lg">Large</Radio>
          </HStack>
        </RadioGroup>
      </VStack>
      <Flex width="100%" flexDir="column">
        <Steps size={stepState} activeStep={activeStep}>
          {steps.map(({ label }, index) => (
            <Step label={label} key={label}>
              <Contents index={index} />
            </Step>
          ))}
        </Steps>
      </Flex>
      {activeStep === 3 ? (
        <Center p={4} flexDir="column">
          <Heading fontSize="xl">Woohoo! All steps completed!</Heading>
          <Button mt={6} size="sm" onClick={reset}>
            Reset
          </Button>
        </Center>
      ) : (
        <Flex width="100%" justify="flex-end">
          <Button
            mr={4}
            size="sm"
            variant="ghost"
            onClick={prevStep}
            isDisabled={activeStep === 0}
          >
            Prev
          </Button>
          <Button size="sm" onClick={nextStep}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Flex>
      )}
    </VStack>
  )
}

export default Sizes
