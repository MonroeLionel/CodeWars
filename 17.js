/*

Task
Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

The first mission: Traversing arr, find the shortest string length.

The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

for example:

cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
*/


/*
function cutIt(arr){
  const minLength = Math.min(...arr.map(x => x.length));
  return arr.map(x => x.slice(0, minLength));
}

const cutIt = arr =>
  arr.map(val => val.slice(0, Math.min(...arr.map(val => val.length))));


  function cutIt(array) {
  var shortest = array.reduce((min,s) => Math.min(min, s.length), Infinity);
  return array.map(s => s.slice(0, shortest));
}
*/

function cutIt(arr) {
  let min = arr[0].length
  let max = min
  let array = []
  //coding here...
  for (i = 0; i < arr.length; i++) {
    // debugger
    if (arr[i].length > max) max = arr[i].length
    if (arr[i].length < min) min = arr[i].length

    // debugger
    // arr[i].length > a ? a = arr[i].length : b = arr[i].length

    console.log(arr[i].length)
  }
  for (i = 0; i < arr.length; i++) {

    array.push(arr[i].slice(0, min))
  }
  console.log(`min ` + min)
  console.log(`max ` + max)
  return array
}






// cutIt(["ab", "cde", "fgh"]);
console.log(cutIt(["ab", "cde", "fgh", "fgh"]))


var str = "abcdef";
console.log(str.slice(0, 3))