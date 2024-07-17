import assert from 'assert';
import { MockSubRegionCountries } from '../mock/data.mock';
import { GetCountryBy } from '../services/get-country-by.service';

const { SubRegion } = GetCountryBy;

describe('get Country By SubRegion', () => {
  it('should return countries searched', () => {
    const result = SubRegion('Western Europe').map(country => country?.name?.common);

    assert.deepStrictEqual(result, MockSubRegionCountries)
  });

  it('should return empty array when no country is found', () => {
    const result = SubRegion('NoRegion');

    assert.deepStrictEqual(result, [])
  });
});
