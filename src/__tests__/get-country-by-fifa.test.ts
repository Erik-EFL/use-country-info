import assert from 'assert';
import { useCountryInfo } from '../index';

const { getCountryByFifa } = useCountryInfo();

describe('getCountryByFifa', () => {
  it('should return countries searched', () => {
    const result = getCountryByFifa('BRA')?.name?.common;

    assert.deepStrictEqual(result, 'Brazil')
  });

  it('should return empty array when no country is found', () => {
    const result = getCountryByFifa('ZZZ');

    assert.deepStrictEqual(result, undefined)
  });
});
