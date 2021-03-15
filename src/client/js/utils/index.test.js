import { generateRandomNumber } from './index'

describe('Testing generateRandomNumber()', () => {
  test('given a maximum number it should generate a random number between 0 and the maximum number - 1', () => {
    const maxNumber = 7
    expect(generateRandomNumber(maxNumber)).toBeLessThan(maxNumber)
  })
})
