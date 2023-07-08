import { renderHook } from '@testing-library/react-hooks';
import { useCountryInfoFetcher } from '../index';
import apiData from '../constant/data';

describe('useCountryInfoFetcher', () => {
  test('deve retornar os dados iniciais corretamente', () => {
    const { result } = renderHook(() => useCountryInfoFetcher());
    const { allInfo, callingContries } = result.current;

    expect(allInfo).toEqual(apiData);
    expect(callingContries).toEqual(
      apiData.map((data) => ({
        countryCallingCode: data.countryCallingCode,
        flag: data.flag,
        flags: data.flags,
      }))
    );
  });

  test('deve retornar corretament as informações de ligação', () => {
    const { result } = renderHook(() => useCountryInfoFetcher());
    const { callingContries } = result.current;

    expect(callingContries).toEqual(
      apiData.map((data) => ({
        countryCallingCode: data.countryCallingCode,
        flag: data.flag,
        flags: data.flags,
      }))
    )
  })

  test('deve retornar corretament as bandeira', () => {
    const { result } = renderHook(() => useCountryInfoFetcher());
    const { flags } = result.current;

    expect(flags).toEqual(
      apiData.map((data) => ({
        flag: data.flag,
        flags: data.flags,
      }))
    )
  })
});
