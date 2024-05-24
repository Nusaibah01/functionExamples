// let numbers = [2, 8, 10, 1, 4, 11]
// console.log('Highest number: ${Math.max(...numbers)}');
// console.log(`Lowest number: ${Math.min(...numbers)}`)






/* Shallow copy: if changes are made to either arrays it will re
( creates a new object with references to the same memory locations as the original object */
// let arr1 = [1, 4, 5]
// let arr2 = arr1
// arr2[0] = 10
// console.log('arr1: ', arr1);
// console.log('arr2:', arr2);
// When specifying const the output is the same (i.e shallow copy )
// const arr1 = [1, 4, 5]
// let arr2 = arr1
// arr2[0] = 10
// console.log('arr1: ', arr1);
// console.log('arr2:', arr2);

// Deep copy: allows for the retention of the original array values as 
/*(creates a new object with new memory locations for all of its properties and nested objects or arrays.) */
// let arr1 = [1, 4, 5]
// let arr2 = [...arr1]
// arr2[0] = 10
// console.log('arr1: ', arr1);
// console.log('arr2:', arr2); 



// ... spread operator /use- another way of using a loop / 
// console.log(...arr1);

// let firstName = 'Nusaibah'
// console.log(...firstName); 

// IF you dont want to make us of spread operator make use of Array.from
// let arr1 = [1, 4, 5]
// let arr2 = Array.from 
// arr2[0] = 10
// console.log('arr1: ', arr1);
// console.log('arr2:', arr2);

// console.log('Our lecturer's name is Joel);
// console.log("Our lecturers name is Joel");
// console.log('Our lecturer/s name is Joel ');

// code /' -include a single quote in

// Recursive Function
// function loop(cnt, limit) {
//     if (cnt > limit) {
//         return
//     } else {
//         console.log(cnt);
//         loop(cnt + 1, limit)
//     }
// }
// loop(0, 10)




// function repeat(limit) {
//     let cnt = 1
//     if(cnt < limit) {
//     console.log(cnt);
//     cnt++
//     repeat(limit--)
//     }
//     }
//     repeat(10)

// function repeat(limit){
//     let  cnt = 1
//     if(cnt  <= limit){
//         console.log(cnt -1);
        
//     }
//      repeat(limit -1)
// }
// repeat(limit)





// Challenge

// function repeat(limit) {
//     let cnt = 1
  
//     if(cnt <=limit) {
//       console.log(cnt)
//       cnt++
//       repeat(limit - 1)
//     }
//   }
//   repeat(10);


// Create an object and loop through it 
// let person1 = {
//     firstName: 'John',
//     lastName: 'Peter'
// }
// for ( let i in person1) {
//     console.log(`${i} -> ${person1 [i]}`);
// }

// let numbers = [9, 11, 12, 34]
// for (let number of numbers) {
//     console.log(number);
// }

// Do while Loop
// do{
//     console.log(numbers[cnt]);
//     cnt++
// } while(cnt < numbers.length)



// Factory Function allows us to create an object and return the object (needs to be named in camel case )
// function personDetails(name, surname) {
//      return {
//     firstName: name,
//     lastName: surname
// }
// }
// let person1 = personDetails('Nusaibah', 'Charif')
// let person2 =personDetails('Rahmah', 'Charif')
// console.log(person1)
// console.log(person2)

// Shortened code : 
// function personDetails(firstName, lastName) {
//      return {firstName,lastName}
// }
// let person1 = personDetails('Nusaibah', 'Charif')
// let person2 =personDetails('Rahmah', 'Charif')
// console.log(person1)
// console.log(person2)

/*Factory Function 
-employs PascalCase
-After creating your function , in order to create an object you should make use of the keyword new.
In the background, this function will create a property called "this" and return this.
-Supports inheritance
-Here you need to set your properties to be public or private. By using the _ underscore.
*/


/*
-synchronus function:
  


-asynchronus function:
*/









// Construtor function - can be converted to a class
// Pascal Case- first letter should be uppercase
// function PersonDetails(name, surname, age) {
//     this.firstName = name
//     this.lastName = surname
//     this.age = age
// }
// let person1 = new PersonDetails('Nusaibah', 'Charif', 19)
// let person2 = new PersonDetails('Rahamh', 'Charif', 24)





/* Constructor Function
-Allows for data privacy use closures to encapsulate data that can't be accessed directly from the outside
-Does not use inheritance by default
-Returns an object
-Employs camelCase

*/

// function addition(numb1, numb2){
//     console.log(numb1 + numb2);
// }
// addition(2, 3)

// Shorter way / Senior Developer Way

// (function addition(numb1, numb2) {
//     console.log(numb1 + numb2);
// })(4,2)

// Recursive function: (
/*a feature used in creating a function that keeps calling itself but with a smaller input every consecutive time until the code's desired result from the start is achieved)*/

// 
// function personDetails(firstName, lastName) {
//     return {
//         firstName,
//         lastName, 
//         display() {
//             console.log(
//                 `First name: ${firstName}\nLast name : ${lastName}` );
//         }
//     }
// }
// let person1 = personDetails('Nusaibah', 'Charif')
// console.log(person1);
// person1.display();
async function  fetchData









async function displayData()