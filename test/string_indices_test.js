import {expect} from 'chai'
import stringIndices from '../src/string_indices'

const fullString = "Catch me outside, how about that?"

describe('stringIndices()', () => {
  it('should be a function', function() {
    expect(stringIndices).to.be.a('function')
  })

  it('should return the word located at the desired index', function() {
    const index = 3
    expect(stringIndices(fullString, index)).to.equal('outside')
  })

  it('should return an empty string if index is not within the string provided', function() {
    const index = 7
    expect(stringIndices(fullString, index)).to.equal('')
  })
})
