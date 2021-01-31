import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import { Props } from "./result-table.model";
import { v4 as uuid } from "uuid";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const ResultTable: React.FC<Props> = (props: Props) => {
  const { resultData } = props;
  return (
    <Box>
      <Heading
        mt={5}
        mb={10}
        as="h1"
        size="md"
        borderBottom="6px double black"
        pb={2}
        display="table"
      >
        Result
      </Heading>
      <Box width={["95%", "90%", "75%", "800px"]} m="0 auto">
        <table className="answerTableD">
          <thead>
            {/* <tr>
              {resultData.map(type => {
                const title=capitalizeFirstLetter(type.label.replace('_',''))
                return(
                  <th key={uuid()}>{title}</th>
                )
              })}
            </tr> */}
            <tr>
              <th>Identity Attack</th>
              <th>Insult</th>
              <th>Obscene</th>
              <th>Severe Toxicity</th>
              <th>Sexual Explicit </th>
              <th>Threat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                {resultData.map((type) => {
                  console.log(type);
                  if (type.label === "identity_attack") {
                    if (type.results[0].match) {
                      return (
                        <Button variant="ghost" colorScheme="red" size="sm">
                          Yes
                        </Button>
                      );
                    } else {
                      return (
                        <Button
                          bg="rgba(154, 230, 180, 0.09)"
                          variant="ghost"
                          colorScheme="green"
                          size="sm"
                        >
                          No
                        </Button>
                      );
                    }
                  }
                })}
              </th>
              <th>
                {resultData.map((type) => {
                  if (type.label === "insult") {
                    if (type.results[0].match) {
                      return (
                        <Button
                          bg="rgba(254, 178, 178, 0.09)"
                          variant="ghost"
                          colorScheme="red"
                          size="sm"
                        >
                          Yes
                        </Button>
                      );
                    } else {
                      return (
                        <Button
                          bg="rgba(154, 230, 180, 0.09)"
                          variant="ghost"
                          colorScheme="green"
                          size="sm"
                        >
                          No
                        </Button>
                      );
                    }
                  }
                })}
              </th>
              <th>
                {resultData.map((type) => {
                  if (type.label === "obscene") {
                    if (type.results[0].match) {
                      return (
                        <Button
                          bg="rgba(254, 178, 178, 0.09)"
                          variant="ghost"
                          colorScheme="red"
                          size="sm"
                        >
                          Yes
                        </Button>
                      );
                    } else {
                      return (
                        <Button
                          bg="rgba(154, 230, 180, 0.09)"
                          variant="ghost"
                          colorScheme="green"
                          size="sm"
                        >
                          No
                        </Button>
                      );
                    }
                  }
                })}
              </th>
              <th>
                {resultData.map((type) => {
                  if (type.label === "severe_toxicity") {
                    if (type.results[0].match) {
                      return (
                        <Button
                          bg="rgba(254, 178, 178, 0.09)"
                          variant="ghost"
                          colorScheme="red"
                          size="sm"
                        >
                          Yes
                        </Button>
                      );
                    } else {
                      return (
                        <Button
                          bg="rgba(154, 230, 180, 0.09)"
                          variant="ghost"
                          colorScheme="green"
                          size="sm"
                        >
                          No
                        </Button>
                      );
                    }
                  }
                })}
              </th>
              <th>
                {resultData.map((type) => {
                  if (type.label === "sexual_explicit") {
                    if (type.results[0].match) {
                      return (
                        <Button
                          bg="rgba(254, 178, 178, 0.09)"
                          variant="ghost"
                          colorScheme="red"
                          size="sm"
                        >
                          Yes
                        </Button>
                      );
                    } else {
                      return (
                        <Button
                          bg="rgba(154, 230, 180, 0.09)"
                          variant="ghost"
                          colorScheme="green"
                          size="sm"
                        >
                          No
                        </Button>
                      );
                    }
                  }
                })}
              </th>
              <th>
                {resultData.map((type) => {
                  if (type.label === "threat") {
                    if (type.results[0].match) {
                      return (
                        <Button
                          bg="rgba(254, 178, 178, 0.09)"
                          variant="ghost"
                          colorScheme="red"
                          size="sm"
                        >
                          Yes
                        </Button>
                      );
                    } else {
                      return (
                        <Button
                          bg="rgba(154, 230, 180, 0.09)"
                          variant="ghost"
                          colorScheme="green"
                          size="sm"
                        >
                          No
                        </Button>
                      );
                    }
                  }
                })}
              </th>
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default ResultTable;
