/*
Напишите функцию которая будет возвращать объект
с свойством name, а значением будет первый аргумент функции
*/
function nameFunction(input) {
    return {name: input};
}
console.log(nameFunction('Inesa'));


/*
Функция будет принимать 1 аргумент - ОБЪЕКТ у которого
будет свойство name
и возвращать новый объект изменяя свойство name
в большой регистр
*/
function objectUppercase (object) {
    object.name = object.name.toUpperCase();
    return object;
}
console.log(objectUppercase({name: 'Inesa'}));


/*
1. Напишите функцию которая принимает в 
качестве аргумента массив
и элемент массива и добавляет элемент в конец массива
*/


let arr = ['one', 'two', 'three'];

function addToArray(arrParam, newElem) {
    lengthOfArr = arrParam.length;
    arr[lengthOfArr] = newElem;
    return arrParam;
}
console.log(addToArray(arr, 'four'));


/*
2. Напишите функцию которая получает 3 параметра 
и возвращает объект типа:    
    {
      argument1: param1,
      argument2: param2,
      argument3: param3,
    }    
*/
function simpleObjectGenerator(input1, input2, input3) {
    var simpleObject = {
        argument1: input1,
        argument2: input2,
        argument3: input3
    };
    return simpleObject
}

console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));

/* {
   argument1:'protocol',
   argument2:{url:'22'},
   argument3:8000
}*/

var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

console.log(simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));
/* {
 argument1:'77',
 argument2:[{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }],
 argument3:PRIVET KAK DELA CHTO NOVOGO
 }*/


///////////////////////////////////////////////
/*
3.  Напишите функцию которая принимает 3 аргумента, 
     третий аргумент - это объект.
    
    Функция создает новый объект и добавляет ключ 
    это первый аргумент, а значение - второй аргумент
    Проверяет если есть свойство name в переданном объекте, 
    тогда добавляет данное свойство и возвращает новый объект
*/
var myName = { name: 'Oleg' };

function addNameToUser(newKey, newValue, userName) {
    let newObject = {};
    newObject[newKey] = newValue;
    if ('name' in newObject) {
        return newObject
    } else {
        newObject['name'] = userName.name;
        return newObject
    }
}


console.log(addNameToUser('family', '%Lustenko%', myName));
/* {name:'Oleg', family:'%Lustenko%'} */

console.log(myName);
/* {name:'Oleg'} */

/////////////////////////////////

/*
-> @@ SUPER
  Напишите функцию, которая будет возвращать 'Fizz' 
   если передаваемый параметр кратен 3,
   'Buzz', если передаваемый параметр кратен 5, 
   'FizzBuzz' - если параметер кратен 3 и 5
   Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
*/

function fizzBuzz(num) {
  if (num % 3 === 0) {
      if (num % 5 === 0) {
          return 'FizzBuzz'
      } else {
          return 'Fizz'
      }
  } else if (num % 5 === 0) {
          return 'Buzz'
  } else {
      return num
  }
};

console.log( fizzBuzz(1)); // 1
console.log( fizzBuzz(2)); // 2
console.log( fizzBuzz(3)); // 'Fizz'
console.log( fizzBuzz(5)); // 'Buzz'
// ...
console.log( fizzBuzz(15)); // 'FizzBuzz'
console.log( fizzBuzz(21)); // 'Fizz'

/* -> @@ SUPER 2
Напишите функцию, которая будет принимать 4 аргумента, 
последний всегда функция.
Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом

*/

var arrMain = [];


function super2( arr1, arr2, arr3, function4) {
    arrMain[0] = arr1;
    arrMain[1] = arr2;
    arrMain[2] = arr3;
    return function4   
};

let func = function(variable) {
    return variable
};

console.log(super2('string', 'another string', 'one more string', func(arrMain)));
 