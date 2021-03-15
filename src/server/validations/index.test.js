import { validatePropertiesObj } from './index'

describe('Testing validatePropertiesObj()', () => {
  test('given an array with properties and an object should return true if all properties are present as keys', () => {
    const properties = ['a', 'b', 'c']
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    }
    const result = true
    expect(validatePropertiesObj(properties, obj)).toEqual(result)
  })
})
