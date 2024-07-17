import assert from 'assert';
import { MockTimezoneCountries } from '../mock/data.mock';
import { GetCountryBy } from '../services/get-country-by.service';

const { Timezone } = GetCountryBy;

describe('get Country By Timezone', () => {
  it('should return countries searched', () => {
    const result = Timezone('UTC+12:00').map(callbackfn => callbackfn?.name?.common);

    assert.deepStrictEqual(result, MockTimezoneCountries);
  });

  it('should return empty array when no country is found', () => {
    const result = Timezone('NoTimezone');

    assert.deepStrictEqual(result, [])
  });
});
