/*
Task
Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.

You need to the traverse the obj, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.

Return the five after works finished.

You should use for..in in your code, otherwise, your solution may not pass this kata. Don't learn bad habits from those lazy guys ;-)


*/




function giveMeFive(obj) {
  //coding here
  let empty = []
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      if (key.length === 5) {
        empty.push(key)
      }
      if (element.length === 5) {
        empty.push(element)
      }

    }
  }
  return empty
}




giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" })

console.log(giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" }))
//["Ihave","money","model"]