import assert from 'assert';
import { GetCountryBy } from '../services/get-country-by.service';

const { Area } = GetCountryBy

describe('get Country By Area', () => {
  it('should return countries searched', () => {
    const result = Area(8515767).map(country => country?.name?.common);

    assert.deepStrictEqual(result, ['Brazil'])
  });
});
