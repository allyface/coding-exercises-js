import { expect } from 'chai'
import scrabBag from '../src/scrab_bag'

const letterCounts = {
  '1': ['J', 'K', 'Q', 'X', 'Z'],
  '2': ['B', 'C', 'F', 'H', 'M', 'P', 'V', 'W', 'Y', '_'],
  '3': ['G'],
  '4': ['D', 'L', 'S', 'U'],
  '6': ['N', 'R', 'T'],
  '8': ['O'],
  '9': ['A', 'I'],
  '12': ['E']}

const allZeroes = {'0': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '_']}

describe.only('scrabBag()', () => {
  it('should be a function', function() {
    expect(scrabBag).to.be.a('function')
  })

  it('gives full letter count when given an empty string', function() {
    const input = ""
    const output = letterCounts
    expect(scrabBag(input)).to.deep.equal(output)
  })

  it('returns zero for every letter when all letters are used', function() {
    const input = "EEEEEEEEEEEEAAAAAAAAAIIIIIIIIIOOOOOOOONNNNNNRRRRRRTTTTTTLLLLSSSSUUUUDDDDGGGBBCCMMPPFFHHVVWWYY__KJXQZ"
    const output = allZeroes
    expect(scrabBag(input)).to.deep.equal(output)
  })

  it('returns correct letter count when only some letters are used', function() {
    const input = "AERETOXMYCNS_B"
    const output = {
      '0': ['X'],
      '1': ['B', 'C', 'J', 'K', 'M', 'Q', 'Y', 'Z', '_'],
      '2': ['F', 'H', 'P', 'V', 'W'],
      '3': ['G', 'S'],
      '4': ['D', 'L', 'U'],
      '5': ['N', 'R', 'T'],
      '7': ['O'],
      '8': ['A'],
      '9': ['I'],
      '10': ['E']}
    expect(scrabBag(input)).to.deep.equal(output)
  })
})
