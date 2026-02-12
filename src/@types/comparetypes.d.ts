export interface Country {
  name: CountryName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc?: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Record<string, Currency>;
  idd: CallingCode;
  countryCallingCode: CallingCode;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  languages: Record<string, string>;
  latlng: [number, number];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Record<string, GenderedDemonym>;
  translations: Record<string, Translation>;
  flag: string;
  maps: MapLinks;
  population: number;
  gini?: Record<string, number>;
  fifa?: string;
  car: CarInfo;
  timezones: string[];
  continents: string[];
  flags: FlagInfo;
  coatOfArms: ImageSet;
  startOfWeek: string;
  capitalInfo: { latlng?: [number, number] };
  postalCode: PostalCode;
}

export interface CountryName {
  common: string;
  official: string;
  nativeName: Record<string, Translation>;
}

export interface Currency {
  symbol: string;
  name: string;
}

export interface CallingCode {
  root: string;
  suffixes: string[];
}

export interface GenderedDemonym {
  f: string;
  m: string;
}

export interface Translation {
  official: string;
  common: string;
}

export interface MapLinks {
  googleMaps: string;
  openStreetMaps: string;
}

export interface CarInfo {
  signs: string[];
  side: "left" | "right";
}

export interface FlagInfo {
  png: string;
  svg: string;
  alt?: string;
}

export interface ImageSet {
  png: string;
  svg: string;
}

export interface PostalCode {
  format: string | null;
  regex: string | null;
}
