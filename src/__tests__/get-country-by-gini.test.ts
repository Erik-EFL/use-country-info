import assert from 'assert';
import { useCountryInfo } from '../index';
import { MockGiniCountries } from '../mock/data.mock';

const { getCountryByGini } = useCountryInfo();

describe('getCountryByGini', () => {
  it('should return countries searched', () => {
    const result = getCountryByGini(33).map(country => country?.name?.common);

    assert.deepStrictEqual(result, MockGiniCountries)
  });

  it('should return empty array when no country is found', () => {
    const result = getCountryByGini(0);

    assert.deepStrictEqual(result, [])
  });
});
