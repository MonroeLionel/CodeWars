/*
Task
Coding in function countGrade. function accept 1 parameters scores, it's a number array. Your task is to count the grade distribution of the scores, to return an object like this:

{S:888, A:888, B:888, C:888, D:888, X:888}
Grading rules:

Grade S: Full marks(score=100)
Grade A: score<100 and score>=90
Grade B: score<90 and score>=80
Grade C: score<80 and score>=60
Grade D: score<60 and score>=0
Grade X: score=-1(The cheating guy gets a score like that)
Example
countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
countGrade([65,75,,85,85,95,100,100]) should return {S:2, A:1, B:2, C:2, D:0, X:0}
countGrade([-1,-1,-1,-1,-1,-1]) should return {S:0, A:0, B:0, C:0, D:0, X:6}123123

*/

function countGrade(scores) {
  return {
    'S': scores.filter(function (x) { return x == 100 }).length,
    'A': scores.filter(function (x) { return (x < 100 && x >= 90) }).length,
    'B': scores.filter(function (x) { return (x < 90 && x >= 80) }).length,
    'C': scores.filter(function (x) { return (x < 80 && x >= 60) }).length,
    'D': scores.filter(function (x) { return (x < 60 && x >= 0) }).length,
    'X': scores.filter(function (x) { return x == -1 }).length,
  };
}


function countGrade(scores) {
  var count = f => scores.filter(v => f(v)).length;
  return {
    S: count(v => v == 100),
    A: count(v => v < 100 && v >= 90),
    B: count(v => v < 90 && v >= 80),
    C: count(v => v < 80 && v >= 60),
    D: count(v => v < 60 && v >= 0),
    X: count(v => v == -1)
  }
}


function countGrade(scores) {
  let a = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 }
  scores.filter(f => {
    if (f == 100) {
      a = { ...a, S: a.S + 1 }
    } else if (f < 100 & f >= 90) {
      a = { ...a, A: a.A + 1 }
    } else if (f < 90 & f >= 80) {
      a = { ...a, B: a.B + 1 }
    } else if (f < 80 & f >= 60) {
      a = { ...a, C: a.C + 1 }
    } else if (f < 60 & f >= 0) {
      a = { ...a, D: a.D + 1 }
    } else if (f == -1) {
      a = { ...a, X: a.X + 1 }
    }
  })
  return a
}


console.log(countGrade([50, 60, 70, 80, 90, 100]));



countGrade([50, 60, 70, 80, 90, 100])/* , { S: 1, A: 1, B: 1, C: 2, D: 1, X: 0 }); */
countGrade([65, 75, , 85, 85, 95, 100, 100])/*  { S: 2, A: 1, B: 2, C: 2, D: 0, X: 0 }); */
countGrade([-1, -1, -1, -1, -1, -1])/*  { S: 0, A: 0, B: 0, C: 0, D: 0, X: 6 }); */


let kgd = ['Kaliningrad', 'Koenigsberg', 'Selma', 'Ostmark'];
let pupersuper = [];
const modifiedWords = kgd.filter((word, index, array) => {
  array[index] += ' superpuper'
  pupersuper.push(array[index]);
  return word.length >= 11
});
console.log(pupersuper);


// pupersuper = ["Kaliningrad superpuper", "Koenigsberg superpuper", "Selma superpuper", "Ostmark superpuper"];
// modifiedWords = ["Kaliningrad", "Koenigsberg"];