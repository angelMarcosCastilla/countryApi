import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { countryActions } from "../context/actions/countryActions";
import getcountries from "../services/getCountries";
import { useCountries } from "./useCountries";

const useCountriesDetails = () => {
  const { countries, dispatch } = useCountries();
  const { name } = useParams();

  const [countryDetails, setcountryDetails] = useState({});

  useEffect(() => {
    let details, borderCountries, languages, currencies, nativeName;

    if (countries.length !== 0) {
      details = countries.find((el) => el.name.common === name);
      borderCountries = details.borders.map(
        (border) => countries.find((el) => el.cca3 === border).name.common
      );
      languages = Object.values(details.languages).map(el => el).join(" , ")
      currencies = Object.values(details.currencies)[0].name
      nativeName = Object.values(details.name.nativeName)[0].common

      setcountryDetails({
        borderCountries,
        languages,
        currencies,
        name: details.name.common,
        flag: details.flags[0],
        capital: details.capital,
        region: details.region,
        subregion: details.subregion,
        nativeName
      });
    } else {
      getcountries().then(countries => {
        dispatch({type:countryActions.LOAD_COUNTRIES, payload : countries })
        dispatch({type:countryActions.FILTER_COUNTRY, payload : countries })
      })
    }
  }, [countries, name, dispatch]);

  return countryDetails;
};

export default useCountriesDetails;
