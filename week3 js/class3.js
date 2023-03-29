let name  = 'luvraj'

let hello = `this 
is  
the 
use of
backticks`
// will show the sentence as we write it.

//console.log(hello);

let date = new Date(); // prints the current date and time.
let date2 = new Date(2020, 10, 10);
let date3 = new Date(2000 , 7 , 6 , 18); // months index starts from 0.
date3.setFullYear(2001);
console.log(date3);
// console.log(date2);
// console.log(date); 

//arrays

let arr=[1,3,5,7];
console.log(arr);


let courses = [
    {no:1 , name: 'Student'},
    {no:2,  name: 'Professor'}
];

console.log(courses);
console.log(courses.includes( {no:1 , name: 'Student' }));
