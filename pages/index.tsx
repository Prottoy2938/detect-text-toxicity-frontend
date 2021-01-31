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
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { NextSeo } from "next-seo";
import ResultTable from "../src/components/result-table/result-table";
import { ResultDataType } from "../src/common-types";

const Home: React.FC = () => {
  const [sentence, setSentence] = useState(
    "We're dudes on computer, moron. You're quite astonishingly stupid."
  );
  const [submitRunning, setSubmitRunning] = useState(false);
  const [resultData, setResultData] = useState<ResultDataType>(null);

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
        })
        .then((res) => {
          const {
            data: { result },
          } = res;
          console.log(result);
          setResultData(result);
          setSubmitRunning(false);
        })
        .catch((e) => {
          setSubmitRunning(false);
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
      setSubmitRunning(false);
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
              display="table"
              m="0 auto"
              mt={16}
              colorScheme="blue"
              onClick={handleSubmit}
            >
              Check
            </Button>
          </GridItem>

          <GridItem colSpan={4}>
            {submitRunning ? (
              <Spinner color="red.500" size="xl" display="table" m="0 auto" />
            ) : resultData ? (
              <ResultTable resultData={resultData} />
            ) : null}
          </GridItem>
        </Grid>
        <Box pos="fixed" right={5} bottom={5}>
          <Link
            isExternal
            color="teal.500"
            href="https://github.com/Prottoy2938/expressjs-text-toxicity-detection-api"
          >
            <Text fontSize="sm">
              View the toxicity detection API <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Home;
