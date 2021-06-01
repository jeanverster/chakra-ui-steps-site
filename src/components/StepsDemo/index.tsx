import {
  Code,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react"
import * as React from "react"
import { customIconsExample } from "../../code/customIcons"
import { descriptionsExample } from "../../code/descriptions"
import { horizontalExample } from "../../code/horizontal"
import { statesExample } from "../../code/states"
import { verticalExample } from "../../code/vertical"
import Section from "../Section/index"
import CustomIcons from "./CustomIcons"
import Descriptions from "./Descriptions"
import Horizontal from "./Horizontal"
import Sizes from "./Sizes"
import States from "./States"
import Vertical from "./Vertical"

type StepsDemoProps = {}

const StepsDemo = (props: StepsDemoProps): JSX.Element => {
  return (
    <VStack width="100%" p={4}>
      <Flex mb={4} align="center" justify="center">
        <Image
          width="40px"
          height="40px"
          rounded="full"
          src={require("../../assets/54212428.png")?.default}
        />
        <Heading ml={4} textAlign="left">
          chakra-ui-steps
        </Heading>
        <Spacer />
      </Flex>

      <Section
        title="Horizontal"
        codeString={horizontalExample}
        subTitle={<Text textAlign="left">A simple horizontal stepper.</Text>}
      >
        <Horizontal />
      </Section>
      <Section
        title="Vertical"
        codeString={verticalExample}
        subTitle={
          <Text>
            By using the <Code>orientation</Code> prop you are able to switch
            between <Code>horizontal</Code> (default) and <Code>vertical</Code>{" "}
            layouts. By default, when in mobile view the <Code>Steps</Code>{" "}
            component will switch to <Code>vertical</Code> orientation. To
            disable this behaviour you can use the <Code>responsive</Code> prop.
          </Text>
        }
      >
        <Vertical />
      </Section>
      <Section
        title="Descriptions"
        codeString={descriptionsExample}
        subTitle={
          <Text textAlign="left">
            The <Code>Step</Code> component also accepts a{" "}
            <Code>description</Code> prop which can be used to provide some
            extra information about the step.
          </Text>
        }
      >
        <Descriptions />
      </Section>
      <Section
        title="Custom Icons"
        codeString={customIconsExample}
        subTitle={
          <Text textAlign="left">
            If you want to show custom icons instead of the default numerical
            indicators, you can do so by using the <Code>icon</Code> prop on the{" "}
            <Code>Step</Code> component.
          </Text>
        }
      >
        <CustomIcons />
      </Section>
      <Section
        title="States"
        codeString={statesExample}
        subTitle={
          <Text textAlign="left">
            Sometimes it is useful to show visual feedback to the user depending
            on some asynchronous logic. In this case we can use the{" "}
            <Code>state</Code> prop.
          </Text>
        }
      >
        <States />
      </Section>
      <Section
        title="Sizes"
        subTitle={
          <Text textAlign="left">
            By using the <Code>size</Code> prop you are able to quickly and
            easily adjust the general sizing of the component.
          </Text>
        }
      >
        <Sizes />
      </Section>
      <Flex p={8}>
        <HStack>
          <Text>Made by</Text>
          <Link
            target="_blank"
            href="https://github.com/jeanverster"
            rel="noopen noreferrer"
          >
            <Text fontWeight="bold">jeanverster</Text>
          </Link>
        </HStack>
      </Flex>
    </VStack>
  )
}

export default StepsDemo
