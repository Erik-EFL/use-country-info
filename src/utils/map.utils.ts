import { TCountryFlags } from 'src/types/contry-flags.type';
import { TDdiInfo } from 'src/types/ddi.type';

export const mapDdiInfo = (data: TDdiInfo): TDdiInfo => {
  const { countryCallingCode, flag, flags } = data;
  return { countryCallingCode, flag, flags };
};

export const mapCountryFlags = (data: TCountryFlags): TCountryFlags => {
  const { flag, flags, name } = data;
  return { flag, flags, name };
};
