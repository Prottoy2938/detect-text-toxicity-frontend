import React from "react";
import { Box, Textarea, Heading } from "@chakra-ui/react";
import { Props } from "./input-desc.model";

const InputDesc: React.FC<Props> = (props: Props) => {
  const { sentence, handlesentenceChange } = props;

  return (
    <Box>
      <Heading mb="30px">Text Toxicity Detection</Heading>
      <Textarea
        value={sentence}
        onChange={handlesentenceChange}
        placeholder="Describe Image"
        width="90%"
        height="150px"
      />
    </Box>
  );
};
export default InputDesc;
