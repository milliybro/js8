`Shunday object berilganki, uning kalitlari mahsulotlardan va qiymatlari esa ularning narxlaridan tuzilgan. Barcha mahsulot qancha turishini toping. (Object.values())

Input: {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000}
Output: 50000`;

let obj = { Apelsin: 10000, Olma: 12000, Mandarin: 8000, Banan: 20000 };
let key = 0;

let objValue = Object.values(obj).reduce(
  (first, qiymat) => first + Number(qiymat),
  key
);

console.log(objValue);
