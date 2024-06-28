import { useCountryInfo } from '../index'

const {
  getCountryByLatitudAndLongitud,
} = useCountryInfo();

describe('getCountryByLatitudAndLongitud', () => {
  it('should return contry searched', () => {
    const result = getCountryByLatitudAndLongitud(47.33333333, 13.33333333);
    const expectedCountryName = 'Austria';

    expect(result?.[0].name?.common).toBe(expectedCountryName);
  });
});
