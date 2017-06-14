"use strict";

/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 * 
 * 
 *Мой первый ответ был неверным, я считала, что вернется число 5. Только та переменная у, которая объявлена вне функции.
 Но ошибку поняла и исправила, функция z ничего не возвращает (undefined), потому что ф-ция t просто вызывалась, 
 но не возвращалась.

 * */

let y = 5;
let x = () => y;

let z = t => {
  let y = 54;
  return t();
};
console.log(y);

console.log(z(x));

/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать передаваемую строку в html тэг
 *
 *
 * */

 let dollarSign = tagName => `<${tagName}></${tagName}>`

let createBODY = dollarSign('body');
let createDIV = dollarSign('div');
console.log(createBODY); // <body></body>
console.log(createDIV); // <div></div>

/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
  // obj.method().method().method()
  ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */

var ezjQuery = {

};

ezjQuery.add = function(tagName, insideInfo) {
  var newTag = `<${tagName}></${tagName}>`;

  if(ezjQuery.html) {
    let middle = ezjQuery.html.indexOf('/')-1
    if (insideInfo) {
      newTag = `<${tagName}>${insideInfo}</${tagName}>`
    }
    ezjQuery.html = ezjQuery.html.slice(0, middle) + newTag + ezjQuery.html.slice( middle );
  } 

  else {
    ezjQuery.html = newTag;
  };

  return ezjQuery;
};

ezjQuery.render = function() {
  let tags = this.html;
  this.html = '';
  return( tags )
};

  // ezjQuery.add('body') //<body></body>
  // ezjQuery.add('div') //<body></body><div></div>
  // ezjQuery.add('h1'); //<body></body><div></div><h1></h1>

/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий тэг помещался внутри
 * предыдущего !
 --- 
 * И добавьте объекту ezjQuery метод render, который будет возвращать 
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать информацию внутри тэга
 *
 *
 */

// example
 var helloList = ezjQuery
   .add('body') // <body></body>
   .add('div') // <body><div></div></body>
   .add('ul') // <body><div><ul></ul></div></body>
   .add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
   .render();
 console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
// //  Обратите внимание, что после вызова render создание строки началось сначала

  var bodyDiv = ezjQuery
    .add('body') //<body></body>
    .add('div', 'hello once more') //<body><div></div></body>
    .render();
  console.log(bodyDiv); //<body><div></div></body>

// Для выполнивших все задания
// сделайте  document.write(helloList)  увидите результат :)


// @SUPER
/*
 * Переименуйте объект ezjQuery в $.
 * Создание перевого метода должено быть без метода
 *
 * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
 *
 * */


//  console.log ($('body').add('li', 'hi').add('p').render())
//  // <body><li>hi</li></body>


function $(body) {
  this.html = `<${body}></${body}>`;
  
  this.add = function(tagName, insideInfo) {
    let newTag = `<${tagName}></${tagName}>`;
    let middle = this.html.indexOf('/')-1;
    
    if (insideInfo) {
      newTag = `<${tagName}>${insideInfo}</${tagName}>`
    }
    this.html = this.html.slice(0, middle) + newTag + this.html.slice( middle ); 
    return this
  };

  this.render = function() {
    let tags = this.html;
    this.html = '';
    return( tags )
  };
};

let newObj = new $('body').add('li', 'hi').add('p').render()
 console.log (newObj)
 // <body><li>hi</li></body>
