import { GetCountryBy } from '../services/get-country-by.service';
import assert from 'assert';

const { Flag } = GetCountryBy;

describe('get Country By Flag', () => {
  it('should return country searched', () => {
    const result = Flag('BR');
    const expectedCountryName = 'Brazil';

    assert.strictEqual(result?.name?.common, expectedCountryName);
  });

  it('should return empty array when no country is found', () => {
    const result = Flag('USBR');

    assert.deepStrictEqual(result, undefined)
  });
});
