import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Flex, Spinner } from "@chakra-ui/react";
import { fetchCountryDetail } from "../services";
import ErrorCard from "./ErrorCard";
import CountryDetailCard from "./CountryDetailCard";

export default function CountryDetail() {
  let { countryName } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    setIsLoading(true);
    const response = await fetchCountryDetail(countryName);
    setIsLoading(false);
    const isError = response.data.location === "Global";
    if (isError) {
      setIsError(true);
      return;
    }
    setCountryDetails(response);
  };

  const currentCard = () =>
    isError ? <ErrorCard /> : <CountryDetailCard data={countryDetails} />;

  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      {isLoading && <Spinner color="red.500" size="xl" />}
      {!isLoading && currentCard()}
    </Flex>
  );
}
