`Abdulaziz Programmer nechta to'g'ri va noto'g'ri javob topganligini toping.

const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: 'D', 9: "A", 10: "B" };
const myAnswers = {1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "C"};`

const rightAnswers = {
   1: "B",
   2: "A",
   3: "C",
   4: "D",
   5: "B",
   6: "C",
   7: "A",
   8: "D",
   9: "A",
   10: "B"
 };
 
 const myAnswers = {
   1: "C",
   2: "A",
   3: "D",
   4: "D",
   5: "B",
   6: "C",
   7: "B",
   8: "C",
   9: "A",
   10: "B"
 };
 
 let togri = 0;
 let notogri = 0;
 
 for (let i in rightAnswers) {
   if (rightAnswers[i] === myAnswers[i]) {
     togri++;
   } else {
     notogri++;
   }
 }
 
 console.log("Tog'ri javoblar:", togri);
 console.log("Notog'ri javoblar:", notogri);