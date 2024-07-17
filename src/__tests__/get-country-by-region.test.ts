import assert from 'assert';
import { MockRegionCountries } from '../mock/data.mock';
import { GetCountryBy } from '../services/get-country-by.service';

const { Region } = GetCountryBy;

describe('get Country By Region', () => {
  it('should return countries searched', () => {
    const result = Region('Europe').map(country => country?.name?.common);

    assert.deepStrictEqual(result, MockRegionCountries)
  });

  it('should return empty array when no country is found', () => {
    const result = Region('NoRegion');

    assert.deepStrictEqual(result, [])
  });
});
