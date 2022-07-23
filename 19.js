/*
Task
Implement a function which accepts 2 arguments: string and separator.

The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

For example:

splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

*/

let abc = 'My name is John'
let bca = ['M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'J', 'o', 'h', 'n']

function splitAndMerge(string, separator) {
  let str = string.split(' ')
  let resArr = []
  // console.log(str)
  for (i = 0; i < str.length; i++) {
    let a = str[i].split('')
    //console.log(str[i].split(''))

    let b = a.join(separator)
    console.log(b)
    // debugger
    resArr.push(b)
  }
  //
  // resArr.concat()
  //debugger
  return resArr.join(' ')
}


let a = []
a.push(bca[1])
console.log(`qwe` + a)


splitAndMerge("My name is John", " ") //"M y n a m e i s J o h n"


console.log(abc.split(""))
console.log(bca.join(''))
console.log(bca[2] == false)

splitAndMerge("My name is John", "-")

splitAndMerge("Hello World!", ",") //, "H,e,l,l,o W,o,r,l,d,!");

abc.split(' ')
console.log(abc.split(' '))
console.log(abc)


let tt = ['M*y', 'n*a*m*e', 'i*s', 'J*o*h*n']
let q = 'M*y'
let d = 'n*a*m*e'
let r = ''


console.log(tt.join(' '))
console.log(r.concat(d + " "))