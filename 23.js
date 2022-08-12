/*
Task
Coding in function infiniteLoop. function accept 3 parameters. The 1st parameter is arr, it's a 2D array, it contains three 1D array. The 2nd parameter is d ，it's a string. The 3rd parameter is n, it's a number.

You can think of arr as a moat, the elements of arr like water constantly flow in. The direction of flow is controlled by the parameter d. The value of d can be "left" or "right". "left" means the "river" moves to the left. All elements in the 1D array are to the left moving n position, if beyond the bounds of the array and the element is moved to the tail on the left side of the array; if it exceeds the left boundary element would be moved to the tail of 3rd array(like a circle). Right is also similar to the operation, but it is moving to the right.

Finally, return arr.

Examples
infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"left",1) should return [[2,3,4],[5,6,7],[8,9,1]]
infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",1) should return [[9,1,2],[3,4,5],[6,7,8]]
infiniteLoop( [[1,2],[3,4,5,6],[7,8,9,10]],"left",2) should return [[3,4],[5,6,7,8],[9,10,1,2]]
*/


function infiniteLoop(arr, d, n) {
  let arra = arr.join().split(',')

  let resArr2 = []

  if (d === "left") {
    for (i = 0; i < n; i++) {
      a = arra.shift()
      arra.push(a)
    }
    for (i = 0; i < arr.length; i++) {
      let resArr = []
      for (j = 0; j < arr[i].length; j++) {
        let b = arra.shift()
        resArr.push(Number(b))
      }
      resArr2.push(resArr)
    }
  }
  if (d === "right") {
    for (i = 0; i < n; i++) {
      a = arra.pop()
      arra.unshift(a)
    }
    /*  for (i = 0; i < arr.length; i++) {
       let resArr = []
       for (j = 0; j < arr[i].length; j++) {
         let b = arra.pop()
         resArr.unshift(Number(b))
       }
       resArr2.unshift(resArr)
     } */
    for (i = 0; i < arr.length; i++) {
      let resArr = []
      for (j = 0; j < arr[i].length; j++) {
        let b = arra.shift()
        resArr.push(Number(b))
      }
      resArr2.push(resArr)
    }
  }




  return resArr2

}


// arr=[[4,2,2],[1,1,7,4,9],[8,4,2,3,6,9]], d="right"  n=7</font> 
// '[[9, 8, 4], [2, 3, 6, 9, 4], [2, 2, 1, 1, 7, 4]]'
console.log(infiniteLoop([[4, 2, 2], [1, 1, 7, 4, 9], [8, 4, 2, 3, 6, 9]], "right", 7));


let arr = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]]
console.log(infiniteLoop([[1, 2, 3], [4, 5, 6], [7, 8, 9]], "right", 1));
console.log(infiniteLoop([[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]], "left", 2));
b = arr.join().split(',')
console.log(arr.join().split(','));
a = b.shift()
console.log(a);
console.log(b);

test = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
console.log(Number(test[0]));
console.log("-----------------------");
test.pop()
console.log(test);
