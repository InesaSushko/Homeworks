"use strict";

/*
 *
 * Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 */
 /*
 *
 * listen(PORT, host) - в консоле должна отобразится надпись
 * "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */
function Http() {};
//сохраняем передаваемую в createServer функцию в класс под именем func
Http.prototype.createServer = function(fn) {
  let ctx = {
    req: {},
    PORT: 111111,
    url: 'url',
    res: {},
    status: 222222,
    message: 'string',
    header: {
      contenttype: 'application/json'
    },
  };
  let next = () => {};
  this.func = () => fn.call(this, ctx, next) ;
  return this
};

Http.prototype.listen = function(PORT, host) {
  console.log(`Server running on https://${host}:${PORT}`)
  this.func()
}



const server = new Http().createServer(function(ctx, next) {
  console.log(ctx);
  next()
}).listen(3000, 'localhost');

// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплатой, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human

function Human (name, age, gender, height, weight){
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.height = height;
  this.weight = weight;
};


function Worker(job, salary, name, age, gender, height, weight) {
  Human.call(this, name, age, gender, height, weight);
  this.job = job;
  this.salary = salary;
};


Worker.prototype = Object.create(Human.prototype);


Worker.prototype.work = function(years){
  console.log(`${this.name}'s been working at ${this.job} for ${years} years`)
}


function Student(school, scholarship, name, age, gender, height, weight) {
  Human.call(this, name, age, gender, height, weight);  
  this.school = school;
  this.scholarship = scholarship;
};


Student.prototype = Object.create(Human.prototype);


Student.prototype.watchMovies = function(movie){
  console.log(`${this.name} likes watching movie "${movie}"`)
}


let worker1 = new Worker('school', 15000, 'Ann', 26, 'female', 175, 58);
let worker2 = new Worker('hospital', 25000, 'Dave', 35, 'male', 180, 80);
let student1 = new Student('KNURE', 1500, 'Alise', 18, 'female', 170, 55);
let student2 = new Student('KPI', 2500, 'Josh', 20, 'male', 182, 75);




// @SUPER

// /*
//  * TASK 0
//  * Создайте функцию обертку над другой функцией
//  * Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
//  * которую мы обернули
//  * /

function someFunc(greeting) {
  console.log(`${greeting} user!`)
};

function wrapper(f) {
  return function (greeting){ 
    console.log(greeting);
    f.call(this, greeting)
  };
};


someFunc = wrapper(someFunc);

someFunc('Hello');
someFunc('Goodbye')
