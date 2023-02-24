import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  Button,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import { useNavigate } from "react-router";
import { formatDate } from "../utils";

export default function CountryDetailCard(data) {
  if (!data?.data?.data) {
    return null;
  }
  const navigate = useNavigate();

  const { location, confirmed, deaths, lastChecked } = data.data.data;

  return (
    <Card maxW="90%" width={700}>
      <CardBody>
        <Stack spacing="3">
          <Heading size="md">{location}</Heading>
          <Heading size="xs" color="#999">
            Covid 19 Reports
          </Heading>
          <Divider />
          <TableContainer border="ButtonFace">
            <Table variant="simple" size="sm">
              <Tbody>
                <Tr>
                  <Td>Confirmed patient</Td>
                  <Td>{confirmed}</Td>
                </Tr>
                <Tr>
                  <Td>Deaths</Td>
                  <Td>{deaths}</Td>
                </Tr>
                <Tr>
                  <Td>Last Data Update Date</Td>
                  <Td>{formatDate()}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
      </CardBody>

      <CardFooter>
        <Button
          variant="solid"
          width={"100%"}
          onClick={() => navigate("/")}
          colorScheme="blue"
        >
          Look at another Country Data!
        </Button>
      </CardFooter>
    </Card>
  );
}
