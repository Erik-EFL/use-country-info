import { renderHook } from '@testing-library/react-hooks';
import { useCountryInfo } from '../index';
import { MockAllCountryInfo, MockCountryFlags, MockDdiInfo } from '../mock/data.mock';

describe('useCountryInfo Hook', () => {
  it('should return the correct allContryInfo initial state', () => {

    const { result } = renderHook(() => useCountryInfo());

    const { allCountryInfo } = result.current;

    expect(allCountryInfo).toEqual(expect.arrayContaining(MockAllCountryInfo));

  });

  it('should return the correct ddiInfo initial state', () => {

    const { result } = renderHook(() => useCountryInfo());

    const { ddiInfo } = result.current;

    expect(ddiInfo).toEqual(expect.arrayContaining(MockDdiInfo));

  });

  it('should return the correct contryflags initial state', () => {

    const { result } = renderHook(() => useCountryInfo());

    const { countryflags } = result.current;

    expect(countryflags).toEqual(expect.arrayContaining(MockCountryFlags.map(item => expect.objectContaining({
      flag: item.flag,
      flags: expect.objectContaining(item.flags),
      name: expect.objectContaining(item.name),
    }))));

  });
});
