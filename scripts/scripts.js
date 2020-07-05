document.querySelector('#authorization').addEventListener('click', () =>{
    formAuthorization();
})

formAuthorization();

function formAuthorization (){
    document.querySelector('.container2').innerHTML = 
    `<div class="wrapperForm" id="wrapperForm">
        <div class="inputForm">
            <h1 class="form_title" id="form_title"><span>Вход</span></h1>
            <div class="form_group">
                <input type="text" id="form_inputLogin" class="form_input" placeholder=" ">
                <label for="form_inputLogin" class="form_label">Email</label>
            </div>
            <div class="form_group">
                <input type="password" id="form_inputPassword" class="form_input" placeholder=" ">
                <label for="form_inputPassword" class="form_label"><span>Пароль</span></label>
            </div>
            <button class="form_button" id="form_button"><i class="fas fa-sign-in-alt"></i> <span>Войти</span></button>
            <button class="register_button" id="register_button"><i class="fas fa-clipboard-list"></i> <span>Зарегистрироваться</span></button>
            <p class="register" id="register"> <span>Зарегистрироваться</span></p>
        </div>
    </div>`;

    document.getElementById('register_button').style.display = 'none';
}