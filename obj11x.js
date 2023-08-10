`Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.

Input: const products = [
  { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
  { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
  { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
  { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
  { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
];`;

const products = [
  { nomi: "Product 1", narxi: 20000, chegirma: 10, miqdori: 5 },
  { nomi: "Product 2", narxi: 10000, chegirma: 20, miqdori: 4 },
  { nomi: "Product 3", narxi: 15000, chegirma: 8, miqdori: 10 },
  { nomi: "Product 4", narxi: 18000, chegirma: 5, miqdori: 6 },
  { nomi: "Product 5", narxi: 5000, chegirma: 10, miqdori: 16 },
];

let res= (products[0].narxi*((100 - products[0].chegirma) / 100)*products[0].miqdori)
let res1= (products[1].narxi*((100 - products[1].chegirma) / 100)*products[1].miqdori)
let res2= (products[2].narxi*((100 - products[2].chegirma) / 100)*products[2].miqdori)
let res3= (products[3].narxi*((100 - products[3].chegirma) / 100)*products[3].miqdori)
let res4= (products[4].narxi*((100 - products[4].chegirma) / 100)*products[4].miqdori)

console.log(res1+res2+res3+res4+res);
