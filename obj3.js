`2-misoldan hosil bo’lgan objectning kalitlari va qiymatlari yig’indisini toping. (Object.keys(), Object.values())`;

let obj = { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 };

let key = 0;

let keys = Object.keys(obj);
let value = Object.values(obj);

let objKeys = keys.reduce((first, qiymat) => first + Number(qiymat), key);
let objValue = value.reduce((first, qiymat) => first + Number(qiymat), key);

console.log("key yig'indisi: "+objKeys);
console.log("Value yig'indisi: "+objValue);
