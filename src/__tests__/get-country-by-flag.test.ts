import { useCountryInfo } from '../index'
import assert from 'assert';

const { getCountryByFlag } = useCountryInfo();

describe('getCountryByFlag', () => {
  it('should return country searched', () => {
    const result = getCountryByFlag('BR');
    const expectedCountryName = 'Brazil';

    assert.strictEqual(result?.name?.common, expectedCountryName);
  });

  it('should return empty array when no country is found', () => {
    const result = getCountryByFlag('USBR');

    assert.deepStrictEqual(result, undefined)
  });
});
