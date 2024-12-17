import { GetCountryBy } from '../services/get-country-by.service';
import assert from 'assert';

const { Cca3 } = GetCountryBy;

describe('get Country By Cca3', () => {
  it('should return country searched', () => {
    const result = Cca3('LUX');
    const expectedCountryName = 'Luxembourg';

    assert.strictEqual(result?.name?.common, expectedCountryName)
  });

  it('should return undefined when no country is found', () => {
    const result = Cca3('NoCountry');

    assert.strictEqual(result, undefined)
  });
});
