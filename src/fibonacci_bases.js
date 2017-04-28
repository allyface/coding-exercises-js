export default function fibonacciBases(input) {
  input = input.split(' ')
  let inputType = input[0]
  let inputValue = input[1]
  let fibArray = [1]

  let fibSeq = () => {
    if (fibArray.length === 1) {
      fibArray.unshift(1)
    } else {
      fibArray.unshift(fibArray[0] + fibArray[1])
    }
  }

  if (inputType === 'decimal') {
    while (inputValue >= fibArray[0]) {
      fibSeq()
    }
    fibArray.shift(0)

    let fibBase = ''
    for (var i = 0; i < fibArray.length; i++) {
      if(inputValue >= fibArray[i]) {
        fibBase += '1'
        inputValue -= fibArray[i]
      } else {
        fibBase += '0'
      }
    }
    return fibBase

  } else if (inputType === 'fib') {
    let toDecimal = 0
    let inputArr = inputValue.split('')

    while (inputArr.length > fibArray.length) {
      fibSeq()
    }

    for (var i = inputArr.length - 1 ; i >= 0; i--) {
      toDecimal += fibArray[i]*inputArr[i]
    }
    return toDecimal.toString()
  }
}
