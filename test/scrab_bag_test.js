import { expect } from 'chai'
import scrabBag from '../src/scrab_bag'

const letterCounts = "12: E\r9: A, I\r8: O\r6: N, R, T\r4: L, S, U, D\r3: G\r2: B, C, M, P, F, H, V, W, Y, _\r1: K, J, X, Q, Z"
const allZeroes = "0: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"

describe('scrabBag()', () => {
  it('should be a function', function() {
    expect(scrabBag).to.be.a('function')
  })

  xit('gives full letter count when given an empty string', function() {
    const input = ""
    const output = letterCounts
    expect(scrabBag(input)).to.equal(output)
  })

  xit('returns zero for every letter when all letters are used', function() {
    const input = "EEEEEEEEEEEEAAAAAAAAAIIIIIIIIIOOOOOOOONNNNNNRRRRRRTTTTTTLLLLSSSSUUUUDDDDGGGBBCCMMPPFFHHVVWWYY__KJXQZ"
    const output = allZeroes
    expect(scrabBag(input)).to.equal(output)
  })

  xit('returns correct letter count when only some letters are used', function() {
    const input = "AERETOXMYCNS_B"
    const output = "10: E\r9: I\r8: A\r7: O\r5: R, N, T\r4: U, L, D\r3: G, S\r2: P, H, F, V, W\r1: B, Y, J, K, M, Q, C, Z, _\r0: X"
    expect(scrabBag(input)).to.equal(output)
  })
})
