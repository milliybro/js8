` Qiymatlari sonlardan iborat obj nomli object berilgan. Qiymatlarini n martaga oshiruvchi getMultipleValues(n) nomli funksiya yozing.

Input:  let n = 3
const obj = { a: 2, b: 3, c: 4, d: 6 };
Output:  const res = { a: 6, b: 9, c: 12, d: 18 }`

const n = 3;
const obj = { a: 2, b: 3, c: 4, d: 6 };

function getMultipleValues(n, obj) {
   const res = {};
 
   for (let key in obj) {
       res[key] = obj[key] * n;
   }
 
   return res;
 }
 
 
 console.log(getMultipleValues(n, obj)); 