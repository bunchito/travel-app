import {
    formatLongDateToISO
  } from "./index"
  
  describe('Testing formatLongDateToISO()' , () => {
    test('given a STRING with long format day it should return the ISO date', () => {
      const longDate = 'Tue Mar 09 2021'
      const result = '2021-03-09'
      expect(formatLongDateToISO(longDate)).toBe(result)
    });
  });