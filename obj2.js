`Kalitlari 1 dan n gacha bo’lganlar sonlarga, qiymatlari esa o’sha sonlarning kvatratiga teng object hosil qiling. (for)

Input: 5
Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}`;
let n = 5;
let obj = {};

for (let i = 1; i <= n; i++) {
  obj[i] = i * i;
}

console.log(obj);
