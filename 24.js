/*
Task
Coding in function isolateIt. function accept 1 parameters arr, it's a string array. Your task is to put a character "|" into the middle of each element.

If the string length is an even number, use the insert method. for example: "abcd" should became "ab|cd". "|" should be inserted between ab and cd.

If the string length is an odd number, use the replacement method. for example: "abcde" should became "ab|de". Character c will be replaced by |.

The original array should not be changed, you need to return a new array(if you use the map method, you do not need to worry about this).

Example
isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
isolateIt(["1234","56789"]) should return ["12|34","56|89"]
a little hint: Flexible use of slice() Will make the work more simple.




*/
function isolateIt(arr) {
  return arr.map(s => s.slice(0, s.length / 2) + "|" + s.slice(-s.length / 2));
}





console.log(Math.floor(4 / 2));


function isolateIt(arr) {

  // return arr.map(el => (el.length % 2 ? el[Math.floor(el.length / 2)] = "|" : el))
  ressArr = arr.map(e => {
    if (e.length % 2) {
      let a;
      a = e.split('')
      a.splice(Math.floor(e.length / 2), 1, "|")
      return a.join('')
    } else {
      let a;
      a = e.split('')
      a.splice(Math.floor((e.length / 2)), 0, "|")
      return a.join('')

      return e
    }
  })

  return ressArr
}

// if (el.length % 2) { /* не четные */
//   // el[Math.floor(el.length / 2)] = `1`

// } else { /* четные */

// }



console.log("[ab|cd,ef|gh]--" + isolateIt(["abcd", "efgh"]))
console.log(isolateIt(["abYde", "fgXij"]))
console.log(isolateIt(["qweqweqweqweqweqwe", "qweqweqweqweqweqwe"]))
// console.log("[12|34,56|89]--" + isolateIt(["1234", "56789"]))

console.log("fghij".slice(2, 3));
console.log(Math.floor(5 / 2));

let test = ["abYde", "fgXij"]
console.log(test.map(el => el = 1));
test[0][2] = 1
// console.log(test[0].splice(2, 0, "|"));
console.log("******************");
console.log(test[0][2]);








console.log(test[0].split());
let test2 = test[0].split("")
console.log(test2);
test2.splice(2, 1, "|")
console.log(test2);

console.log(test2.join(''))
console.log("-------------------------------");

console.log(((test[0].split("")).splice(2, 1, "|")).join(''));