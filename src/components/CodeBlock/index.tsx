import { Flex } from "@chakra-ui/react";
import { Collapse } from "@chakra-ui/transition";
import * as React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

type CodeBlockProps = {
  codeString: string;
  show: boolean;
};

const CodeBlock = ({ codeString, show }: CodeBlockProps): JSX.Element => {
  return (
    <Flex width="100%">
      <Collapse style={{ width: "100%" }} in={show}>
        <CopyBlock
          language="jsx"
          theme={dracula}
          showLineNumbers
          text={codeString}
          style={{ width: "100%", padding: "2rem" }}
        />
      </Collapse>
    </Flex>
  );
};

export default CodeBlock;
