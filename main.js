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

class Html {
  constructor() {
    this.tableHeadings = ["Name", "Last Name", "Email"];
    this.contacts = [
      { name: "Inesa", lastName: "Sushko", email: "inesatat@gmail.com" },
      { name: "Alla", lastName: "Tsyupak", email: "alla@gmail.com" },
      { name: "Roman", lastName: "Pelyh", email: "roman@gmail.com" },
      { name: "Nikolay", lastName: "Sushko", email: "nikolay@gmail.com" },
      { name: "Kseniya", lastName: "Gurbanova", email: "kseniya@gmail.com" },
      { name: "Danil", lastName: "Zmuncila", email: "danil@gmail.com" },
      { name: "Tatyana", lastName: "Sushko", email: "tatyana@gmail.com" },
      { name: "Alina", lastName: "Pelyh", email: "alina@gmail.com" },
      { name: "Vika", lastName: "Loskot", email: "vika@gmail.com" },
      { name: "Grygoriy", lastName: "Kirichenko", email: "grygoriy@gmail.com" }
    ];
  }

  // newTag(obj) {
  //   let newT = document.createElement(obj.tag);
  //   if (obj.tagClass) newT.className = obj.tagClass;
  //   if (obj.text) newT.textContent = obj.text;
  //   return newT;
  // }

  header() {
    const head = `<header class='header'><div class='container top-radius'><h2>Contacts</h2></div></header>`;
    return head
  }

  form () {
    const form = `<form class='form-inline search-form'>`;
    const div = `<div class='form-group>`;
    const label = `<label class='sr-only' for= 'search'>Search</label>`;
    const input = `<input type="text" class="form-control" id= "search" placeholder="Search">`;
    return form+div+label+input+`</div></form>`
  }


  table() {
    const table = this.newTag({
      tag: "table",
      tagClass: "table table-hover contacts"
    });
    const thead = this.newTag({ tag: "thead" });
    const tr = this.newTag({ tag: "tr" });
    const tbody = this.newTag({ tag: "tbody" });

    this.tableHeadings.forEach(elem => {
      const th = this.newTag({ tag: "th", text: elem });
      tr.appendChild(th);
    });

    this.contacts.forEach(elem => {
      const tr = this.newTag({ tag: "tr" });
      tbody.appendChild(tr);

      for (let key in elem) {
        const td = this.newTag({ tag: "td", text: elem[key] });
        tr.appendChild(td);
      }
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(tr);
    return table;
  }

  main() {
    const main = this.newTag({ tag: "main" });
    const div = this.newTag({ tag: "div", tagClass: "Container" });

    main.appendChild(div);
    div.appendChild(this.table());
    document.body.appendChild(main);
  }
}
let phoneBook = new Html();
phoneBook.main();


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Contacts</title>
	<link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet">
	<link href="css/bootstrap.css" rel="stylesheet">
	<link rel="stylesheet" href="css/main.css">
</head>

<body>
	<header class="header">
		<div class="container top-radius">
			<h2>Contacts</h2>
		</div>
	</header>

	<main>
		<div class="container">
			<form class="form-inline search-form">
				<div class="form-group">
					<label class="sr-only" for="search">Search</label>
					<input type="text" class="form-control" id= "search" placeholder="Search">
				</div>
			</form>
			<table class="table table-hover contacts">
				<thead>
					<tr>
						<th>Name</th>
						<th>Last name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Иван</td>
						<td>Петров</td>
						<td>IvanPetrov@ec.ua</td>
					</tr>
					<tr>
						<td>Сергей</td>
						<td>Сергеев</td>
						<td>SergeiSergeev@ec.ua</td>
					</tr>
					<tr>
						<td>Иван</td>
						<td>Иванов</td>
						<td >IvanIvanov@ec.ua</td>
					</tr>
					<tr>
						<td>Александр</td>
						<td>Александров</td>
						<td >AlexAlex@ec.ua</td>
					</tr>
					<tr>
						<td>Алекс</td>
						<td>Смирнов</td>
						<td>AlexSmirnov@ec.ua</td>
					</tr>
					<tr>
						<td>Сергей</td>
						<td>Волков</td>
						<td>VolkovSergey@ec.ua</td>
					</tr>
					<tr>
						<td>Мария</td>
						<td>Шарапова</td>
						<td>MariyaSharapova@ec.ua</td>
					</tr>
					<tr>
						<td>Александр</td>
						<td>Винник</td>
						<td>AlexVinnik@ec.ua</td>
					</tr>
					<tr>
						<td>Дарий</td>
						<td>Смирнов</td>
						<td>DariySmirnov@ec.ua</td>
					</tr>
					<tr>
						<td>Елена</td>
						<td>Лещенко</td>
						<td>ElenaLeshenko@ec.ua</td>
					</tr>
					<tr>
						<td>Ольга</td>
						<td>Новикова</td>
						<td>OlgaNovikova@ec.ua</td>
					</tr>
					<tr>
						<td>Наталья</td>
						<td>Шемякина</td>
						<td>ShemyakinaN@ec.ua</td>
					</tr>
					<tr>
						<td>Анна</td>
						<td>Донцова</td>
						<td>AnnaDontsova@ec.ua</td>
					</tr>
					<tr>
						<td>Влад</td>
						<td>Яма</td>
						<td>VladYama@ec.ua</td>
					</tr>
					<tr>
						<td>Кира</td>
						<td>Воробьева</td>
						<td>Kira1990@ec.ua</td>
					</tr>
					<tr>
						<td>Виктор</td>
						<td>Кривенко</td>
						<td>ViktorKriv@ec.ua</td>
					</tr>
				</tbody>
			</table>
		</div>
	</main>
	<footer class="footer">
		<div class="container bottom-radius">
			<nav class="main-nav">
				<a href="index.html" class="tab active">
					<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
					<span class = "tab-text">Contacts</span>
				</a>
				<a href="keypad.html" class="tab">
					<span class="glyphicon glyphicon-th" aria-hidden="true"></span>
					<span class = "tab-text">Keypad</span>
				</a>
				<a href="edit-contact.html" class="tab">
					<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
					<span class = "tab-text">Edit contact</span>
				</a>
				<a href="user.html" class="tab">
					<span class="glyphicon glyphicon-user" aria-hidden="true"></span>
					<span class = "tab-text">User</span>
				</a>
				<a href="add-user.html" class="tab">
					<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
					<span class = "tab-text">Add user</span>
				</a>
			</nav>
		</div>
	</footer>




	<script src="js/main.js"></script>
</body>
</html>