import { TCountryFlags } from 'src/types/contry-flags.type';
import { TCountryInfo } from '../types/country.type';
import { TDdiInfo } from '../types/ddi.type';

export const MockAllCountryInfo: TCountryInfo[] = [
  {
    name: {
      common: 'Brazil',
      official: 'Federative Republic of Brazil',
      nativeName: {
        por: {
          official: 'República Federativa do Brasil',
          common: 'Brasil',
        },
      },
    },
    tld: ['.br'],
    cca2: 'BR',
    ccn3: '076',
    cca3: 'BRA',
    cioc: 'BRA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      BRL: {
        name: 'Brazilian real',
        symbol: 'R$',
      },
    },
    countryCallingCode: {
      root: '+5',
      suffixes: ['5'],
    },
    capital: ['Brasília'],
    altSpellings: [
      'BR',
      'Brasil',
      'Federative Republic of Brazil',
      'República Federativa do Brasil',
    ],
    region: 'Americas',
    subregion: 'South America',
    languages: {
      por: 'Portuguese',
    },
    latlng: [-10, -55],
    landlocked: false,
    borders: [
      'ARG',
      'BOL',
      'COL',
      'GUF',
      'GUY',
      'PRY',
      'PER',
      'SUR',
      'URY',
      'VEN',
    ],
    area: 8515767,
    demonyms: {
      eng: {
        f: 'Brazilian',
        m: 'Brazilian',
      },
      fra: {
        f: 'Brésilienne',
        m: 'Brésilien',
      },
    },
    flag: '🇧🇷',
    maps: {
      googleMaps: 'https://goo.gl/maps/waCKk21HeeqFzkNC9',
      openStreetMaps: 'https://www.openstreetmap.org/relation/59470',
    },
    population: 212559409,
    gini: {
      2019: 53.4,
    },
    fifa: 'BRA',
    car: {
      signs: ['BR'],
      side: 'right',
    },
    timezones: ['UTC-05:00', 'UTC-04:00', 'UTC-03:00', 'UTC-02:00'],
    continents: ['South America'],
    flags: {
      png: 'https://flagcdn.com/w320/br.png',
      svg: 'https://flagcdn.com/br.svg',
      alt: "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center.",
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/br.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/br.svg',
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [-15.79, -47.88],
    },
    postalCode: {
      format: '#####-###',
      regex: '^(\\d{8})$',
    },
  },
  {
    name: {
      common: 'United States',
      official: 'United States of America',
      nativeName: {
        eng: {
          official: 'United States of America',
          common: 'United States',
        },
      },
    },
    tld: ['.us'],
    cca2: 'US',
    ccn3: '840',
    cca3: 'USA',
    cioc: 'USA',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    countryCallingCode: {
      root: '+1',
      suffixes: [
        '201',
        '202',
        '203',
        '205',
        '206',
        '207',
        '208',
        '209',
        '210',
        '212',
        '213',
        '214',
        '215',
        '216',
        '217',
        '218',
        '219',
        '220',
        '224',
        '225',
        '227',
        '228',
        '229',
        '231',
        '234',
        '239',
        '240',
        '248',
        '251',
        '252',
        '253',
        '254',
        '256',
        '260',
        '262',
        '267',
        '269',
        '270',
        '272',
        '274',
        '276',
        '281',
        '283',
        '301',
        '302',
        '303',
        '304',
        '305',
        '307',
        '308',
        '309',
        '310',
        '312',
        '313',
        '314',
        '315',
        '316',
        '317',
        '318',
        '319',
        '320',
        '321',
        '323',
        '325',
        '327',
        '330',
        '331',
        '334',
        '336',
        '337',
        '339',
        '346',
        '347',
        '351',
        '352',
        '360',
        '361',
        '364',
        '380',
        '385',
        '386',
        '401',
        '402',
        '404',
        '405',
        '406',
        '407',
        '408',
        '409',
        '410',
        '412',
        '413',
        '414',
        '415',
        '417',
        '419',
        '423',
        '424',
        '425',
        '430',
        '432',
        '434',
        '435',
        '440',
        '442',
        '443',
        '447',
        '458',
        '463',
        '464',
        '469',
        '470',
        '475',
        '478',
        '479',
        '480',
        '484',
        '501',
        '502',
        '503',
        '504',
        '505',
        '507',
        '508',
        '509',
        '510',
        '512',
        '513',
        '515',
        '516',
        '517',
        '518',
        '520',
        '530',
        '531',
        '534',
        '539',
        '540',
        '541',
        '551',
        '559',
        '561',
        '562',
        '563',
        '564',
        '567',
        '570',
        '571',
        '573',
        '574',
        '575',
        '580',
        '585',
        '586',
        '601',
        '602',
        '603',
        '605',
        '606',
        '607',
        '608',
        '609',
        '610',
        '612',
        '614',
        '615',
        '616',
        '617',
        '618',
        '619',
        '620',
        '623',
        '626',
        '628',
        '629',
        '630',
        '631',
        '636',
        '641',
        '646',
        '650',
        '651',
        '657',
        '660',
        '661',
        '662',
        '667',
        '669',
        '678',
        '681',
        '682',
        '701',
        '702',
        '703',
        '704',
        '706',
        '707',
        '708',
        '712',
        '713',
        '714',
        '715',
        '716',
        '717',
        '718',
        '719',
        '720',
        '724',
        '725',
        '727',
        '730',
        '731',
        '732',
        '734',
        '737',
        '740',
        '743',
        '747',
        '754',
        '757',
        '760',
        '762',
        '763',
        '765',
        '769',
        '770',
        '772',
        '773',
        '774',
        '775',
        '779',
        '781',
        '785',
        '786',
        '801',
        '802',
        '803',
        '804',
        '805',
        '806',
        '808',
        '810',
        '812',
        '813',
        '814',
        '815',
        '816',
        '817',
        '818',
        '828',
        '830',
        '831',
        '832',
        '843',
        '845',
        '847',
        '848',
        '850',
        '854',
        '856',
        '857',
        '858',
        '859',
        '860',
        '862',
        '863',
        '864',
        '865',
        '870',
        '872',
        '878',
        '901',
        '903',
        '904',
        '906',
        '907',
        '908',
        '909',
        '910',
        '912',
        '913',
        '914',
        '915',
        '916',
        '917',
        '918',
        '919',
        '920',
        '925',
        '928',
        '929',
        '930',
        '931',
        '934',
        '936',
        '937',
        '938',
        '940',
        '941',
        '947',
        '949',
        '951',
        '952',
        '954',
        '956',
        '959',
        '970',
        '971',
        '972',
        '973',
        '975',
        '978',
        '979',
        '980',
        '984',
        '985',
        '989',
      ],
    },
    capital: ['Washington, D.C.'],
    altSpellings: ['US', 'USA', 'United States of America'],
    region: 'Americas',
    subregion: 'North America',
    languages: {
      eng: 'English',
    },
    latlng: [38, -97],
    landlocked: false,
    borders: ['CAN', 'MEX'],
    area: 9372610,
    demonyms: {
      eng: {
        f: 'American',
        m: 'American',
      },
      fra: {
        f: 'Américaine',
        m: 'Américain',
      },
    },
    flag: '🇺🇸',
    maps: {
      googleMaps: 'https://goo.gl/maps/e8M246zY4BSjkjAv6',
      openStreetMaps:
        'https://www.openstreetmap.org/relation/148838#map=2/20.6/-85.8',
    },
    population: 329484123,
    gini: {
      2018: 41.4,
    },
    fifa: 'USA',
    car: {
      signs: ['USA'],
      side: 'right',
    },
    timezones: [
      'UTC-12:00',
      'UTC-11:00',
      'UTC-10:00',
      'UTC-09:00',
      'UTC-08:00',
      'UTC-07:00',
      'UTC-06:00',
      'UTC-05:00',
      'UTC-04:00',
      'UTC+10:00',
      'UTC+12:00',
    ],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/us.png',
      svg: 'https://flagcdn.com/us.svg',
      alt: 'The flag of the United States of America is composed of thirteen equal horizontal bands of red alternating with white. A blue rectangle, bearing fifty small five-pointed white stars arranged in nine rows where rows of six stars alternate with rows of five stars, is superimposed in the canton.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/us.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/us.svg',
    },
    startOfWeek: 'sunday',
    capitalInfo: {
      latlng: [38.89, -77.05],
    },
    postalCode: {
      format: '#####-####',
      regex: '^\\d{5}(-\\d{4})?$',
    },
  },
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

export const MockRegionCountries = [

  'Iceland', 'Luxembourg', 'Estonia', 'Belarus', 'Greece', 'Åland Islands', 'San Marino', 'Italy',

  'Monaco', 'Slovakia', 'Faroe Islands', 'North Macedonia', 'Cyprus', 'Lithuania', 'Moldova', 'Switzerland',

  'Norway', 'Croatia', 'Finland', 'Russia', 'Andorra', 'Austria', 'Spain', 'Jersey', 'Sweden',

  'Isle of Man', 'Romania', 'Bosnia and Herzegovina', 'Malta', 'Netherlands', 'United Kingdom',

  'Ukraine', 'Portugal', 'Slovenia', 'Belgium', 'Poland', 'Czechia', 'Denmark', 'Montenegro', 'France',

  'Ireland', 'Hungary', 'Liechtenstein', 'Gibraltar', 'Guernsey', 'Germany', 'Vatican City', 'Albania',

  'Svalbard and Jan Mayen', 'Latvia', 'Serbia', 'Kosovo', 'Bulgaria'
]

export const MockSubRegionCountries = [

  'Luxembourg', 'Monaco', 'Switzerland', 'Netherlands', 'Belgium', 'France', 'Liechtenstein', 'Germany'

]

export const MockLanguageCountries = [

  'Uruguay', 'Chile', 'El Salvador', 'Western Sahara', 'Guatemala', 'Dominican Republic', 'Puerto Rico',

  'Ecuador', 'Spain', 'Belize', 'Equatorial Guinea', 'Mexico', 'Paraguay', 'Venezuela', 'Bolivia',

  'Colombia', 'Honduras', 'Costa Rica', 'Guam', 'Cuba', 'Panama', 'Argentina', 'Nicaragua', 'Peru'

]

export const MockBorderCountries = [ 'Belgium', 'France', 'Germany' ]

export const MockCurrencyCountries = [

  'Cambodia', 'United States Virgin Islands', 'El Salvador', 'Micronesia', 'Turks and Caicos Islands',

  'Puerto Rico', 'Marshall Islands', 'Ecuador', 'United States Minor Outlying Islands', 'Bahamas',

  'British Indian Ocean Territory', 'British Virgin Islands', 'Caribbean Netherlands', 'Guam',

  'Panama', 'Palau', 'United States', 'Timor-Leste', 'Northern Mariana Islands', 'American Samoa'

]

export const MockCallingCodeCountrie = {

  name: {

    common: 'Brazil',

    official: 'Federative Republic of Brazil',

    nativeName: { por: { official: 'República Federativa do Brasil', common: 'Brasil' } }

  },

  tld: [ '.br' ],

  cca2: 'BR',

  ccn3: '076',

  cca3: 'BRA',

  cioc: 'BRA',

  independent: true,

  status: 'officially-assigned',

  unMember: true,

  currencies: { BRL: { name: 'Brazilian real', symbol: 'R$' } },

  countryCallingCode: { root: '+5', suffixes: [ '5' ] },

  capital: [ 'Brasília' ],

  altSpellings: [ 'BR', 'Brasil', 'Federative Republic of Brazil', 'República Federativa do Brasil' ],

  region: 'Americas',

  subregion: 'South America',

  languages: { por: 'Portuguese' },

  latlng: [ -10, -55 ],

  landlocked: false,

  borders: [ 'ARG', 'BOL', 'COL', 'GUF', 'GUY', 'PRY', 'PER', 'SUR', 'URY', 'VEN' ],

  area: 8515767,

  demonyms: { eng: { f: 'Brazilian', m: 'Brazilian' }, fra: { f: 'Brésilienne', m: 'Brésilien' } },

  flag: 'https://flagcdn.com/w320/br.png',

  maps: {

    googleMaps: 'https://goo.gl/maps/waCKk21HeeqFzkNC9',

    openStreetMaps: 'https://www.openstreetmap.org/relation/59470'

  },

  population: 212559409,

  gini: { 2019: 53.4 },

  fifa: 'BRA',

  car: { signs: [ 'BR' ], side: 'right' },

  timezones: [ 'UTC-05:00', 'UTC-04:00', 'UTC-03:00', 'UTC-02:00' ],

  continents: [ 'South America' ],

  flags: {

    png: 'https://flagcdn.com/w320/br.png',

    svg: 'https://flagcdn.com/br.svg',

    alt:

      'The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto \'Ordem e Progresso\' across its center.'

  },

  coatOfArms: {

    png: 'https://mainfacts.com/media/images/coats_of_arms/br.png',

    svg: 'https://mainfacts.com/media/images/coats_of_arms/br.svg'

  },

  startOfWeek: 'monday',

  capitalInfo: { latlng: [ -15.79, -47.88 ] },

  postalCode: { format: '#####-###', regex: '^(\\d{8})$' }

}

export const MockTimezoneCountries = [

  'Wallis and Futuna', 'New Zealand', 'Marshall Islands', 'Tuvalu', 'United States Minor Outlying Islands',

  'Russia', 'Nauru', 'France', 'Antarctica', 'Kiribati', 'Fiji', 'United States'

]

export const MockGiniCountries = [ 'Mali', 'North Macedonia', 'Bosnia and Herzegovina' ]
