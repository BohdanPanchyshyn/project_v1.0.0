
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];


const boys = [];
const girls = [];

function sortPairs() {
   students.forEach((student) => {
      student.slice(-1) === "а" ? girls.push(student) : boys.push(student)
   })

}

sortPairs()

const pairs = boys.map((el, indx) => {
   return [`${boys[indx]} i ${girls[indx]}`]
})

console.log(pairs);

const pairsAndPredmet = themes.map((el, indx) => {
   return [...pairs[indx], el]
})

console.log(pairsAndPredmet);

const arrMarks = students.map((el, indx) => {
   return [`${students[indx]}, ${marks[indx]}`]
})

console.log(arrMarks);

const marksProject = pairsAndPredmet.map(function (el, indx) {
   return [...pairsAndPredmet[indx], Math.floor(Math.random() * (6 - 1) + 1)];
})
console.log(marksProject);

