`Bir necha takrorlanuvchi sonlar ishtirok etgan massivdan shunday obyekt hosil qilingki, bu object kalitlari massivning takrorlanmas sonlaridan, qiymatlari esa o’sha sonlarning massivda necha marta ishtirok etganidan tuzilgan bo’lsin. (for)

Input: [ 7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9 ]
Output: { 7: 3, 8: 2, 4: 3, 5: 3, 9: 1 }`;

let arr = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
let obj = {};
let count = 0;

for (let key in arr) {
  let el = arr[key];
  if (el in obj) {
    obj[el].push(key);
  } else {
    obj[el] = [key];
  }
}
console.log(obj);
