/* 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив 
 в двухмерный
 а если массив двухмерный, тогда в трехмерный массив
 // solution([ [1, 'a'],[2, 'b'],[3, 'c'] ]) => [[1, 2, 3],[a, b, c]]
 // solution([ [1, 3, 5],[2, 4, 6] ]) => [ [1, 2],[3, 4],[5, 6] ]
 
 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
 */

const solution2 = arr => {
  return arr.reduce((prevValue, elem) => {
    return elem.map((element, index) => {
      let placeElem = prevValue[index];
      return placeElem ? placeElem.concat(element) : (placeElem = [element]);
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
  let allTags = arr.reduce((tagsStr, element) => {
    let tag = ``;
    for (let key in element) {
      if (key === `name`) {
        tag += `<h1>${element[key]}</h1>`;
      }
      if (key === "children") {
        let li = element.children.map(elem => `<li>${visualArray([elem])}</li>`).join('');
        tag += `<ul>${li}</ul>`;
      }
    }
    return (tagsStr += tag);
  }, ``);

  document.body.innerHTML = allTags;
  return allTags;
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

const findParent = (elem) => {
	let parent = elem.parentElement;
	if( !parent || parent.tagName == 'BODY' ) {
		return elem;
	} else {
		return findParent(parent);
	}
}; 
const li = document.querySelector('li');
console.log(findParent(li))  // показывает ul с предыд.задачи

// // 3. При нажатии на кнопку если были выбраны правильные ответы,
// // отображайте "ПРАВИЛЬНО" или не правильно
// // или отображайте значек X или галочку, возле вопроса



