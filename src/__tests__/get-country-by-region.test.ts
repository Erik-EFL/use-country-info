import assert from 'assert';
import { useCountryInfo } from '../index';
import { MockRegionCountries } from '../mock/data.mock';

const { getCountryByRegion } = useCountryInfo();

describe('getCountryByRegion', () => {
  it('should return countries searched', () => {
    const result = getCountryByRegion('Europe').map(country => country?.name?.common);

    assert.deepStrictEqual(result, MockRegionCountries)
  });

  it('should return empty array when no country is found', () => {
    const result = getCountryByRegion('NoRegion');

    assert.deepStrictEqual(result, [])
  });
});
