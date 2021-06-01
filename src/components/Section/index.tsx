import { Button, Divider, Flex, Heading, VStack } from "@chakra-ui/react"
import { Collapse } from "@chakra-ui/transition"
import * as React from "react"
import { FiCode } from "react-icons/fi"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"

type SectionProps = {
  title: string
  subTitle?: React.ReactNode
  children?: React.ReactNode
  codeString?: string
}

const Section: React.FC<SectionProps> = ({
  title,
  subTitle,
  codeString,
  children,
}: SectionProps): JSX.Element => {
  const [showCode, setShowCode] = React.useState(false)

  return (
    <>
      <Flex width="100%" align="center" justify="flex-start">
        <VStack pr={6} py={6} flex={1} align="flex-start" justify="flex-start">
          <Heading fontSize="xl" textAlign="left">
            {title}
          </Heading>
          {subTitle}
        </VStack>
      </Flex>
      {children}
      {!!codeString && (
        <Button
          size="sm"
          rightIcon={<FiCode />}
          aria-label="show code snippet"
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? "Hide" : "Show"} Code
        </Button>
      )}
      {!!codeString && (
        <Collapse style={{ width: "100%" }} in={showCode}>
          <SyntaxHighlighter language="jsx" style={dracula}>
            {codeString}
          </SyntaxHighlighter>
        </Collapse>
      )}
      <Divider pb={4} />
    </>
  )
}

export default Section
