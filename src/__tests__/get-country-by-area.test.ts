import assert from 'assert';
import { useCountryInfo } from '../index';

const { getCountryByArea } = useCountryInfo();

describe('getCountryByArea', () => {
  it('should return countries searched', () => {
    const result = getCountryByArea(8515767).map(country => country?.name?.common);

    assert.deepStrictEqual(result, ['Brazil'])
  });
});
