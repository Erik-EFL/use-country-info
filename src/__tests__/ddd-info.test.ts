import { useCountryInfo } from '../index'
import assert from 'assert';

const {
  ddiInfo
} = useCountryInfo();

describe('ddiInfo', () => {
  it('ddiInfo should return an especific country', () => {
    const expectedRoot = "+6";
    const expectedSufix = "81";

    assert.strictEqual(ddiInfo[0].countryCallingCode?.root, expectedRoot);
    assert.strictEqual(ddiInfo[0].countryCallingCode?.suffixes?.[0], expectedSufix);
  })
});
