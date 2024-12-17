import assert from 'assert';
import { MockGiniCountries } from '../mock/data.mock';
import { GetCountryBy } from '../services/get-country-by.service';

const { Gini } = GetCountryBy;

describe('get Country By Gini', () => {
  it('should return countries searched', () => {
    const result = Gini(33).map(country => country?.name?.common);

    assert.deepStrictEqual(result, MockGiniCountries)
  });

  it('should return empty array when no country is found', () => {
    const result = Gini(0);

    assert.deepStrictEqual(result, [])
  });
});
