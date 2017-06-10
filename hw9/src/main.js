"use strict";

// Legolas Task !

// TASK 1
// Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev --

/*
 Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 * */

let developer1 = {
  skills: ["JavaScript", "linux", "html", "OOP", "Node.js"],
  requires: ["Node.js", "JavaScript", "OOP"],
  goodDev: goodDev,
  arraySkills: arraySkills
};
let developer2 = {
  experience: [
    { technology: "java" },
    { technology: "c++" },
    { technology: "aws" },
    { technology: "docker" }
  ],
  requires: ["java", "json", "c++", "JavaScript"],
  goodDev: goodDev,
  arraySkills: arraySkills
};

// Функция виведет все навыки в виде массива:
function arraySkills() {
  return this.skills ? this.skills : this.experience.map(elem => elem.technology);
}

//Функция проверяет наличие каждого требуемого навыка в массиве, полученном методом getSkills
function goodDev(dev) {
  this.requires.forEach(elem => {
    if (dev.arraySkills.call(dev).includes(elem)) {
      console.log(`required: ${elem} ... success`);
    } else {
      console.log(`required: ${elem} ... fail`);
    }
  });
}

let developers = [developer1, developer2];
developers.forEach((dev, index) => {
  console.log(`developer ${index + 1}`);
  dev.goodDev(dev);
});

// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---

// developer 2
// required: json ... fail
// required: JavaScript ... success
// required: Java ... success
// required: OOP ... success

/*
 *
 * TASK 2
 *
 * Создайте объект содержащий коллекцию элементов с одинаковыми
 * свойстами и разными значениями!
 * Напишите функцию принимает 1 аргумент сортирует объект по 
 * переданному значению
 * 
 * При вызове функции используйте this
 *
 * */

let myObject = {
  database: [
    { age: 100, name: "b" },
    { age: 15, name: "c" },
    { age: 25, name: "a" }
  ]
};

myObject.myFilter = function(parameter) {
  this.database.sort((a, b) => (a[parameter] > b[parameter] ? 1 : -1));
  return this.database;
};

// // {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}

console.log(myObject.myFilter("age"));
console.log(myObject.myFilter("name"));

// {age:25, name:a}, {age:100, name: b} ...

/*
 * TASK 3
 *
 * Перепишите homework 5 с использованием методов массивов и
 * => arrow functions
 *
 * 
*/

/*

3.1 Переместите 0 в конец массива, остальные числа должны остаться неизменными
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = ["a",0,0,"b",null,"c","d",0,1,false,0,1,0,3,[],0,1,9,0,0,{},0,0,9];
let arr3 = [0, 1, null, 2, false, 1, 0];

// function moveZeroToEnd(arr) {
//     let zeroArr = [];
//     for( let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             zeroArr.push(arr.splice( i, 1 ));
//             i -= 1;
//         }
//     }
//     arr = arr.concat(...zeroArr);
//     return arr;
// };

let moveZeroToEnd = arr => {
  let newArr = [];
  let nonZero = [];
  arr.forEach(elem => (elem === 0 ? newArr.push(elem) : nonZero.push(elem)));
  return nonZero.concat(newArr);
};

console.log(moveZeroToEnd(arr1));
console.log(moveZeroToEnd(arr2));
console.log(moveZeroToEnd(arr3));

/*

 3.2 Верните сумму двух найменьших чисел в массиве

 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10 

 */

let arrOfNumbers1 = [10, 20, 30, 1, 31, 11, 10];
let arrOfNumbers2 = [-1, 0, 25];
let arrOfNumbers3 = [-4, -10, 25, 10];
let arrOfNumbers4 = [0, 200, 10, 25, 15];

// Решение сделано с расчетом, что нужно оставить исходные массивы неизменными

// function minimalNumber(arr) {
//     let min1 = Math.min( ...arr );
//     let index = arr.indexOf( min1 );
//     let arrReserved = arr.slice( 0, index ).concat( arr.slice( index + 1 ));
//     let min2 = Math.min( ...arrReserved );
//     return min1 + min2
// }

let minimalNumber = arr => {
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[0] + sortedArr[1];
};

console.log(minimalNumber(arrOfNumbers1));
console.log(minimalNumber(arrOfNumbers2));
console.log(minimalNumber(arrOfNumbers3));
console.log(minimalNumber(arrOfNumbers4));

/*

 3.3 Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"

 */
// function nameShuffler(names) {
//     let arrName = names.split(' ');
//     arrName.unshift( arrName.pop() );
//     return (arrName.join(' '));
// }
let nameShuffler = names => names.split(" ").reverse().join(" ");

console.log(nameShuffler("john McClane"));
console.log(nameShuffler("Arnold Schwarzenegger"));
console.log(nameShuffler("James Bond"));

/*

 // !

 3.4 Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

 */

let arrOfNames = ["jo", "nelson", "jurie"];
let arrOfNames2 = ["KARLY", "DANIEL", "KELSEY"];

// function capMe(arrNames) {
//     for( let i=0; i < arrNames.length; i++ ) {
//         let eachName = arrNames[i].toLowerCase().split('');
//         eachName[0] = eachName[0].toUpperCase();
//         arrNames[i] = eachName.join('');
//     }
//     return arrNames;
// }

let capMe = arrNames =>
  arrNames.map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase());

console.log(capMe(arrOfNames));
console.log(capMe(arrOfNames2));

//@SUPER

/*

3.5 Найдите число отсутствующее в заданной последовательности 

 example:
 [1,3,5,9] => 7
 [0,8,16,32] => 24
 [4, 6, 8, 10] => 2 // число сначала
 [0,16,24,32] => 8

 */
// function random(input) {
//     for( let i = 0; i < input.length-2; i++) {
//         let diference1 = (input[i+1] - input[i]);
//         let diference2 = (input[i+2] - input[i+1]);
//         if( diference1 != diference2) {
//             return diference1 > diference2 ? (input[i]+diference2) : (input[i+1]+diference1);
//         }
//     }
//     let difer = input[1] - input[0];
//     if( input[0] >= difer ) {
//         return (input[0] - difer);
//     }
// };

let random = input => {
  let num = input.length;
  let diference = input[num - 1] - input[0];
  let step = diference / num;

  if (diference % num) return input[0] - (input[1] - input[0]);

  else {
    let y = 0;
    input.forEach((elem, index, arr) => {
      if (arr[index + 1] !== (elem + step) && index < num - 1)
        return y = elem + step; 
    });
    return y;
  }
};

console.log(random([1, 3, 5, 9]));
console.log(random([0, 8, 16, 32]));
console.log(random([0, 16, 24, 32]));
console.log(random([4, 6, 8, 10]));
console.log(random([1, 7, 10, 13]));

/*


////////@ TODO -- LVL Strong Junior
/*
 *
 * TASK 1
 * Напишите функцию которая принимает 3 аргумента:*
 *
 *  - объект к которому привязывается метод
 *  - Имя свойства с которым связывается метод
 *  - Объявление привязываемого метода( функция )
 *
 *
 *  Если количество аргументов у функции fn совпадает с переданными
 *  параметрами тогда сохраняет метод в замыкании
 *  и привязывает функцию к методу объекта
 *
 *  при вызове одного и того же метода с разным количеством аргументов, 
 *  должно давать различный результат
 *
 * */

 let junior = {};

// fn.length == arguments.length

function addMethod(object, name, fn) {
  object[name] = function(args) {
    return object[arguments.length].call(object)
  };
  object[fn.length] = function(args){
    return fn(args)
  }
}
  

 addMethod(junior, "ok", function() {
   console.log("zero arguments");
 });
addMethod(junior, "ok", function(one) {
  console.log("one arguments");
});
addMethod(junior, "ok", function(one, two) {
  console.log("two arguments");
});
addMethod(junior, "ok", function(one, two, three) {
  console.log("three arguments");
});

junior.ok(); //'zero arguments'
junior.ok(1); //'one arguments'
junior.ok(1, 2); // 'two arguments'
junior.ok(1, 2, 3); // 'three arguments'
