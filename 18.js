/*
Task
Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

Please return the gap between the first position of c and the last position of c.

If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.

for example:

firstToLast("ababc","a") should return 2(2-0)
firstToLast("ababc","c") should return 0(4-4)
firstToLast("ababc","d") should return -1

*/

str1 = "tsvtdltdbbsmyeaowtaejtaefysc"  //c="y" 
//13

str2 = "nxpgtzijcxvunxfiruaeebaxbtavvpbyouyhdpfuweyjtfzqj" // c="x"
//22

function firstToLast(str, c) {
  //coding here..
  if (str.search(c) >= 0) {
    let f = str.search(c)
    let l = str.lastIndexOf(c)
    console.log(f)
    console.log(l)
    return l - f
  }
  return -1
}


let qwe = 'ababc'

console.log(firstToLast("ababc", "a"))
console.log('ищем а ' + qwe.search('a'))
console.log('ищем а ' + qwe.indexOf('a'))
console.log('ищем а ' + qwe.lastIndexOf('a'))






let abc = 'abcdefga'
let test = 'ababc'

console.log(str1.indexOf('y'))

console.log(str1.lastIndexOf('y'))