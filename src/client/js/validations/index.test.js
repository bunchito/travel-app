import {
  validateData
} from "./index"

describe('Testing validateData()' , () => {
  test('given a payload and a type it should return the payload', () => {

    const data = [] // arrays are objects :)
    const expectedDataType = 'object'
    expect(validateData(expectedDataType, data)).toBe(data)
  });
});