import assert from 'assert';
import { GetCountryBy } from '../services/get-country-by.service';

const { Demonym } = GetCountryBy;

describe('get Country By Demonym', () => {
  it('should return countries searched', () => {
    const result = Demonym('Brazilian').map(country => country?.name?.common);

    assert.deepStrictEqual(result, ['Brazil'])
  });

  it('should return empty array when no country is found', () => {
    const result = Demonym('NoCountry');

    assert.deepStrictEqual(result, [])
  });
});
