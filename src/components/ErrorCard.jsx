import React from "react";
import { useNavigate } from "react-router";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
} from "@chakra-ui/react";

export default function ErrorCard() {
  const navigate = useNavigate();
  const backToMainPage = () => {
    navigate("/");
  };
  return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="300px"
      width="700px"
      maxWidth="90%"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Country Data not Found!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Please try another country by clicking button under this discription.
      </AlertDescription>
      <Button mt={30} colorScheme="red" size="lg" onClick={backToMainPage}>
        Go to Map!
      </Button>
    </Alert>
  );
}
