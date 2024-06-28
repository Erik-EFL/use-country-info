import assert from 'assert';
import { useCountryInfo } from '../index';
import { MockBorderCountries } from '../mock/data.mock';

const { getCountryByBorder } = useCountryInfo();

describe('getCountryByBorder', () => {
  it('should return countries searched', () => {
     const resultByName = getCountryByBorder('Luxembourg').map(country => country?.name?.common);
    const resultByCode = getCountryByBorder('LUX').map(country => country?.name?.common);

    assert.deepStrictEqual(resultByName, MockBorderCountries)
    assert.deepStrictEqual(resultByCode, MockBorderCountries)
  });

  it('should return empty array when no country is found', () => {
    const result = getCountryByBorder('NoCountry');

    assert.deepStrictEqual(result, [])
  });
});
