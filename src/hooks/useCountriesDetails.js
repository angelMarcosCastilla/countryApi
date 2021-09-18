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
    let details, borderCountries, languages, currencies, topLevelDomain;

    if (countries.length !== 0) {
      details = countries.find((el) => el.name === name);
      borderCountries = details.borders.map(
        (border) => countries.find((el) => el.alpha3Code === border).name
      );
      languages = details.languages.map((el) => el.name).join(" , ");
      currencies = details.currencies.map((el) => el.name).join(" , ");
      topLevelDomain = details.topLevelDomain[0];

      setcountryDetails({
        borderCountries,
        languages,
        currencies,
        topLevelDomain,
        name: details.name,
        flag: details.flag,
        capital: details.capital,
        region: details.region,
        subregion: details.subregion,
        nativeName: details.nativeName,
        population : details.population
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
