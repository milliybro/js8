`
isPassed propertyga protcent 70 dan o'tsa va teng bo’lsa true, aks holda false qiymat o'zlashtirilsin.
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
 
 pupils.forEach(pupil => {
   if (pupil.percentage > 70) {
     pupil.isPasse = true;
   } else {
     pupil.isPassed = false;
   }
 });
 
 console.log(pupils);