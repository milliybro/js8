`Quyidagi massivdagi barcha o'quvchilarni protcentlarining o'rtacha qiymatini toping, shuningdek, objectlarga quyidagi propertylarni qo'shib yangi massiv qaytaring.`;

const pupils = [
  { name: "Elbek", percentage: 95 },
  { name: "Zafar", percentage: 78 },
  { name: "Aziz", percentage: 83 },
  { name: "Jasur", percentage: 88 },
  { name: "Bobur", percentage: 66 },
  { name: "Kamron", percentage: 75 },
];

let sum = 0;

function orta(pupils) {
  for (let i = 0; i < pupils.length; i++) {
    let res = pupils.reduce((sum, pupil) => sum + pupil.percentage, 0);
    let result = res / pupils.length;
    return result;
  }
}
console.log(orta(pupils));
