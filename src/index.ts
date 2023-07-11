import { useState } from "react";
import apiData from './constant/data';
import { TCallingInfo, TCountryInfo, TFlags } from './types/contry.type'

export const useCountryInfo = () => {
  let [allInfo, setAllInfo] = useState<TCountryInfo[] | null >((): TCountryInfo[] => {
    return apiData;
  });

  let [ddiInfo, setDDInfo] = useState<TCallingInfo[] | null >((): TCallingInfo[]  => {
    return apiData.map((data) => {
      const { countryCallingCode, flag, flags } = data;
      return { countryCallingCode, flag, flags };
    });
  });

  let [contryflags, setContryflags] = useState<TFlags[] | null >((): TFlags[] => {
    return apiData.map((data) => {
      const { flag, flags } = data;
      return { flag, flags };
    });
  });

  return {
    allInfo,
    ddiInfo,
    contryflags
  };
};
