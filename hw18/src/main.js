/*
Алгоритмы !
TASK 0
Вам дано предложение, верните массив из слов, 
которые длинее чем средняя длина всех слов.
Слова разделены пробелами, если в предложении запятые,они должны быть пропущены
solution(["This is a sample string"]) expected ["This" "sample" "string"]
solution(["Some another sample"]) expected ["another" "sample"]
solution(["Do, do, do, do... do it!"]) expected []
*/

const solution = (arr) => {
	let arrayOfWords = arr[0].replace(/[,.!?]/g, '').split(' ');
	let wholeLength = arrayOfWords.join('').length;
	let average = wholeLength / arrayOfWords.length;
	return arrayOfWords.filter(elem => elem.length > average)

};


console.log(solution(["This is a sample string"]));
console.log(solution(["Some another sample"]));
console.log(solution(["Do, do, do, do... do it!"]))
/*
Подготовка к занятию в пятницу.
Windows:
  Установите все node.js скачать отсюда -> https://nodejs.org/en/
  Скачайте последнюю 8.1.x версию
  Для проверки установки в консоле введите "node -v" (без кавычек) отобразит версию node.js
Linux:
 sudo apt install npm // установить менеджер пакетов npm
 npm i -g n // установить пакет для установки node.js
 sudo n latest // установить последнюю версию node.js
*/


/* TASK 1
Сделайте таблицу 5x5
При клике на элемент, изменяйте цвет у элемента на красный.
Но цвет у элемента должен изменяться пропорционально в другой половине квадрата
Пример 3х3:
[]|[]|[]
[]|[]|[]
[]|[]|[]
кликаем сюда -> []|[]|[]
                []|[]|[]
                []|[]|[x] <- загорается тут
                []|[]|[]
кликаем сюда -> []|[]|[x] <- загорается тут
                []|[]|[x]
*/

const tbody = document.querySelector('tbody');
const td = [...document.querySelectorAll('td')];

tbody.addEventListener('click', (event) => {
  let oppositeId = td.length - 1 - td.indexOf(event.target);
  td[oppositeId].style.backgroundColor = 'red'
});


// @SUPER-FrontEnd
/*
У вас есть 3 блока смотри events.html
при mousedown и движении мышки нужно сделать
ресайз одного блока.
Подсказка - событие необходимо повесить на доп. элемент .resize
*/
