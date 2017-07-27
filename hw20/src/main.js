/* Алгоритмы
TASK 0
Проверьте 2 строки и определите изоморфные ли они.
Две строки являются изоморфными если все их символы 
s, могут быть заменены t.
Все символы одной строки могут быть заменены такими же символами другой строки, независимо от 
порядка символов.
Given two strings, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character but a character may map to itself."
arguments ["egg", "add"] => expected true
arguments ["foo", "bar"] => expected false
arguments ["paper", "title"] => expected true
arguments ["ca", "ab"] => expected true
arguments ["aa", "bb"] => expected true
arguments ["aedor", "eiruw"] => expected true
*/
const isomorphic = (str1, str2) => {
  let str1Nums = changeStrToNum(str1);
  let str2Nums = changeStrToNum(str2);
  return str1Nums == str2Nums;
};

const changeStrToNum = str => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    let e = str[i];
    if (typeof e != "number") {
      let re = new RegExp(e, "g");
      str = str.replace(re, ++counter);
    }
  }
  return str; //возвращает строку в виде цифр ('egg' => '122')
};

console.log(isomorphic("egg", "add"));
console.log(isomorphic("foo", "bar"));
console.log(isomorphic("paper", "title"));
console.log(isomorphic("ca", "ab"));
console.log(isomorphic("aa", "bb"));
console.log(isomorphic("aedor", "eiruw"));

/*
Добавить возможность из формы, ДОБАВЛЯТЬ Пользователя на сервер
*/
const url = `https://easycode-js.herokuapp.com/`;
const myForm = document.forms[0];

myForm.addEventListener("submit", e => {
  e.preventDefault();
  let { name, email } = myForm.elements;
  let xhr = new XMLHttpRequest();

  if (!name.value) {
    return alert("ADD NAME");
  }

  if (!email.value) {
    return alert("ADD EMAIL");
  }

  let newUser = JSON.stringify({
    fullName: name.value,
    email: email.value,
    phone: "0502285664"
  });

  xhr.open("POST", url + "insu/users", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(newUser);
});
/*
TASK 1
Изучите API http://easycode-js.herokuapp.com/
Зарегистрируйте 10 пользователей с разными именами и email 
И ТЕЛЕФОНАМИ! адресами.
fullName - должно содержать имя и фамилию 'John Smith'
Используйте XMLHttpRequest => POST
*/
const button = document.querySelector(".users");

const users = [
  {
    fullName: "Inesa Sushko",
    phone: "0502285664",
    email: "inesatat@gmail.com"
  },
  { fullName: "Alla Tsyupak", phone: "0665788748", email: "alla@gmail.com" },
  { fullName: "Roman Pelyh", phone: "0675698547", email: "roman@gmail.com" },
  {
    fullName: "Nikolay Sushko",
    phone: "0503256548",
    email: "nikolay@gmail.com"
  },
  {
    fullName: "Kseniya Gurbanova",
    phone: "0662369966",
    email: "kseniya@gmail.com"
  },
  { fullName: "Danil Zmuncila", phone: "0954587899", email: "danil@gmail.com" },
  {
    fullName: "Tatyana Sushko",
    phone: "0951456532",
    email: "tatyana@gmail.com"
  },
  { fullName: "Alina Pelyh", phone: "0985681120", email: "alina@gmail.com" },
  { fullName: "Vika Loskot", phone: "0508574460", email: "vika@gmail.com" },
  {
    fullName: "Grygoriy Kirichenko",
    phone: "0663521910",
    email: "grygoriy@gmail.com"
  }
];

button.addEventListener("click", e => {
  users.forEach(e => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url + "inesasushko/users", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(e));
  });
});
//
//
/*
TASK 2
phone-app. Первая страница.
Загружайте пользователей с сервера при загрузке странице.
*/

/*
// contentEditable
Сделайте, чтобы на странице add-user.html пользователь
добавлялся на сервер.
*/
// Для PhoneBook сделайте отдельный репозиторий

// Рекомендую - вам необходимо сделать 1 метод(или отдельный класс) который будет отправлять запросы
// доступ к этому методу должен быть в каждом вашем классе
// url - должен быть константа, т.к url у вас изменяться не будет.
