import assert from 'assert';
import { MockCallingCodeCountrie } from '../mock/data.mock';
import { GetCountryBy } from '../services/get-country-by.service';

const { CallingCode } = GetCountryBy;

describe('get Country By CallingCode', () => {
  it('should return countries searched', () => {
    const result = CallingCode('5')

    assert.deepStrictEqual(result, MockCallingCodeCountrie)
  });

  it('should return empty array when no country is found', () => {
    const result = CallingCode('undefined');

    assert.deepStrictEqual(result, undefined)
  });
});
