/* eslint-disable import/no-unresolved */
import { TCountryFlags } from 'src/types/contry-flags.type';
import { TCountryInfo } from '../types/contry.type';
import { TDdiInfo } from '../types/ddi.type';

export const MockAllCountryInfo: TCountryInfo[] = [
  {
    name: {
      common: 'Jordan',
      official: 'Hashemite Kingdom of Jordan',
      nativeName: {
        ara: {
          official: 'المملكة الأردنية الهاشمية',
          common: 'الأردن',
        },
      },
    },
    tld: ['.jo', 'الاردن.'],
    cca2: 'JO',
    ccn3: '400',
    cca3: 'JOR',
    cioc: 'JOR',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      JOD: {
        name: 'Jordanian dinar',
        symbol: 'د.ا',
      },
    },
    countryCallingCode: {
      root: '+9',
      suffixes: ['62'],
    },
    capital: ['Amman'],
    altSpellings: [
      'JO',
      'Hashemite Kingdom of Jordan',
      'al-Mamlakah al-Urdunīyah al-Hāshimīyah',
    ],
    region: 'Asia',
    subregion: 'Western Asia',
    languages: {
      ara: 'Arabic',
    },
    latlng: [31, 36],
    landlocked: false,
    borders: ['IRQ', 'ISR', 'PSE', 'SAU', 'SYR'],
    area: 89342,
    demonyms: {
      eng: {
        f: 'Jordanian',
        m: 'Jordanian',
      },
      fra: {
        f: 'Jordanienne',
        m: 'Jordanien',
      },
    },
    flag: '🇯🇴',
    maps: {
      googleMaps: 'https://goo.gl/maps/ko1dzSDKg8Gsi9A98',
      openStreetMaps: 'https://www.openstreetmap.org/relation/184818',
    },
    population: 10203140,
    gini: {
      2010: 33.7,
    },
    fifa: 'JOR',
    car: {
      signs: ['HKJ'],
      side: 'right',
    },
    timezones: ['UTC+03:00'],
    continents: ['Asia'],
    flags: {
      png: 'https://flagcdn.com/w320/jo.png',
      svg: 'https://flagcdn.com/jo.svg',
      alt: 'The flag of Jordan is composed of three equal horizontal bands of black, white and green, with a red isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about half the width of the field and bears a small seven-pointed white star at its center.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/jo.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/jo.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [31.95, 35.93],
    },
    postalCode: {
      format: '#####',
      regex: '^(\\d{5})$',
    },
  },
];

export const MockDdiInfo: TDdiInfo[] = [
  {
    countryCallingCode: {
      root: '+9',
      suffixes: ['62'],
    },
    flag: '🇯🇴',
    flags: {
      png: 'https://flagcdn.com/w320/jo.png',
      svg: 'https://flagcdn.com/jo.svg',
      alt: 'The flag of Jordan is composed of three equal horizontal bands of black, white and green, with a red isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about half the width of the field and bears a small seven-pointed white star at its center.',
    },
  },
];

export const MockCountryFlags: TCountryFlags[] = [
  {
    flag: '🇯🇴',
    flags: {
      png: 'https://flagcdn.com/w320/jo.png',
      svg: 'https://flagcdn.com/jo.svg',
      alt: 'The flag of Jordan is composed of three equal horizontal bands of black, white and green, with a red isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about half the width of the field and bears a small seven-pointed white star at its center.',
    },
    name: {
      common: 'Jordan',
      official: 'Hashemite Kingdom of Jordan',
    },
  },
];
