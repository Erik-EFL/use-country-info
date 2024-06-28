import assert from 'assert';
import { useCountryInfo } from '../index';

const { getCountryByPopulation } = useCountryInfo();

describe('getCountryByPopulation', () => {
  it('should return countries searched', () => {
    const result = getCountryByPopulation(212559409).map(country => country?.name?.common);

    assert.deepStrictEqual(result, ['Brazil'])
  });
});
