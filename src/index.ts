/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import apiData from './constant/data';
import { TCountryFlags } from './types/contry-flags.type';
import { TCountryInfo } from './types/contry.type';
import { TDdiInfo } from './types/ddi.type';

export const useCountryInfo = () => {
  const [allCountryInfo, setAllCountryInfo] = useState<TCountryInfo[]>(
    (): TCountryInfo[] => apiData
  );

  const [ddiInfo, setDDInfo] = useState<TDdiInfo[]>((): TDdiInfo[] =>
    apiData.map((data) => {
      const { countryCallingCode, flag, flags } = data;
      return { countryCallingCode, flag, flags };
    })
  );

  const [countryflags, setCountryflags] = useState<TCountryFlags[]>(
    (): TCountryFlags[] =>
  );

  return {
    allContryInfo,
    ddiInfo,
    contryflags,
  };
};
