# use-country-info

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## How to works

`useCountryInfo` is a function that allows you to obtain detailed information about countries in an easy, efficient and synchronous way. From there you can access comprehensive data, such as demographic, geographic and cultural information about any country, directly in your application.

## Installation

```shell
npm install use-country-info
```

## Usage
Here is a basic example of how to use the useCountryInfo function in a React component, but it can be used in any front end that needs it as it has no codependency:

```js
import React from 'react';
import { useCountryInfo } from 'use-country-info';

function PageExample() {
  const {
    allCountryInfo,
    ddiInfo,
    countryflags
  } = useCountryInfo();

  // Render the country data or use it as needed
  return (
    <div>
      {allCountryInfo.map((item): any => (
        <p key={item.name?.common}>{item.capital}</p>
      ))}
    </div>
  );
}

export default PageExample;
```

## Objects example

<details>
<br/>
<summary> AllCountryInfo </summary>
<br/>

```js
{
    "name": {
      "common": "Jordan",
      "official": "Hashemite Kingdom of Jordan",
      "nativeName": {
        "ara": {
          "official": "المملكة الأردنية الهاشمية",
          "common": "الأردن"
        }
      }
    },
    "tld": [
      ".jo",
      "الاردن."
    ],
    "cca2": "JO",
    "ccn3": "400",
    "cca3": "JOR",
    "cioc": "JOR",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
      "JOD": {
        "name": "Jordanian dinar",
        "symbol": "د.ا"
      }
    },
    "countryCallingCode": {
      "root": "+9",
      "suffixes": [
        "62"
      ]
    },
    "capital": [
      "Amman"
    ],
    "altSpellings": [
      "JO",
      "Hashemite Kingdom of Jordan",
      "al-Mamlakah al-Urdunīyah al-Hāshimīyah"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "languages": {
      "ara": "Arabic"
    },
    "latlng": [
      31,
      36
    ],
    "landlocked": false,
    "borders": [
      "IRQ",
      "ISR",
      "PSE",
      "SAU",
      "SYR"
    ],
    "area": 89342,
    "demonyms": {
      "eng": {
        "f": "Jordanian",
        "m": "Jordanian"
      },
      "fra": {
        "f": "Jordanienne",
        "m": "Jordanien"
      }
    },
    "flag": "🇯🇴",
    "maps": {
      "googleMaps": "https://goo.gl/maps/ko1dzSDKg8Gsi9A98",
      "openStreetMaps": "https://www.openstreetmap.org/relation/184818"
    },
    "population": 10203140,
    "gini": {
      "2010": 33.7
    },
    "fifa": "JOR",
    "car": {
      "signs": [
        "HKJ"
      ],
      "side": "right"
    },
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/jo.png",
      "svg": "https://flagcdn.com/jo.svg",
      "alt": "The flag of Jordan is composed of three equal horizontal bands of black, white and green, with a red isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about half the width of the field and bears a small seven-pointed white star at its center."
    },
    "coatOfArms": {
      "png": "https://mainfacts.com/media/images/coats_of_arms/jo.png",
      "svg": "https://mainfacts.com/media/images/coats_of_arms/jo.svg"
    },
    "startOfWeek": "sunday",
    "capitalInfo": {
      "latlng": [
        31.95,
        35.93
      ]
    },
    "postalCode": {
      "format": "#####",
      "regex": "^(\\d{5})$"
    }
  },
```
</details>

<details>
<br/>
<summary> ddiInfo </summary>
<br/>

```js
  {
    "countryCallingCode": {
      "root": "+9",
      "suffixes": [
        "62"
      ]
    },
    "flag": "🇲🇵",
    "flags": {
      "png": "https://flagcdn.com/w320/jo.png",
      "svg": "https://flagcdn.com/jo.svg",
      "alt": "The flag of Jordan is composed of three equal horizontal bands of black, white and green, with a red isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about half the width of the field and bears a small seven-pointed white star at its center."
    },
  }
```
</details>


<details>
<br/>
<summary> countryflags </summary>
<br/>

```js
  {
    "name": {
      "common": "Jordan",
      "official": "Hashemite Kingdom of Jordan",
    },
    "flag": "🇲🇵",
    "flags": {
      "png": "https://flagcdn.com/w320/jo.png",
      "svg": "https://flagcdn.com/jo.svg",
      "alt": "The flag of Jordan is composed of three equal horizontal bands of black, white and green, with a red isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about half the width of the field and bears a small seven-pointed white star at its center."
    },
  }
```
</details>

## Additional functions to search for different information from each country:

```js
  getCountryByBorder(searchedBorder), // string,
  getCountryByName(name), // string,
  getCountryByFlag(name), // string,
  getCountryByRegion(region), // string,
  getCountryBySubregion(subregion), // string,
  getCountryByLanguage(language), // string,
  getCountryByCurrency(currency), // string,
  getCountryByCallingCode(callingCode), // string,
  getCountryByTimezone(timezone), // string,
  getCountryByCapital(capital), // string,
  getCountryByPopulation(population), // number,
  getCountryByArea(area), // number,
  getCountryByDemonym(demonym), // string,
  getCountryByLatitudAndLongitud(latitude, longitude), // number,
  getCountryByGini(gini), // number,
  getCountryByFifa(fifaName), //string,
```

##

In the above example, we import the useCountryInfoFetcher hook and use it in the CountryInfo component. The hook returns two variables: allInfo and callingCountries, which contain the information for all countries and the specific information for the calling codes of each country, respectively.

You can use these variables to render the country information in your component or use it as needed.

## Contribution
This is an open-source project, and we welcome contributions from the community. If you encounter issues, bugs, or have ideas for improvements, feel free to open an issue or submit a pull request in the official repository on GitHub.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

</br>
</br>
