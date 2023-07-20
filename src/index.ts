/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import apiData from './constant/data';
import { TCallingInfo, TCountryInfo, TFlags } from './types/contry.type';

export const useCountryInfo = () => {
  const [allContryInfo, setAllContryInfo] = useState<TCountryInfo[]>(
    (): TCountryInfo[] => apiData
  );

  const [ddiInfo, setDDInfo] = useState<TCallingInfo[]>((): TCallingInfo[] =>
    apiData.map(data => {
      const { countryCallingCode, flag, flags } = data;
      return { countryCallingCode, flag, flags };
    })
  );

  const [contryflags, setContryflags] = useState<TFlags[]>((): TFlags[] =>
    apiData.map(data => {
      const { flag, flags } = data;
      return { flag, flags };
    })
  );

  return {
    allContryInfo,
    ddiInfo,
    contryflags,
  };
};