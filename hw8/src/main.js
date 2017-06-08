"use strict";

/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы, и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 * 
 * */

function solution1(word) {
  var str = "";
  return function(word) {
    str += " " + word;
    console.log(str);
  };
}

let stringBuffer = solution1();

stringBuffer("Замыкания"); // Замыкания
stringBuffer("Использовать нужно"); // Замыкания Использовать нужно
stringBuffer("Привет"); // Замыкания Использовать нужно Привет
// вызываем много раз
stringBuffer("Привет"); // Замыкания Использовать нужно Привет

/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку
 * из скобочек и посчитайте, * что все скобочки закрываются корректно
 *
 * */

function validBraces(str) {
  var obj = {
    "{": "}",
    "(": ")",
    "[": "]"
  };
  var arr = [];
  var pop = "";

  for (let i = 0; i < str.length; i++) {
    let elem = str[i];
    if (obj[elem]) {     //если открывающая скобка
      arr.push(elem);
    } else {             //если закрывающая скобка
      let newPop = arr.pop();
      if (obj[newPop] == elem) {
        pop = pop + newPop + obj[newPop];
      }
    }
  }

  if (pop.length === str.length) {
    return true;
  }
  return false;
}

console.log(validBraces("(){}[]")); //=> returns true
console.log(validBraces("(}")); //=> returns false
console.log(validBraces("[(])")); // => returns false
console.log(validBraces("([{}])")); //=> returns true

/*
 *
 * TASK 3
 * Напишите функцию которая будет принимать 1 аргумента - функцию
 *
 * Отрефакторите код таким образом, чтобы сообщение 'THE LAST LAST comment',
 * отобразилось в консоле последним
 *
 * */

function makeCallback(fn) {
  for (let i = 1; i <= 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
    var timer = (i + 1) * 1000;
  }
  setTimeout(function() {
    fn();
  }, timer);
}

makeCallback(function() {
  console.log("THE LAST LAST comment");
});

// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму 
 * всех натуральных чисел
 * sum(5) //5+4+3+2+1
 * 
 * Вычисления должны кешироваться, если в функцию попадает закешированное 
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * */
//1. Создать пустой объект - кэш
//1.2 Возвращаем внутри функции функцию
//2. Проверить число, есть ли оно в кэше, если да - просто выводим значение свойства объекта
//3. Если нет - запускаем цикл, начиная от num до нуля, суммируем все числа, 
//4. Добавляем значение в кэш, выводим значение
//5. Присваиваем в переменную данную функцию

function sumF(num) {
  var cache = {};
  return function(num) {
    if (cache[num]) {
      console.log(`${cache[num]} Значение взято из кэша`);
    } else {
      var x = 0;
      for (var i = num; i > 0; i--) {
        x += i;
      }
      cache[num] = x;
      console.log(`${x} Значение кешировано`);
    }
  };
};

let sum = sumF()
let sum3 = sumF()

sum(5); // 15 Значение кешировано
sum(5); // 15 Значение взято из кэша

sum(6); // 21 Кешировано
sum(6); // 21 Значение взято из кэша

sum3(5); //15 Значение кешировано