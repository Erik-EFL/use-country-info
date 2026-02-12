export interface CountryInfo {
  name: string;
  capital: string;
  population: number;
  area: number;
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  currencies: { [key: string]: { name: string; symbol: string } };
  flags: { png: string; svg: string };
}

export interface FetchCountryResponse {
  data: CountryInfo[];
  error?: string;
}

export type FetchCountryFunction = (
  countryName: string,
) => Promise<FetchCountryResponse>;
