import assert from 'assert';
import { GetCountryBy } from '../services/get-country-by.service';

const { Capital } = GetCountryBy;

describe('get Country By Capital', () => {
  it('should return countries searched', () => {
    const result = Capital('Brasília').map(country => country?.name?.common);

    assert.deepStrictEqual(result, ['Brazil'])
  });

  it('should return empty array when no country is found', () => {
    const result = Capital('NoCountry');

    assert.deepStrictEqual(result, [])
  });
});
