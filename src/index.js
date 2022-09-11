// // // Напиши клас Client який створює об'єкт /
// // /з властивостями login email
// //   / / Оголоси приватні властивості #login #email,
// // //доступ до яких зроби через геттер та сеттер login email

// // class Client {
// //   #login;
// //   #email;
// //   constructor({ login, email }) {
// //     this.#email = email;
// //     this.#login = login;
// //   }

// //   get login() {
// //     return this.#login;
// //   }
// //   set login(NewLogin) {
// //     this.#login = NewLogin;
// //   }

// //   get email() {
// //     return this.#email;
// //   }
// //   set email(NewEmail) {
// //     this.#email = NewEmail;
// //   }
// // }

// // const NewClient = new Client({ login: 'fhfhhfh', email: 'dffkjhif' });
// // console.log('NewClient: ', NewClient);
// // console.log(NewClient.email);
// // console.log(NewClient.login);
// // console.log((NewClient.email = 'dd12'));
// // console.log(NewClient.email);

// //Напиши клас Notes, який управляє колекцією нотаток у
// //властивості items.
// //Нотатка - це об'єкт із властивостями text priority
// //Додай класу статичну властивість Priopity,
// //у якій зберігатиметься об'єкт із пріоритетами.
// //Додай методи addNote(note), removeNote(text)
// //updatePriority(text, newPriority)

// // class Notes {
// //   static Priopity = [];
// //   constructor({ text, priority }) {
// //     this.items = text;
// //     this.priopity = priority;
// //   }
// //   addNote(note) {
// //     this.items.push(note);
// //   }
// //   updatePriority(text, newPriority) {}
// // }

// // const note = new Notes({ text: 'jfdhfhdsfhasifhihsaf', priopity: [] });

// // note.updatePriority({ text: '111', newPriority: 'base1' });
// // note.addNote({ text: '222', newPriority: 'base2' });
// // note.addNote({ text: '333', newPriority: 'base3' });
// // note.addNote('hshfusdhf');
// // console.log('note: ', note);

// // 09/09/2022 test task
// // Делегування подій
// // 1. Коли користувач клікає на будь-яку комірку
// // із таблиці, потрібно її зробити активною - добавити клас.active
// // 3. В кожному рядку кожній третій комірці задавати клас .active-third
// // 2. Коли користувач клікає на іншу комірку, вона робиться активною, а всі інші стають неактивними
// // 3. Після перезавантаження сторінки активна комірка зберігається

// // const board = document.querySelector('.board');
// // console.log('board: ', board);

// // board.addEventListener('click', evt => {
// //   console.dir(evt.currentTarget);
// //   if (evt.target.tagName === 'TD') {
// //     evt.target.classList.toggle('active');
// //   }
// // });

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

// console.log(isIsogram('absa'));
// isIsogram('isogram');
// console.log(isIsogram('isogram'));

// function findOutlier(integers) {
//   return [...integers].filter(even).length >= 2
//     ? integers.find(odd)
//     : integers.find(even);
// }
// function even(num) {
//   return num % 2 === 0;
// }
// function odd(num) {
//   return !even(num);
// }

// // or
// function findOutlier(integers) {
//   const even = integers.filter(int => int % 2 === 0);
//   const odd = integers.filter(int => int % 2 !== 0);
//   return even.length === 1 ? even[0] : odd[0];
// }
// findOutlier([0, 2, 2, 2, 13, 2, 2, 2, 2, 2, 2, 2, 2]);
// findOutlier([0, 1, 2, 13, 15]);
// findOutlier([2, 6]);

// // /////
// function validatePIN(str) {
//   if (str.length !== 4 && str.length !== 6) {
//     return false;
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] < '0' || str[i] > '9') {
//       return false;
//     }
//   }
//   return true;
// }
// validatePIN('098765');
// validatePIN('1234567');
// validatePIN('123');
// validatePIN('123a');
// validatePIN('123-');

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
// function isPangram(string) {
//   return 'abcdefghijklmnopqrstuvwxyz'
//     .split('')
//     .every(x => string.toLowerCase().includes(x));
// }
// function isPangram(string) {
//   return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
// }
// isPangram('The quick brown fox jumps over the lazy dog.');
// // console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
// isPangram('This is not a pangram.');
// // console.log(isPangram('This is not a pangram.'));

// Метод charAt() возвращает указанный символ из строки.

// function Show(str) {
//   return str
//     .split(' ')
//     .map(elem => elem[0].toUpperCase() + elem.slice(1))
//     .join(' ');

//   // or
//   // .map(elem => elem.replace(elem[0], elem[0].toUpperCase()))
//   // str.split(' ')
//   //   .map(function (word) {
//   //     return word.charAt(0).toUpperCase() + word.slice(1);
//   //   })
//   //   .join(' ');
// }

// Show("How can mirrors be real if our eyes aren't real");
