import assert from 'assert';
import { MockBorderCca3CountriesCommonNames, MockBorderCca3CompleteCountries, MockResponseBordersCountries } from '../mock/data.mock';
import { GetCountryBy } from '../services/get-country-by.service';

const { Border } = GetCountryBy;

describe('get Country By Border', () => {
  it('should return country info if searched with complete country name', () => {
    const resultByName = Border('Luxembourg');
    assert.deepStrictEqual(resultByName, MockResponseBordersCountries);
  });

  it('should return country info if searched with cca3 code', () => {
    const resultByCode = Border('MCO').map(country => country?.name?.common);
    assert.deepStrictEqual(resultByCode, MockBorderCca3CountriesCommonNames);
  });

  it('should return country info if searched with cca3 code and validate borders', () => {
    const resultByCode = Border('MCO');
    assert.deepStrictEqual(resultByCode, MockBorderCca3CompleteCountries);
  });

  it('should return empty array when no country is found', () => {
    const result = Border('NoCountry');
    assert.deepStrictEqual(result, []);
  });

  it('should correctly handle FIFA code check and return bordering countries', () => {
    const resultByFifaCode = Border('BRA').flatMap(callbackfn => callbackfn.borders);
    assert.deepStrictEqual(resultByFifaCode, [
      'BRA', 'SUR', 'VEN', 'ARG', 'BRA',
      'BRA', 'SUR', 'BRA', 'GUF', 'GUY',
      'ARG', 'BOL', 'BRA', 'BRA', 'COL',
      'GUY', 'ARG', 'BRA', 'CHL', 'PRY',
      'PER', 'BRA', 'ECU', 'PAN', 'PER',
      'VEN', 'BOL', 'BRA', 'CHL', 'PRY',
      'URY', 'BOL', 'BRA', 'CHL', 'COL',
      'ECU'
    ]);
  });

  it('should return empty array when no border is found with FIFA code', () => {
    const resultByFifaCode = Border('XXX');
    assert.deepStrictEqual(resultByFifaCode, []);
  });

  it('should return empty array when no border is found with cca3 code', () => {
    const resultByCca3Code = Border('YYY');
    assert.deepStrictEqual(resultByCca3Code, []);
  });

  it('should return empty array when no border is found with country name', () => {
    const resultByName = Border('UnknownCountry');
    assert.deepStrictEqual(resultByName, []);
  });
});
