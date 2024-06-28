import assert from 'assert';
import { useCountryInfo } from '../index';
import { MockTimezoneCountries } from '../mock/data.mock';

const { getCountryByTimezone } = useCountryInfo();

describe('getCountryByTimezone', () => {
  it('should return countries searched', () => {
    const result = getCountryByTimezone('UTC+12:00').map(callbackfn => callbackfn?.name?.common);

    assert.deepStrictEqual(result, MockTimezoneCountries);
  });

  it('should return empty array when no country is found', () => {
    const result = getCountryByTimezone('NoTimezone');

    assert.deepStrictEqual(result, [])
  });
});
