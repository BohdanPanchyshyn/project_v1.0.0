let N;
let M;
let sum = 0;

while (!Number.isInteger(N)) {
   N = +prompt("Enter Number N:");
}
while (!Number.isInteger(M)) {
   M = +prompt("Enter Number M:");
}

const result = confirm("Пропускати парні числа?");

for (let i = N; i <= M; i++) {
   if (!result) {
      sum = sum + i;
   } else if (i % 2 == 1)
      sum = sum + i;
}

console.log(sum);