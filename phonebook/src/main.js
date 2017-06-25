// Преобразование телефонного номера из формата 0993378130 в (099) 33-78-130
// Проверка, что телефонный номер содержит только числа
// Добавление пользователей в объект
// Удаление пользователя по имени, фамилии
// Поиск пользователей по имени - отображает всех пользователей с одинаковым именем
// Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this )
// Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
// Фильтр по указанному свойству

class PhoneBook {
  constructor() {
    this.users = [];
    this.id = 0;
  }

  // проверяем длину получаемого номера, если длина == 10,
  // разделяем номер на отдельные части и соединяем со скобками и пробелами
  formatNum(num) {
    if (this.checkIfNumber(num)) {
      if (num.length == 10) {
        let part1 = num.slice(0, 3);
        let part2 = num.slice(3, 5);
        let part3 = num.slice(5, 7);
        let part4 = num.slice(7);
        return `(${part1}) ${part2}-${part3}-${part4}`;
      }
    } else {
      return false;
    }
  }

  //проверяем на тип получаемого номера и чтобы это был не undefined
  checkIfNumber(num) {
    return !isNaN(num) ? true : false;
  }

  // 1.проверяем, является ли номер числом черз ф-цию checkIfNumber и, если возвращает true, форматируем номер через
  // ф-цию  formatNum
  // 2. проверяем есть ли уже такой номер в справочнике, если есть, выводим сообщение, что такой номер уже существует
  // 3. в другом случае, добавляем в массив с контактами данный контакт, преобразовывая в нижний регистр
  // 4. к свойствам добавляем свойство id, кот.увеличивается с каждым добавлением контакта на 1
  addUser(firstName, lastName, num) {
    let newNum = this.formatNum(num);
    if (newNum) {
      if (this.users.every(elem => elem.number != newNum)) {
        this.id++;
        this.users.push({
          name: firstName.toLowerCase(),
          familyName: lastName.toLowerCase(),
          number: newNum,
          id: this.id
        });
      } else {
        console.log("Contact with the same number already exists");
      }
    } else {
      console.log("Not a right format!!!");
    }
  }

  // 1. Преобразуем в нижний регистр передаваемые параметры
  // 2. Перебираем все элементы массива с контактами, и если и имя и фамилия в массиве совпадают с параметрами, удаляем
  //    объект из массива
  deleteUser(firstName, lastName) {
    let nameLow = firstName.toLowerCase();
    let lastNameLow = lastName.toLowerCase();
    this.users = this.users.filter(elem => {
      return elem.name != nameLow && elem.familyName != lastNameLow;
    });
  }

  // Ф-ция возвращает массив из объектов, в свойствах "имя" или "фамилия" которых содержится передаваемый параметр
  // 1. Приводим передаваемый параметр к нижнему регистру
  // 2. Перебираем объекты массива с контактами
  // 3. Ищем индекс параметра в имени и фамилии
  // 4. Если хотя бы один из этих индексов не равняется -1, возвращаем данный объект
  findContact(toFind) {
    return this.users.filter(elem => {
      let indexInName = elem.name.indexOf(toFind.toLowerCase());
      let indexInLastname = elem.familyName.indexOf(toFind.toLowerCase());
      return indexInName !== -1 || indexInLastname !== -1;
    });
  }

  //перебираем массив с контактами, находим объект с нужным id
  //если меняем номер, проверяем, евляется ли передаваемый параметр числом и форматируем его
  //заменяем в объектке нужное свойство на передаваемое значение
  changeContact(id, param, newValue) {
    this.users.forEach(elem => {
      if (elem.id === id) {
        if (param === "number") {
          if (this.formatNum(newValue)) {
            elem.number = this.formatNum(newValue);
          } else console.log("There is a mistake in number");
        } else elem[param] = newValue.toLowerCase();
      }
    });
  }

  sortContacts(param) {
    this.users.sort((a, b) => (a[param] > b[param] ? 1 : -1));
  }

  //если фильтруем по номеру, форматируем его сначала
  //возвращаем объект, где все значения указанного ключа(первый параметр) соответствуют тому,
  //что передается в функции вторым параметром
  filterContacts(key, value) {
    let seekValue = value;
    if (key === "number") {
      seekValue = this.formatNum(value);
    }
    return this.users.filter(elem => elem[key] == seekValue.toLowerCase());
  }
}

let myNumbers = new PhoneBook();
myNumbers.addUser("Inesa", "Sushko", "0505050501");
myNumbers.addUser("Nikolay", "GONCHARENKO", "0662562563");
myNumbers.addUser("Anna", "Pelyh", "06685858"); // контакт не добавится, напишет неправильный формат номера
myNumbers.addUser("Roman", "PELYH", "0662562563"); //контакт не добавится, напишет, что такой номер уже есть
myNumbers.addUser("Roman", "PELYH", "0502562563");
myNumbers.addUser("ALINA", "SuShko", "0951744768");
myNumbers.deleteUser("roman", "pelyh"); //удалит, даже если разный регистр
console.log(myNumbers.findContact("IN")); // покажет массив из 2х объектов: и с именем Алина и сименем Инесса
console.log(myNumbers.findContact("niko"));
myNumbers.changeContact(1, "name", "Liz");
myNumbers.changeContact(1, "number", "066321456"); //не поменяет, напишет что в номере ошибка
myNumbers.sortContacts("number");
console.log(myNumbers.filterContacts("familyName", "SUSHKO")); //покажет массив с 2мя объектами с фамилиями Сушко

console.log(myNumbers.users);
