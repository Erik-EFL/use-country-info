import { apiData } from './constant/data';
import { TCountryFlags } from './types/contry-flags.type';
import { TCountryInfo } from './types/country.type';
import { TDdiInfo } from './types/ddi.type';
import { mapCountryFlags, mapDdiInfo } from './utils/map.utils';

/**
 * Hook for accessing country information.
 * Returns various functions to retrieve country data based on different criteria.
 */
export const useCountryInfo = () => {
  /**
   * Array of all country information.
   * @type {TCountryInfo[]}
   */
  const allCountryInfo: TCountryInfo[] = apiData;

  /**
   * Array of country DDI information.
   * @type {TDdiInfo[]}
   */
  const ddiInfo: TDdiInfo[] = apiData.map(mapDdiInfo);

  /**
   * Array of country flags.
   * @type {TCountryFlags[]}
   */
  const countryflags: TCountryFlags[] = apiData.map(mapCountryFlags);

  /**
   * Gets countries that share a border with the specified country.
   * @param {string} searchedBorder - Name, cca3, or FIFA code of the country to search for.
   * @returns {TCountryInfo[]} - Array of countries that share a border with the searched country.
   */
  const getCountryByBorder = (searchedBorder: string): TCountryInfo[] => {
    let countryFind: string;

    if (searchedBorder.length === 3) {
      const cca3 = getCountryByCca3(searchedBorder);
      const fifa = getCountryByFifa(searchedBorder);
      countryFind = searchedBorder === cca3?.cca3 ? cca3?.cca3 as string : fifa.fifa as string;
    } else {
      const country = getCountryByName(searchedBorder);

      if (!country) {
        return [];
      }

      countryFind = country.cca3 as string || '';
    }

    return allCountryInfo
      .filter((country) => {
        return country.borders?.includes(countryFind);
      })
      .map((country) => country);
  };

  /**
   * Gets a country by its name.
   * @param {string} name - The name of the country (common, official, or native).
   * @returns {TCountryInfo} - The country that matches the name.
   */
  const getCountryByName = (name: string): TCountryInfo => {
    return allCountryInfo.find((country) => {
      return (
        country.name?.common === name ||
        country.name?.official === name ||
        country.name?.nativeName?.[name] === name
      );
    }) as TCountryInfo;
  };

  /**
   * Gets a country by its cca3 code.
   * @param {string} cca3 - The cca3 code of the country.
   * @returns {TCountryInfo} - The country that matches the cca3 code.
   */
  const getCountryByCca3 = (cca3: string): TCountryInfo => {
    return allCountryInfo.find((country) => country.cca3 === cca3) as TCountryInfo;
  };

  /**
   * Gets a country by its flag (cca2 code).
   * @param {string} name - The cca2 code of the flag.
   * @returns {TCountryInfo} - The country that matches the flag.
   */
  const getCountryByFlag = (name: string): TCountryInfo => {
    return allCountryInfo.find((country) => country.cca2 === name) as TCountryInfo;
  };

  /**
   * Gets countries by region.
   * @param {string} region - The region to search for (e.g., Americas).
   * @returns {TCountryInfo[]} - Array of countries that match the region.
   */
  const getCountryByRegion = (region: string): TCountryInfo[] => {
    return allCountryInfo.filter((country) => country.region === region);
  };

  /**
   * Gets countries by subregion.
   * @param {string} subregion - The subregion to search for (e.g., South America).
   * @returns {TCountryInfo[]} - Array of countries that match the subregion.
   */
  const getCountryBySubRegion = (subregion: string): TCountryInfo[] => {
    return allCountryInfo.filter((country) => country.subregion === subregion);
  };

  /**
   * Gets countries by language.
   * @param {string} language - The language to search for (e.g., English).
   * @returns {TCountryInfo[]} - Array of countries that match the language.
   */
  const getCountryByLanguage = (language: string): TCountryInfo[] => {
    const foundCountries: TCountryInfo[] = [];

    allCountryInfo.forEach((country) => {
      if (country.languages) {
        const languageKeys = Object.keys(country.languages);
        const languageValues = Object.values(country.languages);

        if (
          languageKeys.includes(language.toLowerCase()) ||
          languageValues.some(
            (val) => val.toLowerCase() === language.toLowerCase()
          )
        ) {
          foundCountries.push(country);
        }
      }
    });

    return foundCountries;
  };

  /**
   * Gets countries by currency.
   * @param {string} currency - The currency to search for (e.g., USD).
   * @returns {TCountryInfo[]} - Array of countries that match the currency.
   */
  const getCountryByCurrency = (currency: string) => {
    const foundCountries: TCountryInfo[] = [];

    allCountryInfo.forEach((country) => {
      if (country.currencies) {
        const currencyKeys = Object.keys(country.currencies);
        const currencyValues = Object.values(country.currencies);

        if (
          currencyKeys.includes(currency.toUpperCase()) ||
          currencyValues.some(
            (val) => val.name?.toLowerCase() === currency.toLowerCase()
          ) ||
          currencyValues.some(
            (val) => val.symbol?.toLowerCase() === currency.toLowerCase()
          )
        ) {
          foundCountries.push(country);
        }
      }
    });

    return foundCountries;
  };

  /**
   * Gets a country by its calling code.
   * @param {string} callingCode - The calling code to search for (e.g., +55).
   * @returns {TCountryInfo} - The country that matches the calling code.
   */
  const getCountryByCallingCode = (callingCode: string): TCountryInfo => {
    return allCountryInfo.find(
      (country) =>
        country.countryCallingCode?.root === callingCode ||
        country.countryCallingCode?.suffixes?.includes(callingCode)
    ) as TCountryInfo;
  };

  /**
   * Gets countries by timezone.
   * @param {string} timezone - The timezone to search for (e.g., UTC+00:00).
   * @returns {TCountryInfo[]} - Array of countries that match the timezone.
   */
  const getCountryByTimezone = (timezone: string): TCountryInfo[] => {
    return allCountryInfo.filter((country) => {
      return country.timezones && country.timezones.includes(timezone);
    });
  };

  /**
   * Gets countries by capital city.
   * @param {string} capital - The capital city to search for (e.g., Brasília).
   * @returns {TCountryInfo[]} - Array of countries that match the capital city.
   */
  const getCountryByCapital = (capital: string): TCountryInfo[] => {
    return allCountryInfo.filter((country) => {
      return country.capital?.includes(capital);
    });
  };

  /**
   * Gets countries by population.
   * @param {number} population - The population to search for (e.g., 123456789).
   * @returns {TCountryInfo[]} - Array of countries that match the population.
   */
  const getCountryByPopulation = (population: number): TCountryInfo[] => {
    // deve retornar um array com os pais que tem uma população aproximada do valor informado
    return allCountryInfo.filter((country) => {
      return country.population === population;
    });
  };

  /**
   * Gets countries by area.
   * @param {number} area - The area to search for (e.g., 123456789).
   * @returns {TCountryInfo[]} - Array of countries that match the area.
   */
  const getCountryByArea = (area: number): TCountryInfo[] => {
    return allCountryInfo.filter((country) => {
      return country.area === area;
    });
  };

  /**
   * Gets countries by demonym.
   * @param {string} demonym - The demonym to search for (e.g., Brazilian).
   * @returns {TCountryInfo[]} - Array of countries that match the demonym.
   */
  const getCountryByDemonym = (demonym: string): TCountryInfo[] => {
    return allCountryInfo.filter((country) => {
      return (
        country.demonyms?.eng?.f === demonym ||
        country.demonyms?.eng?.m === demonym ||
        country.demonyms?.fra?.f === demonym ||
        country.demonyms?.fra?.m === demonym
      );
    });
  };

  /**
   * Gets countries by latitude and longitude.
   * @param {number} latitude - The latitude to search for.
   * @param {number} longitude - The longitude to search for.
   * @returns {TCountryInfo[]} - Array of countries that match the latitude and longitude.
   */
  const getCountryByLatitudAndLongitud = (
    latitude: number,
    longitude: number
  ): TCountryInfo[] => {
    return allCountryInfo.filter((country) => {
      return country.latlng?.[0] === latitude && country.latlng?.[1] === longitude;
    });
  };

  /**
   * Gets a country by its Gini index.
   * @param {number} gini - The Gini index to search for (e.g., 33.3).
   * @returns {TCountryInfo[]} - Array of countries that match the Gini index.
   */
  const getCountryByGini = (gini: number): TCountryInfo[] => {
    return allCountryInfo.filter((country) => {
      return Object.values(country.gini).includes(gini);
    });
  };

  /**
   * Gets countries by FIFA code.
   * @param {string} fifaName - The FIFA code to search for (e.g., BRA).
   * @returns {TCountryInfo} - The country that matches the FIFA code.
   */
  const getCountryByFifa = (fifaName: string): TCountryInfo => {
    let countryFind: string;
    let fifa: TCountryInfo;

    if (fifaName.length > 3) {
      const country = getCountryByName(fifaName);
      countryFind = country?.fifa as string;
    } else {
      countryFind = fifaName;
    }

    fifa = allCountryInfo.find((country) => country.fifa === countryFind) as TCountryInfo;

    return fifa;
  };

  return {
    allCountryInfo,
    ddiInfo,
    countryflags,
    getCountryByBorder,
    getCountryByName,
    getCountryByCca3,
    getCountryByFlag,
    getCountryByRegion,
    getCountryBySubRegion,
    getCountryByLanguage,
    getCountryByCurrency,
    getCountryByCallingCode,
    getCountryByTimezone,
    getCountryByCapital,
    getCountryByPopulation,
    getCountryByArea,
    getCountryByDemonym,
    getCountryByLatitudAndLongitud,
    getCountryByGini,
    getCountryByFifa,
  };
};
