import assert from 'assert';
import { MockLanguageCountries } from '../mock/data.mock';
import { GetCountryBy } from '../services/get-country-by.service';

const { Language } = GetCountryBy;

describe('getCountryByLanguage', () => {
  it('should return countries searched', () => {
    const result = Language('spanish').map(country => country?.name?.common);

    assert.deepStrictEqual(result, MockLanguageCountries)
  });

  it('should return empty array when no country is found', () => {
    const result = Language('NoLanguage');

    assert.deepStrictEqual(result, [])
  });
});
