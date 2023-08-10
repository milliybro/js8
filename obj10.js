`Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.

Input: 
let books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    alreadyRead: false,
  },
  {
    title: "Dunyo ishlari",
    author: "O'tkir Hoshimov",
    alreadyRead: true,
  },
  {
    title: "Vaqtning qadri",
    author: "Abdulfattoh Abu G'udda",
    alreadyRead: false,
  },
]
Output:
1. Akrom Malikning "Halqa" kitobi o'qilmagan;
2. O'tkir Hoshimovning "Dunyo ishlari" kitobi o'qilgan;
3. Abdulfattoh Abu G'uddaning "Vaqtning qadri" kitobi o'qilmagan;
`;
let books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    alreadyRead: false,
  },
  {
    title: "Dunyo ishlari",
    author: "O'tkir Hoshimov",
    alreadyRead: true,
  },
  {
    title: "Vaqtning qadri",
    author: "Abdulfattoh Abu G'udda",
    alreadyRead: false,
  },
];

for (let i = 0; i < books.length; i++) {
  let book = books[i];
  let readStatus = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
  console.log(
    `${book.author}ning "${book.title}" kitobi ${readStatus};`
  );
}
