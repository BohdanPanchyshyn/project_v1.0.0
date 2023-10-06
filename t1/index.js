const a = 15.678
const b = 123.965
const c = 90.2345


const maxNumber = Math.max(a, b, c);
const minNumber = Math.min(a, b, c);

console.log(maxNumber);
console.log(minNumber);

const sumNumber = a + b + c;
console.log(sumNumber);


const mathf = Math.floor(sumNumber);
const mathr = Math.round(sumNumber * 0.01) * 100;
console.log(mathf);
console.log(mathr);

const pay = 500 - sumNumber;

console.log(pay);

const middle = (sumNumber / 3).toFixed(2);

console.log(middle);

const discount = (Math.random() * 1).toFixed(1);
console.log(discount);

const klientDiscount = mathf - (mathf * discount);

console.log(klientDiscount.toFixed(2));

