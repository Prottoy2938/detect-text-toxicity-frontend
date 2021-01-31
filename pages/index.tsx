import React, { useState } from "react";
import InputDesc from "../src/components/input-desc/input-desc";
import {
  Grid,
  GridItem,
  Box,
  Button,
  useToast,
  Text,
  Link,
} from "@chakra-ui/react";
import axios from "axios";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { NextSeo } from "next-seo";

const Home: React.FC = () => {
  const [sentence, setSentence] = useState("");
  const [submitRunning, setSubmitRunning] = useState(false);

  const toast = useToast();

  const handlesentenceChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSentence(e.target.value);
  };

  const handleSubmit = () => {
    if (sentence) {
      setSubmitRunning(true);
      axios
        .post("https://ttd-api-demo.herokuapp.com/", {
          text: sentence,
          key: "m1ZJCGh5Q3TX",
        })
        .then((res) => {
          const {
            data: { result },
          } = res;
          console.log(result);
        })
        .catch((e) => {
          console.error(e);
          toast({
            title: "Something Went Wrong!",
            description: "Try again. if this problem persists, contact us.",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom-right",
          });
        });
    } else {
      toast({
        description: "No text provided",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      <NextSeo
        title="Text Toxicity Detection"
        description="An accessible web app to detect text toxicity"
      />
      <Box
        display="table"
        m="0 auto"
        w={["95%", "85%", "65%", "50%"]}
        mt="20px"
      >
        <Grid templateColumns="repeat(4, 1fr)" gap="150px">
          <GridItem colSpan={4}>
            <InputDesc
              sentence={sentence}
              handlesentenceChange={handlesentenceChange}
            />
            <Button
              size="lg"
              pr={24}
              pl={24}
              bgGradient="linear(to-r,gray.300,yellow.400,pink.200)"
              display="table"
              m="0 auto"
              mt={16}
              _hover={{
                bgGradient: "linear(to-r,gray.400,yellow.500,pink.300)",
              }}
              _active={{
                bgGradient: "linear(to-r,gray.400,yellow.500,pink.300)",
                transform: "scale(0.98)",
              }}
              onClick={handleSubmit}
            >
              Check
            </Button>
          </GridItem>

          <GridItem colSpan={4}>
            {/* Create a demo image, and on page load, show that image with the sentence */}
          </GridItem>
        </Grid>
        <Box pos="fixed" right={5} bottom={5}>
          <Link
            isExternal
            color="teal.500"
            href="https://github.com/Prottoy2938/expressjs-text-toxicity-detection-api"
          >
            <Text>
              View the toxicity detection API <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Home;
