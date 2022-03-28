var anoatual = 2022
var participantes = ["João","Maria","Rodrigo","Mário","Matheus","João","Maria","Rodrigo","Mário","Matheus","João","Maria","Rodrigo","Mário","Matheus","João","Maria","Rodrigo","Mário","Matheus","João","Maria","Rodrigo","Mário","Matheus","João","Maria","Rodrigo","Mário","Matheus","João","Maria","Rodrigo","Mário","Matheus","João","Maria","Rodrigo","Mário","Matheus","João","Maria","Rodrigo","Mário","Matheus"]

var entradausuario = "agomes@gmail.com"
var entradasenha = "abc123456"
var anousuario = 2004
let idade = anoatual-anousuario
//Nesta parte eu queria inserir um input para coletar a resposta do usuário,
//porém o Node.js não funciona o comando prompt.

if (idade<=17){
   console.log("Não é permitido menores de 18 anos")
} 

 else if (entradasenha.length < 8){
  console.log("A senha deve ter no mínimo 8 caracteres.")
}
 else{
  console.log("Verificando a existência de vagas...")
}

    if (participantes.length <= 200){
   console.log("Cadastro efetuado com sucesso!")
}
    else {
   console.log("Não há vagas para este evento.")
}
