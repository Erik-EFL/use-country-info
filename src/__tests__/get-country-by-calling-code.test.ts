import assert from 'assert';
import { useCountryInfo } from '../index';
import { MockCallingCodeCountrie } from '../mock/data.mock';

const { getCountryByCallingCode } = useCountryInfo();

describe('getCountryByCallingCode', () => {
  it('should return countries searched', () => {
    const result = getCountryByCallingCode('5')

    assert.deepStrictEqual(result, MockCallingCodeCountrie)
  });

  it('should return empty array when no country is found', () => {
    const result = getCountryByCallingCode('undefined');

    assert.deepStrictEqual(result, undefined)
  });
});
