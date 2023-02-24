import dotenv from "dotenv";

dotenv.config();

export const getAllCountryAndCity = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    },
  };

  const response = await fetch(
    "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
    options
  );

  const jsonResponse = await response.json();

  const result = jsonResponse.data.covid19Stats;
  return result;
};

export const fetchCountryDetail = async (countryName) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    },
  };

  const response = await fetch(
    `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${countryName}`,
    options
  );

  return response.json();
};

export const getCountryStatus = (countries) => {
  const result = countries.reduce((countries, current) => {
    if (countries[current.country]) {
      countries[current.country].confirmed += current.confirmed;
      countries[current.country].deaths += current.deaths;
    } else {
      countries[current.country] = {};
      countries[current.country].confirmed = current.confirmed;
      countries[current.country].deaths = current.deaths;
    }
    return countries;
  }, {});
  return result;
};
