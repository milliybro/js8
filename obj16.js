`Quyidagi obyektdan destructing orqali barcha qiymatlarini oling.

const product = {
  name: "Iphone 14",
  company: {
    name: "Apple",
    price: "200 mlrd",
    founder: {
      firstName: "Steve",
      lastName: "Jobs",
      birthDate: 1950,
    },
  },
};`
const product = {
   name: "Iphone 14",
   company: {
     name: "Apple",
     price: "200 mlrd",
     founder: {
       firstName: "Steve",
       lastName: "Jobs",
       birthDate: 1950,
     },
   },
 };

let pro= { name: nam, company:{name:companyName, price:companyPrice, founder:{firstName: names, lastName: surname, birthDate: birth}}} = product;

console.log(nam);
console.log(companyName);
console.log(companyPrice);
console.log(names);
console.log(surname);
console.log(birth);


