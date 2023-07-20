export type TCountryFlags = {
  name?: {
    common?: string;
    official?: string;
  }
  flag?: string;
  flags?: {
    png?: string;
    svg?: string;
    alt?: string;
  };
};
