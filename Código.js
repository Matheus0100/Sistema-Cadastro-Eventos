var emailusuario = ["agomes@gmail.com"]
var senhausuario = 123456
var anoatual = 2022

var entradausuario = "agomes@gmail.com"
var entradasenha = 123456
var anousuario = 2004
let idade = anoatual-anousuario
//Nesta parte eu queria inserir um input para coletar a resposta do usuário,
//porém o Node.js não funciona o comando prompt.

if (idade<=17){
   console.log("Não é permitido menores de 18 anos")
}

    if (emailusuario==entradausuario && senhausuario==entradasenha){
   console.log("Login efetuado com sucesso")
}
    else {
   console.log("Email ou senha incorretos")
}
