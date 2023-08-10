`Quyidagi objectni outputdagi ko'rinishda chiqaring. (toString, join)

Input: 
const me = {
  firstName: "Abdulaziz",
  lastName: "Toshpulatov",
  age: 23,
  languages: ["js", "python", "c++", "nodejs"],
  friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
};
Output:
firstName: Abdulaziz
lastName: Toshpulatov
age: 23
languages: js,python,c++,nodejs
friends: Jamshid+Abbos+Jalol+Mar'uf
`

const me = {
   firstName: "Abdulaziz",
   lastName: "Toshpulatov",
   age: 23,
   languages: ["js", "python", "c++", "nodejs"].toString(),
   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"].join("+"),
 };

console.log(me);
