// src/setupTests.js
import '@testing-library/jest-dom';
import { TCountryFlags } from '../types/contry-flags.type';
import { TDdiInfo } from '../types/ddi.type';
import { mapCountryFlags, mapDdiInfo } from '../utils/map.utils';

describe('mapDdiInfo', () => {
  it('deve mapear corretamente a TDdiInfo', () => {
    const input: TDdiInfo = {
      countryCallingCode: {
        root: '+9',
        suffixes: ['62'],
      },
      flag: '🇯🇴',
      flags: {
        png: 'https://flagcdn.com/w320/jo.png',
        svg: 'https://flagcdn.com/jo.svg',
        alt: 'The flag of Jordan...',
      },
    };

    const result = mapDdiInfo(input);

    expect(result).toEqual({
      countryCallingCode: {
        root: '+9',
        suffixes: ['62'],
      },
      flag: '🇯🇴',
      flags: {
        png: 'https://flagcdn.com/w320/jo.png',
        svg: 'https://flagcdn.com/jo.svg',
        alt: 'The flag of Jordan...',
      },
    });
  });
});

describe('mapCountryFlags', () => {
  it('deve mapear corretamente a TCountryFlags', () => {
    const input: TCountryFlags = {
      flag: '🇯🇴',
      flags: {
        png: 'https://flagcdn.com/w320/jo.png',
        svg: 'https://flagcdn.com/jo.svg',
        alt: 'The flag of Jordan...',
      },
      name: {
        common: 'Jordan',
        official: 'Hashemite Kingdom of Jordan',
      },
    };

    const result = mapCountryFlags(input);

    expect(result).toEqual({
      flag: '🇯🇴',
      flags: {
        png: 'https://flagcdn.com/w320/jo.png',
        svg: 'https://flagcdn.com/jo.svg',
        alt: 'The flag of Jordan...',
      },
      name: {
        common: 'Jordan',
        official: 'Hashemite Kingdom of Jordan',
      },
    });
  });
});
