import { useState } from "react";
import apiData from './constant/data';

export const useCountryInfo = () => {
  let [allInfo, setAllInfo] = useState(() => {
    return apiData
  })

  let [callingContries, setCallingContries] = useState(() => {
    return apiData.map((data) => {
      const { countryCallingCode, flag, flags } = data;
      return { countryCallingCode, flag, flags };
    });
  })

  let [flags, setFlags] = useState(() => {
    return apiData.map((data) => {
      const { flag, flags } = data;
      return { flag, flags };
    });
  })

  return {
    allInfo,
    callingContries,
    flags
  }
}
