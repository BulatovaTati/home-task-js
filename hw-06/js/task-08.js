// // Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, 
// где имя поля будет именем свойства, а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.

const form = document.querySelector(".login-form");
 
form.addEventListener("submit", checkValid);

function checkValid(event) {
    event.preventDefault();
    
    const {
        elements: { email, password }
    } = event.currentTarget;
 
    if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
    }

    console.log(`email: ${email.value}, password: ${password.value}`);
    event.currentTarget.reset();
}

 