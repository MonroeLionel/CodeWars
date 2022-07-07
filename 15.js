/*
Task
Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

the color code should starting with "#". and then use 2 characters per color.

for example:

colorOf(255,0,0) should return "#ff0000"
colorOf(0,111,0) should return "#006f00"
colorOf(1, 2 ,3) should return "#010203"
That's all of your work. My work is print your color code on your screen.


*/

function colorOf(r, g, b) {
  //coding here
  r = r.toString(16)
  g = g.toString(16)
  b = b.toString(16)

  console.log(`r` + ` ` + Array.from(r).length + ` ` + r)
  console.log(`g` + ` ` + Array.from(g).length + ` ` + g)
  console.log(`b` + ` ` + Array.from(b).length + ` ` + b)

  if (Array.from(r).length < 2) {
    r = "0" + r
  }
  if (Array.from(g).length < 2) {
    g = "0" + g
  }

  if (Array.from(b).length < 2) {
    b = "0" + b
  }
  console.log(`r` + ` ` + Array.from(r).length + ` ` + r)
  console.log(`g` + ` ` + Array.from(g).length + ` ` + g)
  console.log(`b` + ` ` + Array.from(b).length + ` ` + b)


  return "#" + r + g + b

}

console.log(colorOf(255, 0, 0))

console.log(colorOf(152, 12, 159))

let a = 01
let b = 222

console.log(a.toString())
console.log(Array.from(`qwe`))
// 980c9f