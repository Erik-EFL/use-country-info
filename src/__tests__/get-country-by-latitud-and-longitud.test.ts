import { GetCountryBy } from '../services/get-country-by.service';

const {
  LatitudAndLongitud,
} = GetCountryBy;

describe('get Country By LatitudAndLongitud', () => {
  it('should return contry searched', () => {
    const result = LatitudAndLongitud(47.33333333, 13.33333333);
    const expectedCountryName = 'Austria';

    expect(result?.[0].name?.common).toBe(expectedCountryName);
  });
});
