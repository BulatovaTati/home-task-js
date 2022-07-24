// РАННИЙ ВОЗВРАТ
// Запиши условие в инструкции if так, чтобы функция работала правильно.

function checkAge(age) {
  if (age >= 18) { 
    return "You are an adult";
  }

  return "You are a minor";
}

// .......................................2
// ЗАДАЧА: ПРОВЕРКА ПАРОЛЯ (РАННИЙ ВОЗВРАТ)
// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:

// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";


  if (password === ADMIN_PASSWORD) {
  return  "Welcome!";
  }  
   return  "Access denied, wrong password!";
 
}

// .......................................3
// ЗАДАЧА: СКЛАД ТОВАРОВ 3.0
// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

function checkStorage(available, ordered) {

 
  if (ordered === 0) {
    return "Your order is empty!";
  } 
 if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }  
   return "The order is accepted, our manager will contact you";
 
}

// .......................................4
// СОЗДАНИЕ МАССИВА
// Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".
const fruits = ["apple", "plum", "pear", "orange"] ;

// .......................................5
// ДОСТУП К ЭЛЕМЕНТАМ ПО ИНДЕКСУ
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

// Имя переменной	Значение переменной
// firstElement	первый элемент массива
// secondElement	второй элемент массива
// lastElement	последний элемент массива

const fruits = ["apple", "plum", "pear", "orange"];

 
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

// .......................................6
// ПЕРЕОПРЕДЕЛЕНИЕ ЗНАЧЕНИЯ ЭЛЕМЕНТА
// Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".


const fruits = ["apple", "plum", "pear", "orange"];
 
fruits[1] = "peach";
fruits[3] = "banana";


// .......................................7
// ДЛИНА МАССИВА
// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.
const fruits = ["apple", "peach", "pear", "banana"];

 
const fruitsArrayLength = fruits.length;

// .......................................8
// ИНДЕКС ПОСЛЕДНЕГО ЭЛЕМЕНТА
// Объяви две переменные:

// Имя переменной	Ожидаемое значение
// lastElementIndex	Индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	Значение последнего элемента массива

const fruits = ["apple", "peach", "pear", "banana"];
 
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];



// .......................................9
// ЗАДАЧА: КРАЙНИЕ ЭЛЕМЕНТЫ МАССИВА
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

function getExtremeElements(array) {
  // 1 способ
    // const newArray = [];

    // newArray.push(array[0], array[array.length - 1]);
 
    // return newArray;

//  2способ
    //  const newArray = [array[0], array[array.length - 1]];
    // return newArray;

// 3 способ
        // return  newArray = [array[0], array[array.length - 1]];
        
  // 4 способ
    return [array[0], array[array.length - 1]];
} 

// .......................................10
// МЕТОД СТРОК SPLIT()
// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.


function splitMessage(message, delimeter) {

  return (message.split(delimeter));
}
//  function splitMessage(message, delimeter) {
//   let words;
//    words = message.split(delimeter);
//     console.log(words);
//     return words;
// }



// .......................................11
// ЗАДАЧА: ГРАВИРОВКА УКРАШЕНИЙ
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

function calculateEngravingPrice(message, pricePerWord) {
 

return message.split(" ").length * pricePerWord;
}


// .......................................12
// МЕТОД МАССИВА JOIN()
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

function makeStringFromArray(array, delimeter) {

 
return array.join(delimeter);
}

// .......................................13
// ЗАДАЧА: ГЕНЕРАТОР SLUG
// Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.

// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.

// Внимание
// Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

function slugify(title) {
  // 1
//   const normalizedTitle = title.toLowerCase();
//   const words = normalizedTitle.split(' ');
//   const slug = words.join('-');

//  return slug;
  // 2
// return title.toLowerCase().replace('/-+/g', '').replace(/\s+/g, '-');
// 3
  return title.toLowerCase().split(' ').join('-');
 
}

// .......................................14
// МЕТОД SLICE()
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
 
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1 );
const lastThreeEls = fruits.slice(-3);

// .......................................15
// МЕТОД CONCAT()
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.


const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients);  


// .......................................16
// ЗАДАЧА: КОМПОЗИЦИЯ МАССИВОВ
//  Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.
 
//  Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.В противном случае функция должна вернуть новый массив целиком.
 

function makeArray(firstArray, secondArray, maxLength) {
  // 1.
    // let result;
    // if (firstArray.concat(secondArray) >= maxLength) {
    //     result = firstArray;
    // }
    // else {
    //     result = firstArray.concat(secondArray).slice(0, maxLength);
    // }
    // console.log(result);
    // return result;
// 2.
  //  let result;
  // result = firstArray.concat(secondArray) >= maxLength ?
  //   result = firstArray : firstArray.concat(secondArray).slice(0, maxLength);
  //   return result;
// 3.
  return firstArray.concat(secondArray) >= maxLength ?
     result = firstArray : firstArray.concat(secondArray).slice(0, maxLength);
} 
  

// .......................................17
// ЦИКЛ FOR

// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.


const start = 3;
const end = 7;

for (let i = start; i <=end; i += 1) {  
  console.log(i);
}

// .......................................18
// ЗАДАЧА: СУММА ЧИСЕЛ (ЦИКЛ FOR)
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.


function calculateTotal(number) {
    let total = 0;

for (let i = 0; i <= number ; i += 1) { 
    total += i;
}
     return total;
}

// .......................................19
// ИТЕРАЦИЯ ПО МАССИВУ
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) {  
  const fruit = fruits[i];  
  console.log(fruit);
}

// .......................................20
// ЗАДАЧА: ПОДСЧЁТ СУММЫ ПОКУПКИ

// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

function calculateTotalPrice(order) {
  let total = 0;
 
  for (const number of order) {
    total += number;
  }
  return total;
}

 // .......................................21
// ЗАДАЧА: ПОИСК САМОГО ДЛИННОГО СЛОВА
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.


function findLongestWord (string) {
const stringSplit = string.split(' ');
let longestWord = "";

  for (const word of stringSplit) {

    if (word.length > longestWord.length) {
    longestWord = word;
}
}
  return longestWord; 
  };


// function findLongestWord(string) {
//     let allstring = string.split(' ');
 
//     let wordLength = 0;
//     let longestWord;

//     for (let i = 0; i < allstring.length; i += 1) {

//         wordLength = allstring[1].length;

//         if (allstring[i].length > wordLength) {

//             longestWord = allstring[i];


//               return longestWord;
//         }
//     }
// };


 // .......................................22
// МЕТОД PUSH()
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

function createArrayOfNumbers(min, max) {
  const numbers = [];
 
for (let i = min; i <= max; i++) {
  numbers.push(i);
  
}
  console.log(numbers);
  return numbers;
}
 // .......................................23
//  ЗАДАЧА: ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ

// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).


 

//  .......................................24
// МЕТОД INCLUDES()
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

 function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

return fruits.includes(fruit);
}

//  .......................................25
// ЗАДАЧА: ОБЩИЕ ЭЛЕМЕНТЫ
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.



function getCommonElements(array1, array2) {
    let common = [];        
    
    for (let i = 0; i < array1.length; i += 1) {
      
            if (array2.includes(array1[i])) {        
          
        common.push(array1[i]);         
      }
 
  }
  return common;   
}  

//  .......................................26
// ЦИКЛ FOR...OF
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.


function calculateTotalPrice(order) {
  let total = 0;

for (const element of order){
  total += element;
}
  return total;
}



//  .......................................27

//   ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ 2.0
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

function filterArray(numbers, value) {

  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;

}

//  .......................................28
// ОПЕРАТОР %
// Дополни выражения остатка от деления так, чтобы код проходил тесты.

const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;


//  .......................................29
// ЗАДАЧА: ЧЁТНЫЕ ЧИСЛА
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).



function getEvenNumbers(start, end) {
  let result = []; 

  for (let i = start; i <= end; i += 1) {

  if (i % 2 === 0) {
    result.push(i);
}
}
  return result; 
}
  

//  .......................................30
// ОПЕРАТОР BREAK
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
//  .......................................31
// ОПЕРАТОР BREAK VS RETURN В ФУНКЦИИ
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

function findNumber(start, end, divisor) {
 
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return i;
    }
  }

  return number;
 
}

//  .......................................32
// ЗАДАЧА: ФУНКЦИЯ INCLUDES()
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

function includes(array, value) {
 
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return true;
  }
  }
  return false;
}