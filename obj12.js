`Objectning kalitlaridan va qiymatlaridan iborat bo'lgan massiv tuzing.

Input: const obj = {
  "it": 20,
  "mushuk": 10,
  "sigir": 200,
  "tovuq": 2
}
Output: ["it", 20, "mushuk", 10, "sigir", 200, "tovuq", 2]`

const obj = {
   "it": 20,
   "mushuk": 10,
   "sigir": 200,
   "tovuq": 2
 }

 const result = Object.entries(obj).flat();

console.log(result);