`Agar object qiymatlari ichida falsy qiymatlar bo’lsa, ularni o’chirib yangi object hosil qiling. (Object.keys())

Input: { a: false, b: 12, c: true, d: 0 }
Output: { b: 12, c: true }`;

let obj = { a: false, b: 12, c: true, d: 0 };

function removeFalsy(obj) {
  let newObj = {};

  Object.keys(obj).forEach((key) => {
    if (obj[key] !== false) {
      newObj[key] = obj[key];
    }
  });

  return newObj;
}

console.log(removeFalsy(obj));
