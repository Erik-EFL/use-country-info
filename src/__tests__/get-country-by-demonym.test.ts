import assert from 'assert';
import { useCountryInfo } from '../index';

const { getCountryByDemonym } = useCountryInfo();

describe('getCountryByDemonym', () => {
  it('should return countries searched', () => {
    const result = getCountryByDemonym('Brazilian').map(country => country?.name?.common);

    assert.deepStrictEqual(result, ['Brazil'])
  });

  it('should return empty array when no country is found', () => {
    const result = getCountryByDemonym('NoCountry');

    assert.deepStrictEqual(result, [])
  });
});
