let flagPressing = false;
let arrAuthorization = [];
let allAuthorization;

let inputEmail = document.getElementById("form_inputEmail");
let inputPassword = document.getElementById("form_inputPassword");

// хранит статус онлайна пользователя или статус офлайна
function flagAuthorization(flag, index) {
    (this.flag = flag), (this.index = index);
}

// будет хранить логины и пороли пользователей
function emailPassword(email, password) {
    (this.email = email), (this.password = password);
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("saveAuthorization") !== null) {
        let temp = JSON.parse(localStorage.getItem("saveAuthorization"));
        for (let i = 0; i < temp.length; i++) {
            allAuthorization = new emailPassword(
                temp[i].email,
                temp[i].password
            );
            arrAuthorization.push(allAuthorization);
        }
    } else {
        allAuthorization = new emailPassword("admin@gmail.com", "12345"); // создаём по умолчанию суперпользователя и добовляем в масив
        arrAuthorization.push(allAuthorization);
        localStorage.setItem(
            "saveAuthorization",
            JSON.stringify(arrAuthorization)
        );
    }

    if (localStorage.getItem("statusAuthorization") !== null) {
        let temp1 = JSON.parse(localStorage.getItem("statusAuthorization"));
        if (temp1.flag !== "false") {
            entranceBtn(temp1.flag, temp1.index);
        } else {
            entranceBtn(temp1.flag, temp1.index);
        }
    } else {
        ofline();
    }
});

document.querySelector("#personalArea").addEventListener("click", () => {
    if (
        JSON.parse(localStorage.getItem("statusAuthorization")).flag === "true"
    ) {
        let temp = confirm("Вы точно хотите выйти?");
        if (temp === true) {
            ofline();
        }
    }
});

function formAuthorization() {
    document.getElementById("catalog_products").style.display = "none";
    document.getElementById('container_carousel').innerHTML = '';
    document.getElementById('infoProduct').innerHTML = '';
    document.querySelector('.mainPage').innerHTML = "";
    
    flagPressing = false;
    formRegister(flagPressing);
}

// сохроняем статус офлайн
function ofline() {
    let flagAuthorizationUser = new flagAuthorization("false", "0");
    localStorage.setItem(
        "statusAuthorization",
        JSON.stringify(flagAuthorizationUser)
    );
    entranceBtn(flagAuthorizationUser.flag, flagAuthorizationUser.index);
}

document.getElementById("register").addEventListener("click", () => {
    if (flagPressing === false) {
        flagPressing = true;
    } else {
        flagPressing = false;
    }
    formRegister(flagPressing);
});

function formRegister(flagPressing) {
    if (flagPressing !== false) {
        document.getElementById(
            "form_title"
        ).innerHTML = `<span>Регистрация</span>`;

        document.getElementById("register_button").style.display = "block";
        document.getElementById("enter_button").style.display = "none";

        document.getElementById("register").innerHTML = `<span>Войти</span>`;
    } else {
        document.getElementById("container_authorization").style.display =
            "block";

        document.getElementById("form_title").innerHTML = `<span>Вход</span>`;

        document.getElementById("register_button").style.display = "none";
        document.getElementById("enter_button").style.display = "block";

        document.getElementById(
            "register"
        ).innerHTML = `<span>Зарегистрироваться</span>`;
    }
}

document.getElementById("register_button").addEventListener("click", () => {
    let result = validationData(inputEmail.value, inputPassword.value);
    if (result !== undefined) {
        register(result.inputEmail, result.inputPassword);
    }
});

function register(inputEmail, inputPassword) {
    let noRepeat = true;
    for (let i = 0; i < arrAuthorization.length; i++) {
        if (arrAuthorization[i].email === inputEmail) {
            alert("Пользователь с таким именем уже зарегистрирован!");
            noRepeat = false;
            break;
        }
    }
    if (noRepeat === true) {
        let allAuthorization = new emailPassword(inputEmail, inputPassword);
        arrAuthorization.push(allAuthorization);

        localStorage.setItem(
            "saveAuthorization",
            JSON.stringify(arrAuthorization)
        );

        alert("Поздравляем с регистрацией!");

        authorization(inputEmail, inputPassword);
    }
}

document.getElementById("enter_button").addEventListener("click", () => {
    let result = validationData(inputEmail.value, inputPassword.value);
    if (result !== undefined) {
        authorization(result.inputEmail, result.inputPassword);
    }
});

//проверка на корректность вводимых данных пользователем
function validationData(inputEmail, inputPassword) {
    let validationEmail = inputEmail.match(
        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    );

    if (inputEmail.trim() !== "" && inputPassword.trim() !== "") {
        if (validationEmail !== null) {
            return {
                inputEmail: inputEmail,
                inputPassword: inputPassword,
            };
        } else {
            alert("Введите корректный Email!");
        }
    } else {
        alert("Заполните все поля!");
    }
}

function authorization(inputEmail, inputPassword) {
    let successEmail = false;
    let successPassword = false;
    for (let i = 0; i < arrAuthorization.length; i++) {
        if (arrAuthorization[i].email === inputEmail) {
            successEmail = true;
            if (arrAuthorization[i].password === inputPassword) {
                let flagAuthorizationUser = new flagAuthorization("true", i);
                localStorage.setItem(
                    "statusAuthorization",
                    JSON.stringify(flagAuthorizationUser)
                );
                entranceBtn(
                    flagAuthorizationUser.flag,
                    flagAuthorizationUser.index
                );

                successPassword = true;
            }
            break;
        }
    }

    if (successEmail === false) {
        alert("Неправильно введён Email!");
    }

    if (successPassword === false) {
        alert("Неправильно введён пороль!");
    }
}

function entranceBtn(flagAuthorizationUser, i) {
    if (flagAuthorizationUser === "true") {
        document.getElementById("authorization").style.display = "none";
        document.getElementById("personalArea").style.display = "block";

        document.getElementById(
            "entrancePersonalArea"
        ).innerHTML = `Привет, ${arrAuthorization[i].email}`;

        document.getElementById("container_authorization").style.display =
            "none";
        document.getElementById("container_carousel").style.display = 'flex';
        /* document.getElementById("container_products").style.display = 'flex'; */
    } else {
        document.getElementById("authorization").style.display = "block";
        document.getElementById("personalArea").style.display = "none";
    }
}

document.getElementById("authorization").addEventListener("click", () => {
    inputEmail.value = "";
    inputPassword.value = "";

    formAuthorization();
});
