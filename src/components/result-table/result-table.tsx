import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";

const ResultTable: React.FC = () => {
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
                <Button variant="ghost" colorScheme="green" size="sm">
                  YES
                </Button>
              </th>
              <th>
                <Button variant="ghost" colorScheme="red" size="sm">
                  NO
                </Button>
              </th>
              <th>
                <Button variant="ghost" colorScheme="red" size="sm">
                  NO
                </Button>
              </th>
              <th>
                <Button variant="ghost" colorScheme="green" size="sm">
                  YES
                </Button>
              </th>
              <th>
                <Button variant="ghost" colorScheme="green" size="sm">
                  YES
                </Button>
              </th>
              <th>
                <Button variant="ghost" colorScheme="red" size="sm">
                  NO
                </Button>
              </th>
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default ResultTable;
