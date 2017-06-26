"use strict";

const someWebpackModule = `module.exports = {
    context: '',
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

/* Распарсите строку и замените TASK - 1
 %%HOMEDIR%% -> './JavaScript-Basic
 %%APP_DIR%% -> 'fixtures/src
 %%APPNAME%% -> 'app.js'
 
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 
 Сделайте несколько экземпляров данной функции
 *
 *
 * */

let parse = (str, oldValue, newValue) => str.split(oldValue).join(newValue);

let parse2 = parse(someWebpackModule, "%%HOMEDIR%%", "./JavaScript-Basic");
let parse3 = parse(parse2, "%%APP_DIR%%", "fixtures/src");
let parse4 = parse(parse3, "%%APPNAME%%", "app.js");
console.log(parse4);

/*
 * TASK - 2
 *
 * Перепишите Homework 12 - TASK 1 используя class
 *
 * */

// Task0
class Http {
  createServer(fn) {
    let ctx = {
      req: {},
      PORT: 111111,
      url: "url",
      res: {},
      status: 222222,
      message: "string",
      header: {
        contenttype: "application/json"
      }
    };
    let next = () => {};
    this.func = () => fn.call(this, ctx, next);
    return this;
  }

  listen(PORT, host) {
    console.log(`Server running on https://${host}:${PORT}`);
    this.func();
  }
}

const server = new Http()
  .createServer(function(ctx, next) {
    console.log(ctx);
    next();
  })
  .listen(3000, "localhost");

//Task 1
class Human {
  constructor(object) {
    this.name = object.name;
    this.age = object.age;
    this.gender = object.gender;
    this.height = object.height;
    this.weight = object.weight;
  }
}

class Worker extends Human {
  constructor(object) {
    super(object);
    this.job = object.job;
    this.salary = object.salary;
  }

  work(years) {
    console.log(
      `${this.name}'s been working at ${this.job} for ${years} years`
    );
  }
}

class Student extends Human {
  constructor(object) {
    super(object);
    this.school = object.school;
    this.scholarship = object.scholarship;
  }

  watchMovies(movie) {
    console.log(`${this.name} likes watching movie "${movie}"`);
  }
}

let worker = new Worker({
  job: "school",
  salary: 15000,
  name: "Ann",
  age: 26,
  gender: "female",
  height: 175,
  weight: 58
});

let student = new Student({
  school: "KNURE",
  scholarship: 1500,
  name: "Alise",
  age: 18,
  gender: "female",
  height: 170,
  weight: 55
});

student.watchMovies("Harry Potter");

/*
 *
 * TASK - 3
 *
 * Измените startTimer таким образом, чтобы числа отобразились последовательно
 * с 10 до 1
 * Изменять функцию serverResponse и шапку цикла - нельзя
 *
 * */

let startTimer = () => {
  let timer = 1000;
  let count = 2;
  let serverResponse = i => {
    return setTimeout(function() {
      console.log("zzzz");
      console.log(i);
    }, (timer = timer / 2));
  };
  for (let i = 10; i >= 1; i--) {
    count += 2;
    timer = 1000 * count;
    serverResponse(i);
  }
};

 startTimer();

// // @ SUPER

// /*
//  * Вы должны создать имитацию медленной базы данных.
//  * TASK - 1 Сделайте Класс Database с методами
//  *
//  *  query
//  *
//  *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
//  *  При поступлении еще 1 запроса(если вызвать метод еще раз),
//  *  таймаут должен стартануть сначала
//  *  и ответ должен прийти снова через 5 секунд
//  *
//  * */

class DataBase {
  constructor() {
  }

  query () {
    clearTimeout(this.timerID)

    var count = 5
    var timerID = setInterval(function() {
      console.log(count--);
      if (count === 0) {
        clearTimeout(timerID)
        setTimeout(function() {
          console.log("The web server is down");
          }, 5000);
      }
    }, 5000);

    this.timerID = timerID;  //для того, чтобы при окончании счетчика clearTimeout(timerID) увидел timerID
                             // и чтобы мы могли в самом начале очистить функцию 
  }
}


// const dataBase = new DataBase();
// console.log(dataBase)
// dataBase.query();
// // 5
// // 4
// // 3
// // 2
// // 1
// // console.log('The web server is down') https://www.youtube.com/watch?v=W8_Kfjo3VjU

// dataBase.query();
// // 5
// // 4
// dataBase.query();
// // 5
// // 4
// // 3
// // 2
// dataBase.query();
// // 5
// // 4
// // 3
// // 2
// // 1
// // console.log('The web server is down')
