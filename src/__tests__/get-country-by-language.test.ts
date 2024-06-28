import assert from 'assert';
import { useCountryInfo } from '../index';
import { MockLanguageCountries } from '../mock/data.mock';

const { getCountryByLanguage } = useCountryInfo();

describe('getCountryByLanguage', () => {
  it('should return countries searched', () => {
    const result = getCountryByLanguage('spanish').map(country => country?.name?.common);

    assert.deepStrictEqual(result, MockLanguageCountries)
  });

  it('should return empty array when no country is found', () => {
    const result = getCountryByLanguage('NoLanguage');

    assert.deepStrictEqual(result, [])
  });
});
