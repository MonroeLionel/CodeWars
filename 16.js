/*
Task
Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.

The first mission: let all elements in the array keep two decimal places(No need to convert number n).

The second mission: Traversal arr, count the number of the element which smaller than n and return it.

for example:

howManySmaller([1.234,1.235,1.228],1.24) should return 2
howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2

*/

//example 4
var num = 111.1234;
var s = num.toFixed(2)   //s=="111.12"
var a = parseInt(s),
  b = parseFloat(s),
  c = +s
console.log([a, b, c])
//output: [ 111, 111.12, 111.12 ]

let q = 123.6789
console.log(q.toFixed(2))



function howManySmaller(arr, n) {
  var count = 0
  //coding here..
  for (i = 0; i < arr.length; i++) {

    let a = (arr[i]).toFixed(2)
    let b = Number(a)
    if (b < n) {
      // debugger
      var count = count + 1
    }
    console.log(`--- ` + Number(a))
    // console.log(`qwe ` + arr[i].toFixed(2))
  }
  return count
}

let r = `123`
console.log(Number(r))


console.log(howManySmaller([1.234, 1.235, 1.228], 1.24))
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212))