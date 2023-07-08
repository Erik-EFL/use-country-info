import { useState } from "react";
import apiData from './constant/data';
import { TCallingInfo, TCountryInfo, TFlags } from './types/contry.type'

export const useCountryInfo = () => {
  let [allInfo, setAllInfo] = useState<TCountryInfo[] | null >((): TCountryInfo[] => {
    return apiData;
  });

  let [callingDDIInfo, setCallingDDIInfo] = useState<TCallingInfo[] | null >((): TCallingInfo[]  => {
    return apiData.map((data) => {
      const { countryCallingCode, flag, flags } = data;
      return { countryCallingCode, flag, flags };
    });
  });

  let [flags, setFlags] = useState<TFlags[] | null >((): TFlags[] => {
    return apiData.map((data) => {
      const { flag, flags } = data;
      return { flag, flags };
    });
  });

  return {
    allInfo,
    callingDDIInfo,
    flags
  };
};
