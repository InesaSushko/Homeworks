/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"
  solution("wyyga") // false
  solution("qwertyuioplkjhgfdsazxcvbnm") // true
  solution("ejuxggfsts") // false
  solution("qpwoeirutyalskdjfhgmznxbcv") // true
  solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv") // true
  solution("0123456789abcdefghijklmnop") // false
*/

// 1) DRY

// DO not reapeat yourself;

// 2) Вы должны учесть все возможные варианты

const solution = str => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabet.length; i++) {
    regExp = new RegExp(alphabet[i]);
    if (!regExp.test(str)) return false;
  }
  return true;
};

console.log(solution("wyyga")); // false
console.log(solution("qwertyuioplkjhgfdsazxcvbnm")); // true
console.log(solution("ejuxggfsts")); // false
console.log(solution("qpwoeirutyalskdjfhgmznxbcv")); // true
console.log(solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv")); // true
console.log(solution("0123456789abcdefghijklmnop")); // false

/*
 2. Напишите функция которая преобразовывает открывает скобки всех 
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов и объектов
 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 [1, [2, [ {a: "b"} ] ] ] => [1, 2, {a: "b"}]
 */

const openBrackets = arr => {
  return arr.reduce((prevValue, elem) => {
    if (Array.isArray(elem)) {
      return prevValue.concat(openBrackets(elem));
    }
    return prevValue.concat(elem);
  }, []);
};

console.log(
  openBrackets([[1, [2], 35, [25, 55], [3, [4]], 5], 10, [1, 3, 6, [2, 3, 5]]])
);
console.log(openBrackets([25, 10, [10, [15]]]));
console.log(openBrackets([1, [2, [{ a: "b" }]]]));

/*
Виртуализировать таблицу, сделать рендер всей таблицы через JavaScript.
Второй макет.
https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html
*/


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

  newTag(obj) {
    let newT = document.createElement(obj.tag);
    if (obj.tagClass) newT.className = obj.tagClass;
    if (obj.text) newT.textContent = obj.text;
    return newT;
  }

  table() {
    const table = this.newTag({tag:'table', tagClass: 'table table-hover contacts'});
    const thead = this.newTag({tag:"thead"});
    const tr = this.newTag({tag:'tr'});
    const tbody = this.newTag({tag:'tbody'});

    this.tableHeadings.forEach(elem => {
      const th = this.newTag({tag:'th', text:elem});
      tr.appendChild(th);
    });

    this.contacts.forEach(elem => {
      const tr = this.newTag({tag: 'tr'});
      tbody.appendChild(tr);

      for(let key in elem) {
        const td = this.newTag({tag: 'td', text: elem[key]})
        tr.appendChild(td)
      }
    })

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(tr);
    return table
  }

  main() {
    const main = this.newTag({tag:"main"});
    const div = this.newTag({tag:"div", tagClass:'Container'});

    main.appendChild(div);
    div.appendChild(this.table());
    document.body.appendChild(main);
  }

}
let phoneBook = new Html();
phoneBook.main();



