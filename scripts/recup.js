let email = document.getElementById('entText');
let reportErro = document.getElementById('reportErro')
let form = document.querySelector('form')


email.addEventListener("keyup", () =>{
    if(validaEmail(email.value) !== true){
        reportErro.textContent = "Digite um email válido";
    }else{
        reportErro.textContent = "";
    }
})

function validaEmail(email){
    let padraoEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return padraoEmail.test(email);
}

form.addEventListener("submit", (e) =>{
    if(email.value == ''){
        alert("Você precisa preencher o seu email")
    }else if(validaEmail(email.value) === true){
    reportErro.textContent = "";
    console.log(email.value);
    alert("O link de recuperação de senha foi enviado para seu email")
}else{
    alert("Requisição não atendida")
}
    //e.preventDefault();
})