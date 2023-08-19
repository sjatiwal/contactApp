import { useQuery } from "react-query";
import axios from "axios";

export function useWorldwideData() {
  return useQuery("worldwideData", async () => {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return response.data;
  });
}

export function useCountryData() {
  return useQuery("countryData", async () => {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/countries"
    );
    return response.data;
  });
}
