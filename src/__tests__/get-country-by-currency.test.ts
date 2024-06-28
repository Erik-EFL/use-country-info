import assert from 'assert';
import { useCountryInfo } from '../index';
import { MockCurrencyCountries } from '../mock/data.mock';

const { getCountryByCurrency } = useCountryInfo();

describe('getCountryByCurrency', () => {
  it('should return countries searched', () => {
    const result = getCountryByCurrency('USD').map(country => country?.name?.common);

    assert.deepStrictEqual(result, MockCurrencyCountries)
  });

  it('should return empty array when no country is found', () => {
    const result = getCountryByCurrency('NoCurrency');

    assert.deepStrictEqual(result, [])
  });
});
