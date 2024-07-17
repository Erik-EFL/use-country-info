import { MockCallingCodeCountrie } from '../mock/data.mock';
import assert from 'assert';
import { GetCountryBy } from '../services/get-country-by.service';

const { Name } = GetCountryBy;

describe('get Country By Name', () => {
  it('should return country searched', () => {
    const result = Name('Brazil');

    assert.deepStrictEqual(result, MockCallingCodeCountrie)
  });

  it('should return null when no country is found', () => {
    const result = Name('NoCountry');

    assert.deepStrictEqual(result, null)
  });
})
