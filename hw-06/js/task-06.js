
const findInputRef = document.querySelector('#validation-input');
const inputLength = findInputRef.getAttribute('data-length');


findInputRef.addEventListener('input', onCheckValid);

function onInputFocus() {
 
    findInputRef.classList.add('invalid');
    findInputRef.classList.remove('valid');
}


function onInputBlur() {
  
    findInputRef.classList.remove('invalid');
    findInputRef.classList.add('valid');
}
 
function onCheckValid() {
     return inputLength > this.value.length ? onInputFocus() :  onInputBlur();
}



// document.querySelector("#validation-input").onblur = function() {
//   console.log(this.value.length);
//     if (this.getAttribute('data-length') > this.value.length) { 
//     this.classList.add('invalid');
//     this.classList.remove('valid');

//   } else {
//     this.classList.remove('invalid');
//     this.classList.add('valid');
//   }
// };