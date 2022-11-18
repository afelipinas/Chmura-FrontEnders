let email = document.getElementById('entEmail');
let password = document.getElementById('password');
let form = document.querySelector("form");
let reportEmail = document.getElementById('reportEmail');
let reportSenha = document.getElementById('reportSenha');

email.addEventListener("keyup", () =>{
    if(validaEmail(email.value) !== true){
        reportEmail.textContent = "Digite um email válido";
    }else{
        reportEmail.textContent = "";
    }
})

password.addEventListener("keyup", () =>{
    if(validaSenha(password.value) !== true){
        reportSenha.textContent = "Sua senha deve conter no mínimo 6 caracteres, uma letra maiúscula, um símbolo e um número.";
    }else{
        reportSenha.textContent = '';
    }
})

function validaEmail(email){
    let padraoEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return padraoEmail.test(email);
}

function validaSenha(password){
    let padraoSenha = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return padraoSenha.test(password);
}

form.addEventListener("submit", () =>{
    if(email.value == '' && password.value == ''){
        alert("Você precisa preencher todos os campos")
    }else if(validaEmail(email.value) === true && validaSenha(password.value) === true){
    reportEmail.textContent = "";
    reportSenha.textContent = '';
    console.log(email.value);
    console.log(password.value);
    alert("Login realizado com sucesso!")
}else{
    alert("Requisição não atendida")
}
    //e.preventDefault();
})