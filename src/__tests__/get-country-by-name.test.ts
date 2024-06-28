import { useCountryInfo } from '../index'
import assert from 'assert';

const { getCountryByName } = useCountryInfo();

describe('getCountryByName', () => {
  it('should return country searched', () => {
    const result = getCountryByName('Luxembourg');
    const expectedCountryName = 'Luxembourg';

    assert.deepStrictEqual(result?.name?.common, expectedCountryName)
  });

  it('should return undefined when no country is found', () => {
    const result = getCountryByName('NoCountry');

    assert.deepStrictEqual(result, undefined)
  });
})
