"use strict"
function getmaxDigit(number) {

   let num = number.toString();
   let arr = num.split("");
   let res = Math.max(...arr);
   return res;
}

console.log(getmaxDigit(942));

function stypin(num, pow) {

   let element = num;

   for (let i = 1; i < pow; i++) {
      element *= num;
   }

   return element;

}

console.log(stypin(2, 4));

function firstLetterUpper(name) {
   name = name[0].toUpperCase() + name.substring(1).toLowerCase();
   return name;
}

console.log(firstLetterUpper("ВЛАД"));

function number4(salary) {
   let res = salary * 0.195;
   let res2 = salary - res;
   console.log(res2);
}

number4(1000);

function getRandomNumber(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNumber(1, 10));

function countLetter(letter, word) {
   word = word.toLowerCase();
   let array = word.split("");
   let counter = 0;
   for (let i = 0; i < array.length; i++) {
      if (letter === array[i]) counter++
   }
   console.log("Count Letter:", counter);
}

countLetter("а", "Кава");

function convertCurrency(params) {
   if (!params) return;
   params = params.toLowerCase();
   const dolarRate = 38.5;
   if (params.includes("uah")) {
      return (params.split("uah")[0] / dolarRate).toFixed(2) + "$";
   } else if (params.includes("$")) {
      return (params.split("$")[0] * dolarRate).toFixed(2) + "UAH";
   } else return ("Incorrect Value!")
}

console.log(convertCurrency("50$"));

function getRandomPassword(params = 8) {
   let counter = [];
   for (let i = 0; i < params; i++) {
      let a = Math.floor(Math.random() * (10 - 1) + 1);
      counter = counter + a;
   }
   console.log(counter);
}

getRandomPassword(4);


function deleteLetters(letter, word) {
   word = word.toLowerCase();
   word = word.replaceAll(letter, "");
   return console.log(word);
}

deleteLetters("a", "blablabla");

function isPalyndrom(word) {
   word = word.toLowerCase();
   const arr1 = word.split("").reverse().join("");
   return console.log(word === arr1);
}

isPalyndrom("мадам");

function deleteDuplicateLetter(words) {
   const arr1 = words.toLowerCase().split("");

   const arr2 = arr1.filter((el, index, array) => array.indexOf(el) !== index);

   const arr3 = arr1.filter(el => !arr2.includes(el)).join("");

   return arr3;
}

console.log(deleteDuplicateLetter("клавіатура"));