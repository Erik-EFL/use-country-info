import assert from 'assert';
import { GetCountryBy } from '../services/get-country-by.service';

const { Fifa } = GetCountryBy;

describe('getCountryByFifa', () => {
  it('should return countries searched', () => {
    const result = Fifa('BRA')?.name?.common;

    assert.deepStrictEqual(result, 'Brazil')
  });

  it('should return the country when searched with a valid country name', () => {
    const result = Fifa('Brazil')?.name?.common;
    assert.deepStrictEqual(result, 'Brazil');
  });

  it('should handle lowercase FIFA codes correctly', () => {
    const result = Fifa('bra')?.name?.common;
    assert.deepStrictEqual(result, 'Brazil');
  });

  it('should return undefined when searched with an invalid country name', () => {
    const result = Fifa('Atlantis');
    assert.deepStrictEqual(result, undefined);
  });

  it('should handle mixed case FIFA codes correctly', () => {
    const result = Fifa('bRa')?.name?.common;
    assert.deepStrictEqual(result, 'Brazil');
  });

  it('should handle long strings as country names', () => {
    const result = Fifa('United States of America')?.name?.official;

    assert.deepStrictEqual(result, 'United States of America');
  });

  it('should return empty array when no country is found', () => {
    const result = Fifa('ZZZ');

    assert.deepStrictEqual(result, undefined)
  });
});
