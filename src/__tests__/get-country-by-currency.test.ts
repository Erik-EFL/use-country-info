import assert from 'assert';
import { MockCurrencyCountries } from '../mock/data.mock';
import { GetCountryBy } from '../services/get-country-by.service';

const { Currency } = GetCountryBy;

describe('get Country By Currency', () => {
  it('should return countries searched', () => {
    const result = Currency('USD').map(country => country?.name?.common);

    assert.deepStrictEqual(result, MockCurrencyCountries)
  });

  it('should return empty array when no country is found', () => {
    const result = Currency('NoCurrency');

    assert.deepStrictEqual(result, [])
  });
});
