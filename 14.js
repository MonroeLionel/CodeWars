/*
ask
Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

To judge the number n. If n is one of the above five constants, return one of these string:

"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"
Other values should return "Input number is xxx". xxx means this number.

For example:

whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"
What you need to think about is how to judge it correctly and effectively and don't forget isNaN().
*/


function whatNumberIsIt(n) {
  //coding here
  if (isNaN(n)) {
    return "Input number is Number.NaN"
  }
  if (n === Infinity) {
    return "Input number is Number.POSITIVE_INFINITY"

  }
  if (n === -Infinity) {
    return "Input number is Number.NEGATIVE_INFINITY"

  }
  if (Number.MAX_VALUE === n) {
    return "Input number is Number.MAX_VALUE"
  }
  if (Number.MIN_VALUE === n) {
    return "Input number is Number.MIN_VALUE"
  }
  return "Input number is " + n
}



console.log(whatNumberIsIt(5e-324))