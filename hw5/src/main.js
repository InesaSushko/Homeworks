'use strict';



/*

1. Переместите 0 в конец массива, остальные числа должны остаться неизменными
.сoncat();
example:

 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => 
 ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]

 */



let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = ['a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ];
let arr3 = [0, 1, null, 2, false, 1, 0];


function moveZeroToEnd(arr) {
    let zeroArr = [];
    for( let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroArr.push(arr.splice( i, 1 ));            
            i -= 1;
        }
    }
    arr = arr.concat(...zeroArr);
    return arr;
};
 
console.log(moveZeroToEnd(arr1));
console.log(moveZeroToEnd(arr2));
console.log(moveZeroToEnd(arr3));


/*

 2. Верните сумму двух найменьших чисел в массиве

 

 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10

 

 */

let arrOfNumbers1 = [10,20,30,1,31,11,10];
let arrOfNumbers2 = [-1,0,25];
let arrOfNumbers3 = [-4,-10,25,10];
let arrOfNumbers4 = [0,200,10,25,15];

// Решение сделано с расчетом, что нужно оставить исходные массивы неизменными

function minimalNumber(arr) {
    let min1 = Math.min( ...arr );
    let index = arr.indexOf( min1 );
    let arrReserved = arr.slice( 0, index ).concat( arr.slice( index + 1 ));
    let min2 = Math.min( ...arrReserved );
    return min1 + min2
}

console.log(minimalNumber(arrOfNumbers1));
console.log(minimalNumber(arrOfNumbers2));
console.log(minimalNumber(arrOfNumbers3));
console.log(minimalNumber(arrOfNumbers4));




/*

 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"

 */
function nameShuffler(names) {
    let arrName = names.split(' ');
    arrName.unshift( arrName.pop() );
    return (arrName.join(' '));
}
//split().reverse().join()

console.log(nameShuffler('john McClane'));
console.log(nameShuffler('Arnold Schwarzenegger'));
console.log(nameShuffler('James Bond'));


/*

 // !

 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

 */

let arrOfNames = ['jo', 'nelson', 'jurie'];
let arrOfNames2 = ['KARLY', 'DANIEL', 'KELSEY'];

function capMe(arrNames) {
    for( let i=0; i < arrNames.length; i++ ) {
        let eachName = arrNames[i].toLowerCase().split('');
        eachName[0] = eachName[0].toUpperCase();
        arrNames[i] = eachName.join('');
    }
    return arrNames;
}

console.log(capMe(arrOfNames));
console.log(capMe(arrOfNames2));


//@SUPER

/*

 1. Найдите число отсутствующее в заданной последовательности

 

 example:
 [1,3,5,9] => 7
 [0,8,16,32] => 24
 [4, 6, 8, 10] => 2 // число сначала
 [0,16,24,32] => 8

  

 */


function random(input) {
    for( let i = 0; i < input.length-2; i++) {
        let diference1 = (input[i+1] - input[i]);
        let diference2 = (input[i+2] - input[i+1]);
        if( diference1 != diference2) {
            return diference1 > diference2 ? (input[i]+diference2) : (input[i+1]+diference1); 
        } 
    } 
    let difer = input[1] - input[0];
    if( input[0] >= difer ) {
        return (input[0] - difer);
    }
};



console.log(random([1, 3, 5, 9]));
console.log(random([0, 8, 16, 32]));
console.log(random([0, 16, 24, 32]));
console.log(random([4, 6, 8, 10]));
console.log(random([1, 7, 10, 13]));


/*

 2. Напишите функция которая преобразовывает/открывает скобки всех 
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов

 

 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]

 

 */



let bracesInBraces = [[1,2],[3,[4]],5, 10];
let bracesInBraces2 = [25,10,[10,[15]]];
let bracesInBraces3 = [[[0, 10, 11], [12, [20]],25,10,[10,[15]]]];



function openBraces(arr) {
    for( let i = 0; i < arr.length; i++ ) {
        if( Array.isArray(arr[i])) {
            let x = arr.splice(i, 1);
            for( let b = x[0].length-1; b >=0; b-- ) {
                arr.splice(i, 0, x[0][b])
            }
            return openBraces(arr)
        } 
    }
    return arr;        
}

console.log(openBraces(bracesInBraces));
console.log(openBraces(bracesInBraces2));
console.log(openBraces(bracesInBraces3));

