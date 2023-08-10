`Stringlar massivi berilgan. Shunday object hosil qilingki, o’sha objectning kalitlari massiv elementlaridan va qiymatlari esa ularning uzunligidan iborat bo’lsin. (for)

Input: ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"]
Output: {"Abdulaziz": 9, "Safarmurod": 10, "O’rol": 5, "Jahongir": 8}`

let Arr= ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"]
let obj={}

for (let i = 0; i < Arr.length; i++) {
   obj[Arr[i]] = Arr[i].length;
 }

 console.log(obj);