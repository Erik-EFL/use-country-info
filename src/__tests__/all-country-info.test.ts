import { useCountryInfo } from '../index'
import assert from 'assert';

const {
  allCountryInfo
} = useCountryInfo();

describe('UseCountryInfo', () => {
  it('allCountryInfo should return all country info', () => {
    assert.strictEqual(allCountryInfo.length, 250);
  })

  it("allCountryInfo should return an array of objects", () => {
    assert.strictEqual(typeof allCountryInfo[0], "object");
  })

  it("if allCountryInfo equals 0 should return an empty array", () => {
    const allCountryInfoMock = [];

    assert.strictEqual(allCountryInfoMock.length, 0)
  });
});
