const findInputRef = document.querySelector("#validation-input");

findInputRef.addEventListener("input", onCheckValid);

function onInputFocus() {
  findInputRef.classList.add("invalid");
  findInputRef.classList.remove("valid");
}

function onInputBlur() {
  findInputRef.classList.remove("invalid");
  findInputRef.classList.add("valid");
}

function onCheckValid() {
  return Number(findInputRef.dataset.length) === this.value.length
    ? onInputBlur()
    : onInputFocus();
}
