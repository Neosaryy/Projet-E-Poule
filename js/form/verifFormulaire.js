var form = document.getElementById('formulaire')

var btn = document.getElementById('valider')
btn.addEventListener('click', Redirection)

var err = document.getElementById('err')

function Redirection(){

    var login = document.getElementById('login').value
    var password = document.getElementById('password').value

    if(login != "" && password != ""){
        btn.type = 'submit'
    }else{
        err.innerHTML = "Veuillez remplir les champs."
    }
}

