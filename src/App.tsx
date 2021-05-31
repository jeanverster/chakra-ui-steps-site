import {
  ChakraProvider,
  extendTheme,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import { StepsStyleConfig } from "chakra-ui-steps";
import * as React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import StepsDemo from "./components/StepsDemo";

const theme = extendTheme({
  components: {
    Steps: StepsStyleConfig,
  },
});

export const App = () => {
  const [isMobile] = useMediaQuery("(max-width: 43em)");
  return (
    <ChakraProvider theme={theme}>
      <Flex
        p={3}
        minH="100vh"
        maxW={isMobile ? "100%" : "50vmax"}
        margin="0 auto"
        alignItems="center"
        justifyContent="center"
      >
        <ColorModeSwitcher justifySelf="flex-end" />
        <StepsDemo />
      </Flex>
    </ChakraProvider>
  );
};
