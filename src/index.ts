import { apiData } from './constant/data';
import { GetCountryBy } from './services/get-country-by.service';
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

  return {
    allCountryInfo,
    ddiInfo,
    countryflags,
    Border: GetCountryBy.Border,
    Name: GetCountryBy.Name,
    Flag: GetCountryBy.Flag,
    Region: GetCountryBy.Region,
    SubRegion: GetCountryBy.SubRegion,
    Language: GetCountryBy.Language,
    Currency: GetCountryBy.Currency,
    CallingCode: GetCountryBy.CallingCode,
    Timezone: GetCountryBy.Timezone,
    Capital: GetCountryBy.Capital,
    Population: GetCountryBy.Population,
    Area: GetCountryBy.Area,
    Demonym: GetCountryBy.Demonym,
    LatitudAndLongitud: GetCountryBy.LatitudAndLongitud,
    Gini: GetCountryBy.Gini,
    Fifa: GetCountryBy.Fifa,
    Cca3: GetCountryBy.Cca3,
  };
};
