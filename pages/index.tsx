import React, { useState } from "react";
import InputDesc from "../src/components/input-desc/input-desc";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import OutputImg from "../src/components/output-img/output-img";

const Home: React.FC = () => {
  const [description, setDescription] = useState("");
  const [imgURL, setImgURL] = useState("");
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };
  return (
    <Box display="table" m="0 auto" w={["95%", "85%", "65%", "50%"]} mt="50px">
      <Grid templateColumns="repeat(4, 1fr)" gap="150px">
        <GridItem colSpan={4}>
          <InputDesc
            description={description}
            handleDescriptionChange={handleDescriptionChange}
          />
        </GridItem>
        <GridItem colSpan={4}>
          {/* Create a demo image, and on page load, show that image with the description */}
          <OutputImg imgURL={imgURL} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
