`grade propertyga protcent 90-100 o'rtasida bo'lsa 5, 80-90 o'rtasida bo'lsa 4, 70-80 o'rtasida bo'lsa 3 bahoni, qolgan holatlarda 2 bahoni o'zlashtiring.

const pupils = [
   {
     name: "Elbek",
     protcent: 95,
   },
   {
     name: "Zafar",
     protcent: 78,
   },
   {
     name: "Aziz",
     protcent: 83,
   },
   {
     name: "Jasur",
     protcent: 88,
   },
   {
     name: "Bobur",
     protcent: 66,
   },
   {
     name: "Kamron",
     protcent: 75,
   },
 ];
 
`
const pupils = [
   { name: "Elbek", percentage: 95 },
   { name: "Zafar", percentage: 78 },
   { name: "Aziz", percentage: 83 },
   { name: "Jasur", percentage: 88 },
   { name: "Bobur", percentage: 66 },
   { name: "Kamron", percentage: 75 },
 ];
 
 function Grade(percentage) {
   if (percentage >= 90 && percentage <= 100) {
     return 5;
   } else if (percentage >= 80 && percentage < 90) {
     return 4;
   } else if (percentage >= 70 && percentage < 80) {
     return 3;
   } else {
     return 2;
   }
 }
 
 const dranded = pupils.map(pupil => {
   const grade = Grade(pupil.percentage);
   return { name: pupil.name, percentage: pupil.percentage, grade: grade };
 });
 
 console.log(dranded);