// Преобразование телефонного номера из формата 0993378130 в (099) 33-78-130
// Проверка, что телефонный номер содержит только числа
// Добавление пользователей в объект
// Удаление пользователя по имени, фамилии
// Поиск пользователей по имени - отображает всех пользователей с одинаковым именем
// Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this )
// Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
// Фильтр по указанному свойству

function PhoneBook() {
  this.users = [];
  this.id = 0
};

// проверяем длину получаемого номера, если длина == 10,
// разделяем номер на отдельные части и соединяем со скобками и пробелами
PhoneBook.prototype.formatNum = function(num) {
  if (num.length == 10) {
    let part1 = num.slice(0, 3);
    let part2 = num.slice(3, 5);
    let part3 = num.slice(5, 7);
    let part4 = num.slice(7);
    return `(${part1}) ${part2}-${part3}-${part4}`;
  } else {
    console.log( "Not enough numbers!!!" );
  }
};

//проверяем на тип получаемого номера и чтобы это был не undefined
PhoneBook.prototype.checkIfNumber = function(num) {
  return +num === +num && typeof (+num === "number") ? true : false;
};

// 1.проверяем, является ли номер числом черз ф-цию checkIfNumber и, если возвращает true, форматируем номер через 
// ф-цию  formatNum
// 2. проверяем есть ли уже такой номер в справочнике, если есть, выводим сообщение, что такой номер уже существует
// 3. в другом случае, добавляем в массив с контактами данный контакт, преобразовывая в нижний регистр
// 4. к свойствам добавляем свойство id, кот.увеличивается с каждым добавлением контакта на 1
PhoneBook.prototype.addUser = function(firstName, lastName, num) {
  let formatedNum = "";
  if (this.checkIfNumber(num)) {
    formatedNum = this.formatNum(num);

    if (this.users.every(elem => elem.num !== formatedNum)) {
      this.id ++ ;
      this.users.push({
        name: firstName.toLowerCase(),
        familyName: lastName.toLowerCase(),
        number: formatedNum,
        id: this.id
      });
    }
  } else {
    console.log(
      "There is a mistake in number or user with this number already exists"
    );
  }
};

// 1. Преобразуем в нижний регистр передаваемые параметры
// 2. Перебираем все элементы массива с контактами, и если и имя и фамилия в массиве совпадают с параметрами, удаляем
//    объект из массива
PhoneBook.prototype.deleteUser = function(firstName, lastName) {
  this.users.forEach((elem, index) => {
    let nameLow = firstName.toLowerCase();
    let lastNameLow = lastName.toLowerCase();
    if (elem.name === nameLow && elem.familyName === lastNameLow) {
      this.users.splice(index, 1);
    }
  });
};


// Ф-ция возвращает массив из объектов, в свойствах "имя" или "фамилия" которых содержится передаваемый параметр
// 1. Приводим передаваемый параметр к нижнему регистру
// 2. Перебираем объекты массива с контактами
// 3. Ищем индекс параметра в имени и фамилии
// 4. Если хотя бы один из этих индексов не равняется -1, возвращаем данный объект
PhoneBook.prototype.findContact = function(toFind) {
  return this.users.filter(elem => {
    let indexInName = elem.name.indexOf(toFind.toLowerCase());
    let indexInLastname = elem.familyName.indexOf(toFind.toLowerCase());
    return indexInName !== -1 || indexInLastname !== -1;
  });
};

//перебираем массив с контактами, находим объект с нужным id
//если меняем номер, проверяем, евляется ли передаваемый параметр числом и форматируем его
//заменяем в объектке нужное свойство на передаваемое значение
PhoneBook.prototype.changeContact = function(id, param, newValue) {
  let objectToChange;
  
  this.users.forEach((elem, index) => {
    if(elem.id === id){
      objectToChange = this.users[index];
    }
  });

  if (param === 'number'){
    if(this.checkIfNumber(newValue)){
      return objectToChange.number = this.formatNum(newValue)
    } else {
      console.log('There is a mistake in number')
    }
  } else {
    objectToChange[param] = newValue.toLowerCase()

  }
};

PhoneBook.prototype.sortContacts = function(param) {
  this.users.sort((a, b) => (a[param] > b[param] ? 1 : -1));
};

//если фильтруем по номеру, форматируем его сначала
//возвращаем объект, где все значения указанного ключа(первый параметр) соответствуют тому, 
//что передается в функции вторым параметром
PhoneBook.prototype.filterContacts = function(key, value) {
  let seekValue = value;
  if(key === 'number') {
    seekValue = this.formatNum(value)
  }
  return this.users.filter(elem => elem[key] === seekValue.toLowerCase())
};




let newNumber = new PhoneBook();





