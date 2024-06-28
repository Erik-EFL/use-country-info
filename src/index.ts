import { apiData } from './constant/data';
import { TCountryFlags } from './types/contry-flags.type';
import { TCountryInfo } from './types/country.type';
import { TDdiInfo } from './types/ddi.type';
import { mapCountryFlags, mapDdiInfo } from './utils/map.utils';

export const useCountryInfo = () => {
  const allCountryInfo: TCountryInfo[] = apiData;

  const ddiInfo: TDdiInfo[] = apiData.map(mapDdiInfo);

  const countryflags: TCountryFlags[] = apiData.map(mapCountryFlags);

  /**
   * Gets countries by a shared border.
   * @param {string} searchedBorder - The border to search for.
   */
  const getCountryByBorder = (searchedBorder: string) => {
    return allCountryInfo.filter((country) => {
      country?.borders?.some((border) => border === searchedBorder);
    });
  };

  /**
   * Gets a country by name.
   * @param {string} name - The name of the country.
   */
  const getCountryByName = (name: string) => {
    return allCountryInfo.find((country) => {
      return (
        country.name?.common === name ||
        country.name?.official === name ||
        country.name?.nativeName?.[name] === name
      );
    });
  };

  /**
   * Gets a country by flag.
   * @param {string} name - The flag of the country.
   */
  const getCountryByFlag = (name: string) => {
    return allCountryInfo.find((country) => country.flag === name);
  };

  /**
   * Gets countries by region.
   * @param {string} region - The region to search for.
   */
  const getCountryByRegion = (region: string) => {
    return allCountryInfo.filter((country) => country.region === region);
  };

  /**
   * Gets countries by subregion.
   * @param {string} subregion - The subregion to search for.
   */
  const getCountryBySubregion = (subregion: string) => {
    return allCountryInfo.filter((country) => country.subregion === subregion);
  };

  /**
   * Gets countries by language.
   * @param {string} language - The language to search for.
   */
  const getCountryByLanguage = (language: string) => {
    const foundCountries: TCountryInfo[] = [];

    allCountryInfo.forEach((country) => {
      if (country.languages) {
        const languageKeys = Object.keys(country.languages);
        if (languageKeys.includes(language.toLowerCase())) {
          foundCountries.push(country);
        } else {
          const languageValues = Object.values(country.languages);
          if (languageValues.includes(language.toLowerCase())) {
            foundCountries.push(country);
          }
        }
      }
    });

    return foundCountries;
  };

  /**
   * Gets countries by currency.
   * @param {string} currency - The currency to search for.
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
   * Gets a country by calling code.
   * @param {string} callingCode - The calling code to search for.
   */
  const getCountryByCallingCode = (callingCode: string)=> {
    return ddiInfo.find(
      (country) => country.countryCallingCode?.root === callingCode ||
        country.countryCallingCode?.suffixes?.includes(callingCode)
    );
  };

  /**
   * Gets countries by timezone.
   * @param {string} timezone - The timezone to search for.
   */
  const getCountryByTimezone = (timezone: string) => {
    return allCountryInfo.filter((country) => {
      country.timezones?.includes(timezone);
    });
  };

  /**
   * Gets countries by capital.
   * @param {string} capital - The capital to search for.
   */
  const getCountryByCapital = (capital: string) => {
    return allCountryInfo.filter((country) => {
      country.capital?.includes(capital);
    });
  };

  /**
   * Gets countries by population.
   * @param {number} population - The population to search for.
   */
  const getCountryByPopulation = (population: number) => {
    return allCountryInfo.filter((country) => {
      country.population === population;
    });
  };

  /**
   * Gets countries by area.
   * @param {number} area - The area to search for.
   */
  const getCountryByArea = (area: number) => {
    return allCountryInfo.filter((country) => {
      country.area === area;
    });
  };

  /**
   * Gets countries by demonym.
   * @param {string} demonym - The demonym to search for.
   */
  const getCountryByDemonym = (demonym: string) => {
    return allCountryInfo.filter((country) => {
      country.demonyms?.eng?.f === demonym ||
        country.demonyms?.eng?.m === demonym ||
        country.demonyms?.fra?.f === demonym ||
        country.demonyms?.fra?.m === demonym;
    });
  };

  /**
   * Gets countries by latitude and longitude.
   * @param {number} latitude - The latitude to search for.
   * @param {number} longitude - The longitude to search for.
   */
  const getCountryByLatitudAndLongitud = (
    latitude: number,
    longitude: number
  ) => {
    return allCountryInfo.filter((country) => {
      return country.latlng?.[0] === latitude && country.latlng?.[1] === longitude;
    });
  };

  /**
   * Gets a country by Gini index.
   * @param {number} gini - The Gini index to search for.
   */
  const getCountryByGini = (gini: number) => {
    return allCountryInfo.find((country) => {
      return country.gini?.[0] === gini;
    });
  };

  /**
   * Gets countries by FIFA code.
   * @param {string} fifaName - The FIFA code to search for.
   */
  const getCountryByFifa = (fifaName: string) => {
    return allCountryInfo.filter((country) => {
      country.fifa?.includes(fifaName);
    });
  };

  return {
    allCountryInfo,
    ddiInfo,
    countryflags,
    getCountryByBorder,
    getCountryByName,
    getCountryByFlag,
    getCountryByRegion,
    getCountryBySubregion,
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

