/*
Task
Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

We translate the sentence into an alien language according to the following rules:

Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

for example:

alienLanguage("My name is John") should return "My NAMe Is JOHn"
alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
alienLanguage("Hello World") should return "HELLo WORLd"
A small hint: The first conversion of the entire string will make the code easier


*/

function alienLanguage(str) {
  return str.replace(/\w+/g, w => w.slice(0, -1).toUpperCase() + w.slice(-1).toLowerCase());
}


function alienLanguage(str) {
  let arrStr = str.toUpperCase().split(" ")
  let resArr = []
  for (i = 0; i < arrStr.length; i++) {
    let a = arrStr[i]/* [arrStr[i].leght - 1] */
    let b = a[a.length - 1].toLowerCase()

    resArr.push(arrStr[i].slice(0, -1) + arrStr[i][arrStr[i].length - 1].replace(arrStr[i][arrStr[i].length - 1], b))
  }
  return resArr.join(" ")
}





// let stra = "My name is John"

// alienLanguage("My name is John") /* should return "My NAMe Is JOHn" */
// console.log(alienLanguage("My name is John"))
console.log(alienLanguage("this is an example"))
// console.log(stra.split(" ")[1][stra.split(" ")[1].length - 1])
// console.log(stra.split(" ")[1])
res = "example"
console.log(res.replace("e", "E"))

var str = "this is an example";
var result = str.replace(/\b\w/g, x => x.toUpperCase());
var result = str.replace(/\S\w/g, x => x.toUpperCase());
console.log(result);

console.log(str[0].slice(0, -1));


/*
B  Сопоставляется с границей не-слов нулевой ширины, например с позицией между двумя буквами или двумя пробелами.

Например, шаблон /\Bдень/ сопоставляется с подстрокой «день» в строке «в полдень»; шаблон /за\B/ сопоставляется с подстрокой «за» в строке «возможно завтра».

\W   Сопоставляется с любым символом из базового латинского алфавита, не являющимся символом, из которых состоят слова. Эквивалентен набору символов [^A-Za-z0-9_].

Например, шаблоны /\W/ и /[^A-Za-z0-9_]/ сопоставляются с подстрокой «%» в строке «50%».

*/