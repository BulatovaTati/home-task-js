// Напиши клас Client який створює об'єкт /
// /з властивостями login email
//   / / Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login emai
// class Client {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#email = email;
//     this.#login = login;
//   }

//   get login() {
//     return this.#login; //   }
//   set login(NewLogin) {
//     this.#login = NewLogin;
//   } //   get email() {
//     return this.#email;
//   }
//   set email(NewEmail) {
//     this.#email = NewEmail;
//   }
// }
// const NewClient = new Client({ login: 'fhfhhfh', email: 'dffkjhif' })
// console.log('NewClient: ', NewClient)
// console.log(NewClient.email)
// console.log(NewClient.login)
// console.log((NewClient.email = 'dd12'))
// console.log(NewClient.email);

//Напиши клас Notes, який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text priority
//Додай класу статичну властивість Priopity,
//у якій зберігатиметься об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// class Notes {
//   static Priopity = [];
//   constructor({ text, priority }) {
//     this.items = text;
//     this.priopity = priority;
//   }
//   addNote(note) {
//     this.items.push(note); //   } //   updatePriority(text, newPriority) {} // }
// const note = new Notes({ text: 'jfdhfhdsfhasifhihsaf', priopity: [] });

// note.updatePriority({ text: '111', newPriority: 'base1' });
// note.addNote({ text: '222', newPriority: 'base2' });
// note.addNote({ text: '333', newPriority: 'base3' });
// note.addNote('hshfusdhf');
// console.log('note: ', note);

// 09/09/2022 test task
// Делегування подій
// 1. Коли користувач клікає на будь-яку комірку
// із таблиці, потрібно її зробити активною - добавити клас.active
// 3. В кожному рядку кожній третій комірці задавати клас .active-third
// 2. Коли користувач клікає на іншу комірку, вона робиться активною, а всі інші стають неактивними
// 3. Після перезавантаження сторінки активна комірка зберігається

// const board = document.querySelector('.board');
// console.log('board: ', board);

// board.addEventListener('click', evt => {
//   console.dir(evt.currentTarget);
//   if (evt.target.tagName === 'TD') {
//     evt.target.classList.toggle('active');
//   }
// });

// ! CODEWARS

// ? An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// ? Implement a function that determines whether a string
// ? that contains only letters is an isogram.
// ? Assume the empty string is an isogram.Ignore letter case.

// function isIsogram(str) {
//   const newStr = str.toLowerCase();

//   for (let i = 0; i < newStr.length; i++) {
//     for (let j = i + 1; j < newStr.length; j++) {
//       if (newStr[i] === newStr[j]) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

function isIsogram(str) {
  return new Set(str.toLowerCase()).size == str.length;
}

// function isIsogram(str) {
//   return !str.match(/([a-z]).*\1/i);
// }

// console.log(isIsogram('absa'));
// console.log(isIsogram('abc'));
// console.log(isIsogram('isogram'));

// ? You are given an array(which will have a length of at least 3,
// ? but could be very large) containing integers.
// ? The array is either entirely comprised of odd
// ? integers or entirely comprised of even integers except
// ? for a single integer N.Write a method that takes the array
// ? as an argument and returns this "outlier" N

// function findOutlier(integers) {
// return [...integers].filter(even).length >= 2 ? integers.find(odd)
//     : integers.find(even);
// }
// function even(num) {
//   return num % 2 === 0;
// }
// function odd(num) {
//   return !even(num);
// }

function findOutlier(integers) {
  const even = integers.filter(int => int % 2 === 0);
  const odd = integers.filter(int => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

// console.log(findOutlier([0, 2, 2, 2, 13, 2, 2, 2, 2, 2, 2, 2, 2]));
// console.log(findOutlier([0, 3, 13, 15, 2]));
// console.log(findOutlier([2, 6]));

// ? ATM machines allow 4 or 6 digit PIN codes and
// ? PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// ? If the function is passed a valid PIN string, return true, else return false.

function validatePIN(str) {
  if (str.length !== 4 && str.length !== 6) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] < '0' || str[i] > '9') {
      return false;
    }
  }
  return true;
}
// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin);
// }
// console.log(validatePIN('098765'));
// console.log(validatePIN(''));
// console.log(validatePIN('123-'));
// console.log(validatePIN('123a'));
// console.log(validatePIN('123'));

// ? An isogram is a word that ?? has no repeating letters,
// ? consecutive or non - consecutive.Implement a function
// ? that determines whether a string that contains only
// ? letters is an isogram.Assume the empty string is an isogram.
// ? Ignore letter case.

// function isPangram(string) {
//   const strArr = string.toLowerCase();
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

//   for (let i = 0; i < alphabet.length; i++) {
//     if (strArr.indexOf(alphabet[i]) < 0) {
//       return false;
//     }
//   }
//   return true;
// }
// function isPangram(string) {
//   string = string.toLowerCase();
//   return 'abcdefghijklmnopqrstuvwxyz'.split('').every(function (x) {
//     return string.indexOf(x) !== -1;
//   });
// }
function isPangram(string) {
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every(x => string.toLowerCase().includes(x));
}
// function isPangram(string) {
//   return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
// }

// console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
// console.log(isPangram('This is not a pangram.'));

// Метод charAt() возвращает указанный символ из строки.

// function Show(str) {
//   return str
//     .split(' ')
//     .map(elem => elem[0].toUpperCase() + elem.slice(1))
//     .join(' ');

// .map(elem => elem.replace(elem[0], elem[0].toUpperCase()))
// str.split(' ')
//   .map(function (word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   })
//   .join(' ');
// }

// Show("How can mirrors be real if our eyes aren't real");

// ?  People in bus, in /out/

// let number = function (busStops) {
//   let peopleIn = 0;
//   let peopleOut = 0;

//   busStops.map(item => {
//     peopleIn += item[0];
//     peopleOut += item[1];

//     return peopleIn, peopleOut;
//   });
//   return peopleIn - peopleOut;
// };

// const number = busStops =>
//     busStops.reduce((rem, [on, out]) => rem + on - out, 0);

const number = busStops => {
  return busStops.reduce((people, next) => {
    const [on, off] = next;
    return people + on - off;
  }, 0);
};

// console.log(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ])
// );

// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//     [12, 2],
//     [6, 1],
//     [7, 10],
//   ])
// );

// ! https://www.codewars.com/kata/550f22f4d758534c1100025a
// function dirReduc(arr) {
//   const opposites = {
//     NORTH: 'SOUTH',
//     EAST: 'WEST',
//     SOUTH: 'NORTH',
//     WEST: 'EAST',
//   };
//   return arr.reduce(
//     (acc, cur) => (
//       opposites[acc.slice(-1)] === cur ? acc.pop() : acc.push(cur), acc
//     ),
//     []
//   );
// }
// function dirReduc(plan) {
//   const opposite = {
//     NORTH: 'SOUTH',
//     EAST: 'WEST',
//     SOUTH: 'NORTH',
//     WEST: 'EAST',
//   };
//   return plan.reduce((dirs, dir) => {
//     if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
//     else dirs.push(dir);
//     return dirs;
//   }, []);
// }

// ? function anagrams(word, words) {
// ? use map then use a callback function that checks
// ? if all of the letters in word exist in words
// ? include a check for length

// function anagrams(word, words) {
//   word = word.split('').join('');

//   return words.filter(el => word == el.split('').sort().join(''));
// }

//   return words.filter(elem => {
//     if (elem.length === word.length) {
//       if (
//         elem
//           .split('')
//           .sort()
//           .join('')
//           .toLowerCase()
//           .includes(word.split('').sort().join('').toLowerCase())
//       ) {
//         return elem;
//       }
//     }
//   });
// }
// function anagrams(word, words) {
//   const modifWord = word.split('').sort().join('');
//   return words.filter(item => item.split('').sort().join('') == modifWord);
// }
function anagrams(word, words) {
  return words.filter(elem => '' + [...word].sort() === '' + [...elem].sort());
}
// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']));

// ? In this kata you are required to, given a string,
// ? replace every letter with its position in the alphabet.
// ? If anything in the text isn't a letter, ignore it and don't return it.
// ? "a" = 1, "b" = 2,

// function alphabetPosition(text) {
//   let result = '';
//   for (let i = 0; i < text.length; i++) {
//     const code = text.toUpperCase().charCodeAt(i);
//     if (code > 64 && code < 91) result += code - 64 + ' ';
//   }

//   return result.slice(0, result.length - 1);
// }
// function alphabetPosition(text) {
//   return text.split('').filter(v=>/[a-zA-Z]/.test(v)).map(v=>v.toLowerCase().charCodeAt(0)-96).join(' ');
// }

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map(elem => elem.charCodeAt() - 64)
    .join(' ');
}

// console.log(alphabetPosition("The sunset sets at twelve o'clock."));
// console.log(alphabetPosition('The narwhal bacons at midnight.'));

// ? Your task is to sort a given string.
// ? Each word in the string will contain a single number.
// ? This number is the position the word should have in the result.
// ? Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// ? If the input string is empty, return an empty string.
// ? The words in the input String will only contain valid consecutive numbers.

// ? "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// ? "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"

function order(words = '') {
  const copyStr = words;

  return copyStr
    .split(' ')
    .sort((prev, next) => {
      return prev.match(/\d/) - next.match(/\d/);
    })
    .join(' ');
}

// function order(words){
//   return words.split(' ').sort(function(a, b){
//       return a.match(/\d/) - b.match(/\d/);
//    }).join(' ');
// }
// ! принять ЛЮБОЙ ОДИН символ в диапазоне, например,
// ! [0 - 9] соответствует любой цифре;[A - Za - z]
// ! соответствует любым прописным или строчным буквам.

// console.log(order('is2 Thi1s T4est 3a'));
// console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
// console.log(order(''));

// ? Отримати дані з API та вивести їх на сторінку
// ? http://universities.hipolabs.com/search?country=Ukraine
// ? http://universities.hipolabs.com/search?country=United+States
// ? https://github.com/Hipo/university-domains-list
// function updateMarkup(data) {
//   ref.innerHTML = data;
// }
(async () => {
  try {
    const resp = await fetch(
      'http://universities.hipolabs.com/search?country=Ukraine'
    );

    const data = await resp.json();
    // updateMarkup(data[0].name);
  } catch (error) {
    console.log('ERROR', error.message);
  }
})();

// ? Отримати дані з API і вивести їх на сторінку
// ? https://dog.ceo/dog-api/

// Отримати дані з API і вивести їх на сторінку
// https://randomuser.me/

// const ref = document.querySelector('.list');

// function updateMarkup(user) {
//   const name = user.name.first;
//   const img = user.picture.medium;
//   const email = user.email;

//   ref.innerHTML = `<img src="${img}" alt="img"/>
//     <p>${name}</p>
//     <p>${email}</p>`;
// }

// ? (async () => {
//   try {
//     const resp = await fetch('https://randoxmuser.me/api/ ');
//     const data = await resp.json();
//     const results = data.results;

//     updateMarkup(results[0]);
//   } catch (error) {
//     console.log('ERROR', error.message);
//   }
// })();

// ! <li></li>
// ! <a></a>
// ! <div></div>
// ! <p></p>
// ! <img src="" alt=""/>

// const ref = document.querySelector('.list');
// const URL = 'http://colormind.io/api/';
// // Отримати дані з API та вивести їх на сторінку

// (async () => {
//   try {
//     const resp = await fetch(URL, {
//       method: 'POST',
//       body: JSON.stringify({
//         model: 'default',
//       }),
//     });
//     const data = await resp.json();
//     updateMarkup(data.result);
//   } catch (error) {
//     console.log('ERROR', error.message);
//   }
// })();

// function updateMarkup(data) {
//   const markup = data.map(
//     item =>
//       `<div style="background-color: rgb(${item})" class="item"></div>
//     `
//   );
//   ref.innerHTML = markup.join('');
// }

// Отримати дані з API і вивести їх на сторінку
//https://reqres.in/
// const URL = 'https://reqres.in/api/users/2';

// const ref = document.querySelector('.list');

// (async () => {
//   try {
//     const resp = await fetch(URL, {
//       method: 'put',
//       body: JSON.stringify({
//         name: 'Janet',
//         job: 'Weaver',
//       }),
//     });

//     const data = await resp.json();
//     // console.log('data: ', data);

//     // updateMarkup(data);
//   } catch (error) {
//     console.log('ERROR', error.message);
//   }
// })();

// function updateMarkup(data) {
//   const markup = data.map(
//     item =>
//       `<div class="item">${item}</div>
//     `
//   );
//   ref.textContent = markup.join('');
// }

// Отримати дані з API і вивести їх на сторінку
// https://deckofcardsapi.com/

const URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

const ref = document.querySelector('.list');

(async () => {
  try {
    const resp = await fetch(URL);
    const { deck_id } = await resp.json();

    const info = await fetch(
      `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2  `
    );
    const { cards } = await info.json();

    updateMarkup(cards);
  } catch (error) {
    console.log('ERROR', error.message);
  }
})();

function updateMarkup(data) {
  const mark = data
    .map(({ image, code }) => `<img src="${image}" alt="${code}"/>`)
    .join('');

  ref.innerHTML = mark;
}

// ДЗ
// Отримати дані з API і вивести їх на сторінку. Добавити стилі.
// https://openweathermap.org/api

// https://nordicapis.com/how-to-build-an-api-driven-weather-app/
