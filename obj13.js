`GPA ni hisoblovchi dastur tuzing. 

GPA = (grade1 * kredit1 + grade2 * kredit2 + ...) / (kredit1 + kredit2 + ...)

const grades = [
  { name: "Fizika", grade: 4, kredit: 6 },
  { name: "Matematika", grade: 5, kredit: 6 },
  { name: "Tarix", grade: 4, kredit: 4 },	
  { name: "Dasturlash", grade: 5, kredit: 8 },
  { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
];
`;

const grades = [
  { name: "Fizika", grade: 4, kredit: 6 },
  { name: "Matematika", grade: 5, kredit: 6 },
  { name: "Tarix", grade: 4, kredit: 4 },
  { name: "Dasturlash", grade: 5, kredit: 8 },
  { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
];

function GPA(grades) {
  let bal = 0;
  let kredit = 0;

  for (let i = 0; i < grades.length; i++) {
    const course = grades[i];
    bal += course.grade * course.kredit;
    kredit += course.kredit;
  }

  const GPA = bal / kredit;
  return GPA;
}

console.log(GPA(grades));
