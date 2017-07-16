// /*
//  TASK 0
//  Отобразите всех лидеров массива.
//  *
//  * Элемент лидер если он больше чем все последующие элементы
//  * после него ( элементы справа ).
//  * Последний элемент всегда лидер. Например в массиве [16,17,4,3,5,2]
//  * лидеры 17, 5 и 2.
//  * */

// // solution([16, 17, 4, 3, 5, 2]) === [17, 5, 2]
// // solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8]); // [67, 45, 35, 8]
// // solution([12, 10, 12, 8, 7, 6]); // [12, 8, 7, 6]
// // solution([1, 2, 3, 4, 5, 4]); // [5, 4]

const solution = arr => {
  return arr.filter((elem, index) => {
    let sortedArr = arr.slice(index)
    if (elem === Math.max(...sortedArr)) {
      return elem;
    }
  }).filter((element, index, arr) => arr.indexOf(element) === index);
};

console.log(solution([16, 17, 4, 3, 5, 2]));
console.log(solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8]));
console.log(solution([12, 10, 12, 8, 7, 6]));
console.log(solution([1, 2, 3, 4, 5, 4]));

// /* TASK 1
//  * Сделайте карусель.
//  * При клике по кнопке "<=" показывается первое изображение по "=>" последнее.
//  *
// * Сделайте слайдер - бесконечным, после третьего изображения снова первое.
// * Добавьте внизу цифры с текущим активным изображением.
//  */

const prev = document.querySelector(".left");
const next = document.querySelector(".right");

// // Карусель предыдущее изображение
prev.onclick = () => {
  const img = [...document.querySelectorAll(".carousel>li")];
  let idActive, idNext;
  img.forEach((elem, index) => {
    if (elem.style.display === "block") idActive = index;
  });
  if (idActive > 0) idNext = idActive - 1;
  else idNext = img.length - 1;
  return changeStyle(idActive, idNext, img);
};

// // Карусель следующее изображение
next.onclick = () => {
  const img = [...document.querySelectorAll(".carousel>li")];
  let idActive, idNext;
  img.forEach((elem, index) => {
    if (elem.style.display === "block") idActive = index;
  });
  if (idActive <= img.length - 2) idNext = idActive + 1;
  else idNext = 0;
  return changeStyle(idActive, idNext, img);
};

const changeStyle = (idActive, idNext, img) => {
  const nums = [...document.querySelectorAll(".pagination>li")];
  const numStyle = { fontSize: "2em", color: "red" };
  img[idActive].style.display = "none";
  img[idNext].style.display = "block";
  nums[idActive].style = "";
  for (let key in numStyle) {
    nums[idNext].style[key] = numStyle[key];
  }
};

/*
 *
 *
 * 
 * 
 * @SUPER -> @front-end
 * Уберите в стилях li - position:absolute.
 * изменяйте свойство transform:translate3d у .carousel, добавьте transition
 * и сделайте чтобы картинки передвигались влево и вправо
 *
 * @PUPER -> переход к первой картинка
 *
 * */

/*
* TASK 2
* Сделайте класс, который будет иметь метод topStyle
* метод topStyle принимает объект с CSS стилями и добавляет в <head>
*   новый элемент с данными стилями
*
*
* */
class StylesCss {
  constructor() { }
  topStyle(newClass, newStyles) {
    let styleTag = [...document.head.getElementsByTagName("style")];
    if (styleTag.length == 0) {
      let tagStyle = document.createElement("style");
      document.head.appendChild(tagStyle);
      styleTag.push(tagStyle);
    }
    let strStyles = `.${newClass}{`;
    for (let property in newStyles) {
      strStyles += `${property}:${newStyles[property]};`;
    }
    return (styleTag[0].innerHTML += strStyles + `}`);
  }
}

let fetch = new StylesCss();

fetch.topStyle("fetch", { 'background-color': "blue" });

/* @SUPER
 *
 * Напишите функцию которая будет преобразовывать CSS-свойство в 
 * ликвидное JS свойство
 *
 * background-color -> backgroundColor
 * margin-left -> marginLeft
 * flex-basis -> flexBasis
 *
 * ...etc
 *
 * сделать через regExp
 *
 * */
//через RegExp не получилось

const changeToCamel = (property) => {
  let arr = property.split("-");
  arr.forEach((elem, index) => {
    if (index != 0) {
      arr[index] = elem.replace(elem[0], elem[0].toUpperCase());
    }
  });

  return arr.join("");
}


//Ниже вариант не работает
// const changeToCamel = property => {
//   var i = 0;
//   const toUpperC = (letter) => {
//     i++;
//     return (letter.slice(1).toUpperCase())
//   };

//   let regExp = (/-[a-z]/gi);
//   let camelStyle = property.replace(regExp, toUpperC(property.match(regExp)[i]));
//   return camelStyle
// }

console.log(changeToCamel("list-style-type"));
console.log(changeToCamel("background-color"));

/* 
Нужно визуализировать keypad.html -> keypad.js
Нужно визуализировать index.html -> app.js
Структура виртуализации:
 
 - header - один блок 
 - main - второй блок
 >------ Это 2 разных класса
 У каждого из классов, рендер на странице запускается при помощи метода .render
innerHTML по максимуму
https://aleksandra-maslennikova.github.io/telephone-book/keypad.html
Сделайте чтобы при нажатии на кнопку цифра отобразилась в <span class="numbers">
*/

/*
https://aleksandra-maslennikova.github.io/telephone-book/index.html
По клику по заголовку таблицы, таблица сортировалась по соответствующему свойству
*/



