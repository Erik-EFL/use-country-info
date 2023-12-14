import React from 'react';
import { useCountryInfo } from '../index';

jest.mock('react', () => {
  const originalReact = jest.requireActual('react');
  return {
    ...originalReact,
    useMemo: jest.fn(),
  };
});

describe('useCountryInfo', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar um array com um elemento', () => {
    const mockApiData = [
      {
        name: 'Brazil',
        countryCallingCode: '+55',
        flag: '🇧🇷',
        flags: ['🇧🇷', '🇧🇷🇧🇷'],
      },
    ];
    jest.spyOn(React, 'useMemo').mockImplementation(() => mockApiData);
    const { allCountryInfo } = useCountryInfo();

    expect(allCountryInfo).toHaveLength(1);
    expect(allCountryInfo[0].name).toBe('Brazil');
  });

  it('deve retornar um array vazio se apiData for vazio', () => {
    jest.spyOn(React, 'useMemo').mockImplementation(() => []);
    const { allCountryInfo } = useCountryInfo();

    expect(allCountryInfo).toHaveLength(0);
  });

  it('deve retornar um array com o comprimento esperado', () => {
    const mockApiData = [
      { name: 'Brazil' },
      { name: 'United States' },
      { name: 'France' },
    ];
    jest.spyOn(React, 'useMemo').mockImplementation(() => mockApiData);
    const { allCountryInfo } = useCountryInfo();

    expect(allCountryInfo).toHaveLength(mockApiData.length);
  });

  it('deve conter objetos com a estrutura correta', () => {
    const mockApiData = [{ name: 'Brazil' }];
    jest.spyOn(React, 'useMemo').mockImplementation(() => mockApiData);
    const { allCountryInfo } = useCountryInfo();

    expect(allCountryInfo[0]).toHaveProperty('name');
  });

  it('deve retornar um array vazio se apiData for vazio', () => {
    jest.spyOn(React, 'useMemo').mockImplementation(() => []);
    const { ddiInfo } = useCountryInfo();

    expect(ddiInfo).toHaveLength(0);
  });

  it('deve retornar um array com o comprimento esperado', () => {
    const mockApiData = [
      { countryCallingCode: '+55' },
      { countryCallingCode: '+1' },
      { countryCallingCode: '+33' },
    ];
    jest.spyOn(React, 'useMemo').mockImplementation(() => mockApiData);
    const { ddiInfo } = useCountryInfo();

    expect(ddiInfo).toHaveLength(mockApiData.length);
  });

  it('deve conter objetos com a estrutura correta', () => {
    const mockApiData = [{ countryCallingCode: '+55' }];
    jest.spyOn(React, 'useMemo').mockImplementation(() => mockApiData);
    const { ddiInfo } = useCountryInfo();

    expect(ddiInfo[0]).toHaveProperty('countryCallingCode');
  });

  it('deve retornar um array vazio se apiData for vazio', () => {
    jest.spyOn(React, 'useMemo').mockImplementation(() => []);
    const { countryflags } = useCountryInfo();

    expect(countryflags).toHaveLength(0);
  });

  it('deve retornar um array com o comprimento esperado', () => {
    const mockApiData = [
      { flag: '🇧🇷', flags: ['🇧🇷', '🇧🇷🇧🇷'] },
      { flag: '🇺🇸', flags: ['🇺🇸', '🇺🇸🇺🇸'] },
      { flag: '🇫🇷', flags: ['🇫🇷', '🇫🇷🇫🇷'] },
    ];
    jest.spyOn(React, 'useMemo').mockImplementation(() => mockApiData);
    const { countryflags } = useCountryInfo();

    expect(countryflags).toHaveLength(mockApiData.length);
  });

  it('deve conter objetos com a estrutura correta', () => {
    const mockApiData = [{ flag: '🇧🇷', flags: ['🇧🇷', '🇧🇷🇧🇷'] }];
    jest.spyOn(React, 'useMemo').mockImplementation(() => mockApiData);
    const { countryflags } = useCountryInfo();

    expect(countryflags[0]).toHaveProperty('flag');
    expect(countryflags[0]).toHaveProperty('flags');
  });

  it('deve retornar um array com o comprimento esperado', () => {
    const { ddiInfo } = useCountryInfo();

    expect(ddiInfo).toHaveLength(1);
  });

  it('deve conter objetos com a estrutura correta', () => {
    const { countryflags } = useCountryInfo();

    expect(countryflags[0]).toHaveProperty('flag');
    expect(countryflags[0]).toHaveProperty('flags');
  });

  it('deve chamar useMemo corretamente para mapDdiInfo', () => {
    jest.spyOn(React, 'useMemo').mockImplementation((fn) => {
      if (fn instanceof Function) {
        return fn();
      } else {
        return fn;
      }
    });

    useCountryInfo();

    expect(React.useMemo).toHaveBeenCalledWith(expect.any(Function), [
      expect.any(Function),
    ]);
  });

  it('deve chamar useMemo corretamente para mapCountryFlags', () => {
    jest.spyOn(React, 'useMemo').mockImplementation((fn) => {
      if (fn instanceof Function) {
        return fn();
      } else {
        return fn;
      }
    });

    useCountryInfo();

    expect(React.useMemo).toHaveBeenCalledWith(expect.any(Function), [
      expect.any(Function),
    ]);
  });
});
