/*
TASK 0. Найдите числа которые повторяются нечетное количество раз в массиве
  solution([12, 23, 34, 12, 12, 23, 12, 45]) -> [34 45]
  solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]) -> [4 100 5000]
  solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]) -> [6 5 9 21]
  solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]) -> [8 16 23 42]
  solution([2, 2, 44, 44]) => []
*/

let solution = arr => {
  let obj = {};
  let result = [];
  arr.forEach(elem => {
    if (obj[elem]) {
      obj[elem] += 1;
    } else {
      obj[elem] = 1;
    }
  });
  for (let key in obj) {
    if (obj[key] % 2) {
      result.push(key);
    }
  }
  return result;
};

console.log(solution([12, 23, 34, 12, 12, 23, 12, 45]));
console.log(solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100]));
console.log(solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]));
console.log(solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]));
console.log(solution([2, 2, 44, 44]));

/* TASK - 1
Распарсите строку и замените 
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'
 
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 
 Сделайте несколько экземпляров данной функции
 *
 *
 * */

const someWebpackModule = `module.exports = {
    context: %%HOMEDIR%%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

function myRegExp(str, homeDir, appDir, appName) {
  var newStr = str;
  let before = ["%%HOMEDIR%%", "%%APP_DIR%%", "%%APPNAME%%"];
  let after = [...arguments];
  for (let i = 1; i <= 3; i++) {
    let regExp = new RegExp(before[i - 1], "g");
    newStr = newStr.replace(regExp, after[i]);
  }
  return newStr;
}

console.log(
  myRegExp(someWebpackModule, "./JavaScript-Basic", "fixtures/src", "app.js")
);

/*
 TASK - 2
 Сделайте разметку как скриншоте используя HTML
 вам необходимо использовать тэги(!)
*/
    // <h1>Programming Test</h1>
    // <form>
    //     <ol>
    //         <li>
    //             <p>What is the best way to declare a veriable inside a cycle?</p>
    //             <div><input type="checkbox"><span>answer1</span></div>
    //             <div><input type="checkbox"><span>answer2</span></div>
    //             <div><input type="checkbox"><span>answer3</span></div>
    //         </li>
    //         <li>
    //             <p>Question №2</p>
    //             <div><input type="checkbox"><span>answer1</span></div>
    //             <div><input type="checkbox"><span>answer2</span></div>
    //             <div><input type="checkbox"><span>answer3</span></div>
    //         </li>
    //         <li>
    //             <p>Question №3</p>
    //             <div><input type="checkbox"><span>answer1</span></div>
    //             <div><input type="checkbox"><span>answer2</span></div>
    //             <div><input type="checkbox"><span>answer3</span></div>
    //         </li>
    //     </ol>
    //     <button>Check my knowledge</button>
    // </form>

/* 
TASK 3
 JavaScript =>
  Создать объект с методами, которые будут динамически генерировать DOM
  Это будет тест, который мы будем разрабатывать в следующих заданиях.
  Сейчас вам нужно только динамически создать html,
  методы должны храниться в одном объекте.
  Изначально на странице должен быть только <body>, 
  вызывая методы объекта нужно создать dom-элементы
*/
class Dom {
  constructor() {
    this.name = "Programming Test";
    this.questions = [
      "Question №1",
      "Question №2",
      "Question №3"
    ];
    this.answers = [
      ["answer1", "answer2", "answer3"],
      ["answer1", "answer2", "answer3"],
      ["answer1", "answer2", "answer3"]
    ];
    this.buttonText = "Check my knowledge";
  }

  h1() {
    const h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.textContent = this.name;
  }

  form(quest, answ) {      //можно задать кол-во вопростов и ответов
    const form = document.createElement("form");
    const ol = document.createElement("ol");
    form.appendChild(ol);

    for (let i = 1; i <= quest; i++) {
      let li = document.createElement("li");
      let p = document.createElement("p");
      p.textContent = this.questions[i-1];
      ol.appendChild(li);
      li.appendChild(p);

      for (let b = 1; b <= answ; b++) {
        let div = document.createElement("div");
        let input = document.createElement("input");
        let span = document.createElement('span');
        input.setAttribute("type", "checkbox");
        span.textContent = this.answers[i - 1][b - 1];
        li.appendChild(div);
        div.appendChild(input);
        div.appendChild(span)
      }
    }
    document.body.appendChild(form);
  }

  button() {
    const button = document.createElement("button");
    button.textContent = this.buttonText;
    document.body.appendChild(button);
  }

  render(quest, answ) {
    this.h1();
    this.form(quest, answ);
    this.button();
  }
}

let app = new Dom();

app.render(3, 3);  //делаем три вопроса по 3 ответа в каждом
