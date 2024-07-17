import { apiData } from "../constant/data";
import { TCountryInfo } from "@/types/country.type";

export class GetCountryBy {
  static Border = (searchedBorder: string): TCountryInfo[] => {
   let countryFind: string;
   const cca3 = this.Cca3(searchedBorder)?.cca3 as string;
   const fifa = this.Fifa(searchedBorder)?.fifa as string;
   const country = this.Name(searchedBorder)?.cca3 as string;

   if (cca3) {
     countryFind = cca3;
   } else if (fifa) {
     countryFind = fifa;
   } else {
     countryFind = country;
   }

   const result = apiData.filter((country) => {
     return country.borders?.includes(countryFind);
   });

   return result;
  };

  static Name = (name: string): TCountryInfo | null => {
    let result: TCountryInfo | null = null;

    const matchCountryByName = (country: TCountryInfo, name: string): boolean => {
      return (
        country.name?.nativeName?.por?.common?.toLowerCase() === name.toLowerCase() ||
        country.name?.common?.toLowerCase() === name.toLowerCase() ||
        country.name?.official?.toLowerCase() === name.toLowerCase() ||
        country.name?.nativeName?.por?.official?.toLowerCase() === name.toLowerCase()
      );
    };

    result = apiData?.find((country) => matchCountryByName(country, name)) as TCountryInfo;

    return result || null;
  };

  static Flag = (name: string): TCountryInfo => {
    return apiData.find((country) => country.cca2 === name) as TCountryInfo;
  };

  static Region = (region: string): TCountryInfo[] => {
    return apiData.filter((country) => country.region === region);
  };

  static SubRegion = (subregion: string): TCountryInfo[] => {
    return apiData.filter((country) => country.subregion === subregion);
  };

  static Language = (language: string): TCountryInfo[] => {
    return apiData.filter((country) => {
      if (country.languages) {
        const languageKeys = Object.keys(country.languages);
        const languageValues = Object.values(country.languages);

        return (
          languageKeys.includes(language.toLowerCase()) ||
          languageValues.some(
            (val) => val.toLowerCase() === language.toLowerCase()
          )
        );
      }
      return false;
    });
  };

  static Currency = (currency: string) => {
    const foundCountries: TCountryInfo[] = [];

    apiData.forEach((country) => {
      if (country.currencies) {
        const currencyKeys = Object.keys(country.currencies);
        const currencyValues = Object.values(country.currencies);

        if (
          currencyKeys.includes(currency.toUpperCase()) ||
          currencyValues.some(
            (val) => val.name?.toLowerCase() === currency.toLowerCase()
          ) ||
          currencyValues.some(
            (val) => val.symbol?.toLowerCase() === currency.toLowerCase()
          )
        ) {
          foundCountries.push(country);
        }
      }
    });

    return foundCountries;
  };

  static CallingCode = (callingCode: string): TCountryInfo => {
    return apiData.find(
      (country) =>
        country.countryCallingCode?.root === callingCode ||
        country.countryCallingCode?.suffixes?.includes(callingCode)
    ) as TCountryInfo;
  };

  static Timezone = (timezone: string): TCountryInfo[] => {
    return apiData.filter((country) => {
      return country.timezones && country.timezones.includes(timezone);
    });
  };

  static Capital = (capital: string): TCountryInfo[] => {
    return apiData.filter((country) => {
      return country.capital?.includes(capital);
    });
  };

  static Population = (population: number): TCountryInfo[] => {
    return apiData.filter((country) => {
      return country.population === population;
    });
  };

  static Area = (area: number): TCountryInfo[] => {
    return apiData.filter((country) => {
      return country.area === area;
    });
  };

  static Demonym = (demonym: string): TCountryInfo[] => {
    return apiData.filter((country) => {
      return (
        country.demonyms?.eng?.f === demonym ||
        country.demonyms?.eng?.m === demonym ||
        country.demonyms?.fra?.f === demonym ||
        country.demonyms?.fra?.m === demonym
      );
    });
  };

  static LatitudAndLongitud = (
    latitude: number,
    longitude: number
  ): TCountryInfo[] => {
    return apiData.filter((country) => {
      return country.latlng?.[0] === latitude && country.latlng?.[1] === longitude;
    });
  };

  static Gini = (gini: number): TCountryInfo[] => {
    return apiData.filter((country) => {
      return Object.values(country.gini).includes(gini);
    });
  };

  static Fifa = (fifaName: string): TCountryInfo => {
    let countryFind: string;
    let fifa: TCountryInfo;

    const longName = this.Name(fifaName);
    const shortName = fifaName.toUpperCase();

    if (fifaName.length > 3) {
      countryFind = longName?.fifa as string;
    } else if (fifaName.length === 3) {
      countryFind = shortName as string;
    }

    fifa = apiData.find((country) => country.fifa === countryFind) as TCountryInfo;

    return fifa;
  };

  static Cca3 = (cca3: string): TCountryInfo => {
    return apiData.find((country) => country.cca3 === cca3) as TCountryInfo;
  };
}
