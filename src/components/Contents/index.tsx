import { Flex, FlexProps, Text, useColorModeValue } from "@chakra-ui/react"
import * as React from "react"

type ContentProps = FlexProps & {
  index: number
}

const Contents = ({ index, ...rest }: ContentProps) => {
  const bg = useColorModeValue("gray.200", "gray.700")
  return (
    <Flex
      height="80px"
      bg={bg}
      rounded="md"
      width="100%"
      align="center"
      justify="center"
      my={[2, 3, 6]}
      {...rest}
    >
      <Text>Step {index + 1} Contents</Text>
    </Flex>
  )
}

export default Contents
