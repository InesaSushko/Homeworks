"use strict";

/*
 *
 * TASK 1
 *
 * Напишите функцию которая будет вызываться трижды и складывать 
 * все передаваемые ей числа
 *
 *
 * */

function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}

console.log(add(1)(2)(3)); // 6
console.log(add(10)(5)(15)); // 30

/*
 *
 * TASK 2
 *
 * Напишите функцию которая возвращает объект и одно из свойств объекта 
 * это функция
 * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
 * число на 1 больше чем предыдущее
 * ---------------------------------------
 * так же у объекта должен быть метод обнуления счетчика
 * Узнать счетчик напрямую в объекте, нельзя
 *
 * */

function patternModule() {
  let num = 0;
  return {
    method: function() {
      num++;
      console.log(num);
    },
    clear: function() {
      num = 0;
    }
  };
}

let test = patternModule(); // 0
test.method(); //1
test.method(); //2
test.method(); //3
test.clear();

test.method();
test.method();

// @SUPER

/*
 * TASK 1
 *
 * Напишите функцию которая принимает 4 аргумента:
 *
 * -  Объект
 * -  Имя свойства с которым связывается метод
 * -  Сколько раз можно вызвать метод *
 * -  Объявление привязываемого метода( функция )
 *
 *  При вызове метода отобразите сумму передаваемых параметров.
 *  Когда заканчивается счетчик, отображается ошибка
 *
 * */

let jun = {};

function methodCounter(obj, name, num, fn) {
  let x = num;
  obj[name] = function(argument) {
    if (x <= 0) {
      console.log("ERROR ! add more tries");
      return;
    } else {
      x--;
      return fn(argument);
    }
  };
  
  obj.setNumber = function(number) {
    x = number;
  };
}

methodCounter(jun, "logger", 2, function(args) {
  let sum = args.reduce(function(a, b) {
    return a + b;
  }, 0);
  console.log(sum);
});

jun.logger([1, 2, 3, 4]); // 2, 10
jun.logger([5, 5, 5, 5]); // 1, 20
jun.logger([5, 5]); // ERROR ! add more methods
jun.logger([5, 5]); // ERROR ! add more methods
jun.logger([5, 5]); // ERROR ! add more methods
jun.setNumber(5);
jun.logger([5, 5]); //
jun.logger([5, 5]); //
jun.logger([5, 5]); //
jun.logger([5, 5]); //
jun.logger([5, 5]); //

// @SUPER - PUPER,
/*
 * Добавьте функции methodCounter, возможность увеличивать счетчик
 * на заданное число
 * */
