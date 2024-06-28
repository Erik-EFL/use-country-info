import assert from 'assert';
import { useCountryInfo } from '../index';

const { getCountryByCapital } = useCountryInfo();

describe('getCountryByCapital', () => {
  it('should return countries searched', () => {
    const result = getCountryByCapital('Brasília').map(country => country?.name?.common);

    assert.deepStrictEqual(result, ['Brazil'])
  });

  it('should return empty array when no country is found', () => {
    const result = getCountryByCapital('NoCountry');

    assert.deepStrictEqual(result, [])
  });
});
