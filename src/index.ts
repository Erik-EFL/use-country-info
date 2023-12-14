import { useMemo } from 'react';
import { apiData } from './constant/data';
import { TCountryFlags } from './types/contry-flags.type';
import { TCountryInfo } from './types/contry.type';
import { TDdiInfo } from './types/ddi.type';
import { mapCountryFlags, mapDdiInfo } from './utils/map.utils';

export const useCountryInfo = () => {
  const allCountryInfo = useMemo<TCountryInfo[]>(() => apiData, []);

  const ddiInfo = useMemo<TDdiInfo[]>(
    () => apiData.map(mapDdiInfo),
    [mapDdiInfo]
  );

  const countryflags = useMemo<TCountryFlags[]>(
    () => apiData.map(mapCountryFlags),
    [mapCountryFlags]
  );

  return {
    allCountryInfo,
    ddiInfo,
    countryflags,
  };
};
