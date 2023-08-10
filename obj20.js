`Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta olmadi shuni ham hisoblang.`

const pupils = [
   { name: "Elbek", percentage: 95 },
   { name: "Zafar", percentage: 78 },
   { name: "Aziz", percentage: 83 },
   { name: "Jasur", percentage: 88 },
   { name: "Bobur", percentage: 66 },
   { name: "Kamron", percentage: 75 },
 ];
 
 let Otdi = 0;
 let Yiqildi = 0;

 pupils.forEach(pupil => {
   if (pupil.percentage > 70) {
     pupil.isPasse = true;
     Otdi++
   } else {
     pupil.isPassed = false;
     Yiqildi++
   }
 });
 
 console.log(Otdi+` ta imtohondan o'tdi`);
 console.log(Yiqildi+` ta imtohondan o'ta olmadi`);
