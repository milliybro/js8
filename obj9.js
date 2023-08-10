`Uzun sondan shunday obyekt hosil qilingki, bunda object kalitlari sinflardan, qiymatlari esa o’sha sonning mos ravishdagi o’sha sinfdagi qiymatlaridan tuzilgan bo’lsin. (for, slice)

Input: 8945472985629;
Output: { birlar: 629, minglar: 985, millionlar: 472, milliardlar: 945, trilionlar: 8 }
`
let number = 8945472985629;
let classes = ['birlar', 'minglar', 'millionlar', 'milliardlar', 'trillionlar'];
let object = {};


function myFunc(number) {
   let numberString = number.toString();
   let numberLength = numberString.length;
 
   for (let i = 0; i < numberLength; i += 3) {
     let index = Math.floor(i / 3);
     let key = classes[index];
     let value = parseInt(numberString.slice(-3 * (index + 1), -3 * index));
 
     object[key] = value;
   }
 
   return object;
 }
 
 let numberObject = myFunc(number);
 console.log(numberObject);
