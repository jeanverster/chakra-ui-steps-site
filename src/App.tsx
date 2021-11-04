import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react"
import { StepsStyleConfig as Steps } from "chakra-ui-steps"
import * as React from "react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import StepsDemo from "./components/StepsDemo"

const theme = extendTheme({
  components: {
    Steps,
  },
})

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        p={3}
        minH="100vh"
        maxW={["100%", "50vmax"]}
        margin="0 auto"
        alignItems="center"
        justifyContent="center"
      >
        <ColorModeSwitcher justifySelf="flex-end" />
        <StepsDemo />
      </Flex>
    </ChakraProvider>
  )
}
