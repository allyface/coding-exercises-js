import {expect} from 'chai'
import theDisemvoweling from '../src/the_disemvoweling'

const string = 'i am groot'

describe('theDisemvoweling()', () => {
  it('should be a function', function() {
    expect(theDisemvoweling).to.be.a('function')
  })

  it('should return a string', function() {
    expect(theDisemvoweling(string)).to.be.a('string')
  })

  it('should return a string with no vowels and no spaces', function() {
    const output = 'mgrt'
    expect(theDisemvoweling(string)).to.equal(output)
  })
})
