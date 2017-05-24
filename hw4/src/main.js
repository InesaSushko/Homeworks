/*
 1. Напишите функцию которая принимает 2 числа 
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {
    let newArr = [];  
    if( typeof a === 'number' && typeof a === typeof b && isFinite(a) && isFinite(b) ) {  
        if( a <= b ) {
            for( let i = a + 1; i < b; i++ ) {
                newArr.push(i);
            };
        } else {
            for( let i = b + 1; i < a; i++ ) {
                newArr.push(i);
             } 
        }; 
        return newArr;
    } else {
        console.log('a or b is not a number');
    }
};

console.log(numbersBetween(1, 5)); // 2,3,4
console.log(numbersBetween(3, 6)); // 4,5
console.log(numbersBetween(12, 15)); // 13,14
console.log(numbersBetween(10, 15)); // 11, 12, 13, 14
console.log(numbersBetween(5, 5));
console.log(numbersBetween(15, -2));
console.log(numbersBetween(-5, -1));
console.log(numbersBetween('fgfg', -1));
console.log(numbersBetween(null, null));
console.log(numbersBetween(-5, undefined));
console.log(numbersBetween(undefined, 5));
console.log(numbersBetween(-5, NaN));
console.log(numbersBetween(Infinity, 25));



/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла. 
 Расчет чисел должен идти до 100 
 */

function fizzBuzz() {
    for( let i = 0; i < 100; i++) {
        if ( i % 3 === 0 && i % 5 === 0 ) {
            console.log('FizzBuzz');
        } else if ( i % 3 === 0 ) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i)
        }
    }
};

fizzBuzz();



/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */
function types(arrayLong) {
    if (Array.isArray(arrayLong)) {
        let newArr = [];
        for( let i = 0; i < arrayLong.length; i++) {
            let element = typeof arrayLong[i];
            newArr.push(element);
        } 
        return newArr;
    } else {
        console.log('Your parameter is not an array');        
    }
};



let arr = [1, null, undefined, 'str', {}, [], function() {}];
let obj = {
    name: 'object'
};
let emptyArr = [];

console.log(types(arr));
console.log(types(obj));
console.log(types(emptyArr));



/*
 @@SUPER@@. Вам дан массив array, содержащий внутри объекты. 
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN, 
 тогда добавляет данному объекту свойство unknownAge: true

 На основании нового массива, создайте новую функцию, которая вернет новый массив 
  содержащий все объекты содержащие свойство unknownAge:true
 */

 let array = Array.from({ length: 35 }).map(
 (value, index) => (index % 2 ? { age: index + 2 } : { age: NaN })
 );

// console.log(array); // [ {age:NaN}, {age:3}, {age:NaN}, {age:5}, {age:NaN}, {age:7} ....]
// console.log(array.length); // 35

 let main = function solution(arra) {
     for( let i = 0; i < arra.length; i++ ) {
         let value = arra[i];
         if( isNaN( value['age']) ) {
            value['unknownAge'] = true
         }
     };
     return array;
 };


function returnArr(argument) {
    let clearArray = [];
    for( let i = 0; i < argument.length; i++ ) {
        let clearObject = argument[i]
        if( clearObject.unknownAge !== undefined ) {
            clearArray.push(clearObject);
        }
    };
    return clearArray;
};

console.log( returnArr( main(array) ) );

//  let arra = ['privet', 12, {}, [1, 2]];
//  let arra2 = ['privet', 12, {}, [1, 2]];

//  returnArr(arra);
//  returnArr(arra2);