import assert from 'assert';
import { GetCountryBy } from '../services/get-country-by.service';

const { Population } = GetCountryBy;

describe('get Country By Population', () => {
  it('should return countries searched', () => {
    const result = Population(212559409).map(country => country?.name?.common);

    assert.deepStrictEqual(result, ['Brazil'])
  });
});
