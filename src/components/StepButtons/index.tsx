import { Button, Flex } from "@chakra-ui/react"
import * as React from "react"

type StepButtonsProps = {
  nextStep?: () => void
  prevStep?: () => void
  prevDisabled?: boolean
  nextDisabled?: boolean
  isLast?: boolean
}

const StepButtons = ({
  nextStep,
  prevStep,
  prevDisabled,
  nextDisabled,
  isLast,
}: StepButtonsProps): JSX.Element => {
  return (
    <Flex width="100%" justify="flex-end">
      <Button
        isDisabled={prevDisabled}
        mr={4}
        onClick={prevStep}
        size="sm"
        variant="ghost"
      >
        Prev
      </Button>
      <Button isDisabled={nextDisabled} size="sm" onClick={nextStep}>
        {isLast ? "Finish" : "Next"}
      </Button>
    </Flex>
  )
}

export default StepButtons
