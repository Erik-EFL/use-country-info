import assert from 'assert';
import { useCountryInfo } from '../index';
import { MockSubRegionCountries } from '../mock/data.mock';

const { getCountryBySubRegion } = useCountryInfo();

describe('getCountryBySubRegion', () => {
  it('should return countries searched', () => {
    const result = getCountryBySubRegion('Western Europe').map(country => country?.name?.common);

    assert.deepStrictEqual(result, MockSubRegionCountries)
  });

  it('should return empty array when no country is found', () => {
    const result = getCountryBySubRegion('NoRegion');

    assert.deepStrictEqual(result, [])
  });
});
