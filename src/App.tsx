import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react"
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
      <Container
        p={3}
        minH="100vh"
        margin="0 auto"
        alignItems="center"
        justifyContent="center"
        maxW="container.md"
      >
        <ColorModeSwitcher justifySelf="flex-end" />
        <StepsDemo />
      </Container>
    </ChakraProvider>
  )
}
