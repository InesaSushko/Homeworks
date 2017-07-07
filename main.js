/* 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив 
 в двухмерный
 а если массив двухмерный, тогда в трехмерный массив
 // solution([ [1, 'a'],[2, 'b'],[3, 'c'] ]) => [[1, 2, 3],[a, b, c]]
 // solution([ [1, 3, 5],[2, 4, 6] ]) => [ [1, 2],[3, 4],[5, 6] ]
 
 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
 */

const solution2 = arr => {
  // if( arr.length == 3 ) {
  //   let arr1 = [];
  //   let arr2 = [];
  //   arr.forEach ( elem => {arr1.push(elem[0]); arr2.push(elem[1]) })
  //     return [arr1, arr2]
  // }
  return arr.reduce((prevValue, elem) => {
    return elem.map((element, index) => {
      let prev = prevValue[index];
      return prev ? prev.concat(element) : (prev = [element]);
    });
  }, []);
};
console.log(solution2([[1, 3, 5], [2, 4, 6]]));
console.log(solution2([[1, "a"], [2, "b"], [3, "c"]]));
console.log(solution2([[]]));
/*
 Визуализируйте массив, если в коллекции есть свойство children,
  тогда создайте вложенный лист
 name - свойство h1
 children ul->li
 Используйте innerHTML
 */

const navigation = [
  { name: "Главная" },
  {
    name: "Каталог",
    children: [
      {
        name: "Компьютеры",
        children: [{ name: "Ноутбуки" }, { name: "Планшеты" }]
      }
    ]
  },
  { name: "Профиль" }
];



const visualArray = arr => {
  let x = arr.reduce((prevValue, elem) => {
    var tag = ``;
    for (let key in elem) {
      if (key === `name`) {
        tag += `<h1>${elem[key]}</h1>`;
      }
      if (key === "children") {
        let li = elem[key].reduce( (prev, element) => {
            return prev += `<li>${visualArray([element])}</li>`
        }, `` );
        tag += `<ul>${li}</ul>`;
      }
    }
    return (prevValue += tag);
  }, ``);

  document.body.innerHTML = x;
  return x;
};

visualArray(navigation);

// /*  ПРИЛОЖЕНИЕ  */
// // 1. Форкните репозиторий Саши.
// // Добавьте скрипт который будет рисовать всю страницу с таблицей.
// // https://github.com/aleksandra-maslennikova/my-phone-book
// // удалите на всех страницах bootstrap.js, jquery.js
// // по максимуму

// // 2. Напишите функцию, которая будет получать последнего родителя
// // у элемента, но не body

// // 3. При нажатии на кнопку если были выбраны правильные ответы,
// // отображайте "ПРАВИЛЬНО" или не правильно
// // или отображайте значек X или галочку, возле вопроса


// /*
// Виртуализировать таблицу, сделать рендер всей таблицы через JavaScript.
// Второй макет.
// https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
// Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html
// */




