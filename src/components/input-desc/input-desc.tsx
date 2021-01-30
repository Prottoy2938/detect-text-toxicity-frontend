import React from "react";
import { Box, Textarea, Heading } from "@chakra-ui/react";
import { Props } from "./input-desc.model";

const InputDesc: React.FC<Props> = (props: Props) => {
  const { description, handleDescriptionChange } = props;
  return (
    <Box>
      <Heading mb="30px">Image Description</Heading>
      <Textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Describe Image"
        width="90%"
      />
    </Box>
  );
};
export default InputDesc;
