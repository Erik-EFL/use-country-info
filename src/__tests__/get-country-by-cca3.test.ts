import { useCountryInfo } from '../index'
import assert from 'assert';

const { getCountryByCca3 } = useCountryInfo();

describe('getCountryByCca3', () => {
  it('should return country searched', () => {
    const result = getCountryByCca3('LUX');
    const expectedCountryName = 'Luxembourg';

    assert.strictEqual(result?.name?.common, expectedCountryName)
  });

  it('should return undefined when no country is found', () => {
    const result = getCountryByCca3('NoCountry');

    assert.strictEqual(result, undefined)
  });
});
