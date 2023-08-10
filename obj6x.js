`Object kalitlarining barchasi string toifasidagi ma’lumotlardan tuzilgan bo’lsa true, aks holda false qiymat qaytaruvchi defineObject nomli funksiya hosil qiling. (Object.keys())

Input: {abc: 1, 123: 2, d: 5}
Output: false`;

let obj = { abc: 1, milliy: 2, bro: 5 };

function defineObject(object) {
  if (typeof Object.keys[obj] !== 'string') {
    return false;
  }
  return true;
}
console.log(defineObject(obj));
