import {expect} from 'chai'
import fibonacciBases from '../src/fibonacci_bases'

describe('fibonacciBases()', () => {
  it('should be a function', function() {
    expect(fibonacciBases).to.be.a('function')
  })

  it('should return a string', function() {
    const input = 'decimal 16'
    expect(fibonacciBases(input)).to.be.a('string')
  })

  it('should convert decimal inputs to base Fibonacci', function() {
    expect(fibonacciBases('decimal 31')).to.equal('10100100')
    expect(fibonacciBases('decimal 16')).to.equal('1001000')
  })

  it('should convert base Fibonacci inputs to decimal', function() {
    const inputs = ['fib 11111', 'fib 1', 'fib 10']
    const output = ['12', '1', '1']
    inputs.forEach( function(input, iterator) {
      expect(fibonacciBases(input)).to.equal(output[iterator])
    })

    // --Alternate way of using multiple inputs for testing--
    // inputOutputMatch = {
    //   "fib 11111": '12',
    //   "fib 1": '1',
    //   "fib 10": '1'
    // }
    // for(let i in inputOutputMatch) {
    //   expect(fibonacciBases(i)).to.equal(inputOutputMatch[i])
    // }
  })
})
