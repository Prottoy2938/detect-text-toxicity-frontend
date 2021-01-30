import React from "react";
import { Box, Image, Heading } from "@chakra-ui/react";
import { Props } from "./output-img.model";

const OutputImg: React.FC<Props> = (props: Props) => {
  const { imgURL, imgAlt } = props;
  return (
    <Box display="table" m="0 auto">
      {/* <Heading mb="30px">Output Image</Heading> */}

      <Image
        boxSize="90%"
        m="0 auto"
        src={imgURL}
        alt={imgAlt ? imgAlt : "Created Image"}
      />
    </Box>
  );
};

export default OutputImg;
