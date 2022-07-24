const findInputRef = document.querySelector("#font-size-control");
const findTextRef = document.querySelector("#text");

const inputEvent = () => {

    findTextRef.style.fontSize = `${findInputRef.value}px`;
};

findInputRef.addEventListener("input", inputEvent);


