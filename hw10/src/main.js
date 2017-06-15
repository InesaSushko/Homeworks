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
//псевдокод к ф-ции add
// 1. создаем переменную newTag - строку с добавляемым тэгом
// 2. Проверяем, есть ли в объекте уже свойство html
// 3. Если свойства нет, создаем и присваиваем значение - строку с тэгом, добавляем в пустой масив 
//    arrOfTags первый тэг (полностью)
// 4. Если свойство есть (уже не первый тэг), создаем переменную lastTag - показывает последный 
//    добавленный тэг
// 5. Создаем переменную middle - показывает место в строке, куда будем вставлять тэг
// 6. Делаем проверку, есть ли второй передаваемый параметр с текстом внутри тэга. 
//    Если есть, переприсваиваем newTag уже с этим текстом.
// 7. Добавляем к свойству объекта 'html' передаваемый тэг
// 8. Возвращаем объект

var ezjQuery = {

  arrOfTags : [],

  add : function(tagName, insideInfo) {
    let newTag = `<${tagName}></${tagName}>`;

    if(this.html) {
      let lastTag = this.arrOfTags[this.arrOfTags.length - 1];
      let middle = this.html.indexOf(lastTag) + (lastTag.lastIndexOf('</'));
      if (insideInfo) {
        newTag = `<${tagName}>${insideInfo}</${tagName}>`
      }
      this.html = this.html.slice(0, middle) + newTag + this.html.slice( middle );
    } 

    else {
     this.html = newTag;
    };

    this.arrOfTags.push(newTag);
    return this;
  },

  render : function() {
    let tags = this.html;
    this.html = '';
    return( tags )
  },

};

  // ezjQuery.add('body') //<body></body>
  // ezjQuery.add('div') //<body></body><div></div>
  // ezjQuery.add('h1'); //<body></body><div></div><h1></h1>

  // reduce : function() {
  //   let lastTag = this.arrOfTags[this.arrOfTags.length-1];
  //   let lastTagIndex = this.html.indexOf(lastTag);
  //   this.html = this.html.slice(0, lastTagIndex) + this.html.slice( lastTagIndex + lastTag.length)
  //   return this
  // }
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
   .add('div', 'jj/<>')
   .add('p')
   .render()
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
