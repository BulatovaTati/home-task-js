 
const refs = {
    input: document.querySelector('#name-input'),
    nameOutput: document.querySelector('span#name-output'),
}

refs.input.addEventListener('input', onOutputChange);

function onOutputChange(event) {

refs.nameOutput.textContent = event.target.value.trim() !== '' ? event.target.value : 'Anonymous';

}
 
