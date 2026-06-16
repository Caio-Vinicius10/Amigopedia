//Abrir a lista de amizade

const amigos = [
  { nome: "Giselle", gosta: ["JiuJitsu"] },
  { nome: "Lucas", gosta: ["Futebol"] },
  { nome: "Ana", gosta: ["Música"] }
]

const btnLista = document.querySelector("#btn-lista")
const listaView = document.querySelector("#lista-view")
const ulAmigos = document.querySelector("#ulAmigos")

varrerArray()
document.querySelector("#contador").textContent = "Quantidade de amigos:" + amigos.length

btnLista.addEventListener ("click", abrirLista)

function abrirLista() {
listaView.classList.toggle('visivel')
}

function varrerArray(){
  ulAmigos.innerHTML = ""
  amigos.forEach(function(amigo) {

  let listaAmigos = document.createElement("li")
  const botaoRemover = document.createElement("button")

  botaoRemover.id = "botaoLista"
  botaoRemover.className = "botaoLista"
  botaoRemover.textContent = "remove"
  botaoRemover.dataset.nome = amigo.nome

  listaAmigos.id = "amigoLista"
  listaAmigos.textContent = amigo.nome

  botaoRemover.addEventListener ("click", removeAmigo)
   listaAmigos.appendChild(botaoRemover)   
   ulAmigos.appendChild(listaAmigos) 
  })
}

function removeAmigo(evento) {
  const nome = evento.target.dataset.nome
  const index = amigos.findIndex(function(amigo) {
    return amigo.nome === nome
  })
  amigos.splice(index, 1)
  varrerArray()
  document.querySelector("#contador").textContent = "Quantidade de amigos:" + amigos.length

}

//Busca//
const botao = document.querySelector("#btn-buscar")
const inputbusca= document.querySelector("#input-nome")
const resultado = document.querySelector("#resultado")

function buscar(){
  if (inputbusca.value.trim() === ""){
   AlertaErro2.appendChild(AlertaMensagem2)
   return 
  }else {
    AlertaMensagem2.remove()
  }

  
  const nomeBuscado = inputbusca.value.trim()

  const amigaEncontrada = amigos.find(function(amigo) {
    return amigo.nome.toLowerCase().includes(nomeBuscado.toLowerCase()) 
})

  if (amigaEncontrada) {
    resultado.textContent = "Esse amigo gosta de: " + amigaEncontrada.gosta.join(", ")
  } else {
    resultado.textContent = "Amigo não encontrado"
 }
}

botao.addEventListener("click", buscar)
inputbusca.addEventListener("keydown", function(evento){
   if (evento.key === "Enter"){
      evento.preventDefault()  
      buscar()
  }
 })



//Adicionar novos gostos//

const botaoAdicionar = document.querySelector("#btn-adicionar")
const inputCadastroNome = document.querySelector("#input-cadastro-nome")
const inputCadastroGosta = document.querySelector("#input-cadastro-gosta")
const btnModo = document.querySelector("#btn-modo")

let modoAtual = "caracteristica"

botaoAdicionar.addEventListener("click", cadastrar)
inputCadastroGosta.addEventListener("keydown", function(evento){
   if (evento.key === "Enter"){
      evento.preventDefault()  
      cadastrar()
  } 
})

btnModo.addEventListener("click", alternarModo)

function alternarModo() {
  if (modoAtual === "amigo") {
    modoAtual = "caracteristica"
    document.querySelector("#btn-modo").textContent = "CARACTERISTICAS"
    document.querySelector("#Modos").textContent = "ADICIONAR CARACTERISTICAS"
  inputCadastroNome.placeholder = "Nome do amigo existente"
  inputCadastroGosta.placeholder = "Qual o novo gosto dele?"
  } else {
    modoAtual = "amigo"
    document.querySelector("#btn-modo").textContent = "AMIGO"
    document.querySelector("#Modos").textContent = "ADICIONAR AMIGO"
  inputCadastroNome.placeholder = "Nome do seu novo amigo"
  inputCadastroGosta.placeholder = "Qual o gosto que você descobriu sobre ele?"
  }
}

function cadastrar() {
  if (modoAtual === "caracteristica") {
    cadastro()
  } else {
    cadastroAmigo()
  }
}

function cadastro(){
  if (inputCadastroNome.value.trim() === "" || inputCadastroGosta.value.trim() === "") {
    return AlertaErro1.appendChild(AlertaMensagem1)   
  }else{
    AlertaMensagem1.remove()
}

  const nomeDigitado = inputCadastroNome.value.trim()
  const gostaDigitado = inputCadastroGosta.value.trim()

  const amigoExistente = amigos.find(function(amigo) {
    return amigo.nome.toLowerCase().includes(nomeDigitado.toLowerCase())
})


AlertaMensagemSucesso1.remove()

  if (amigoExistente) {
    amigoExistente.gosta.push(gostaDigitado)
  AlertaSucesso1.appendChild(AlertaMensagemSucesso1)
      setTimeout(function(){
      AlertaMensagemSucesso1.remove()
    }, 2000)
  }
}
//cadastro de amigo//

function cadastroAmigo(){
  if (inputCadastroNome.value.trim() === "" || inputCadastroGosta.value.trim() === "") {
    return AlertaErro1.appendChild(AlertaMensagem1)   
  }else{
    AlertaMensagem1.remove()
}

  const nomeDigitado = inputCadastroNome.value.trim()
  const gostaDigitado = inputCadastroGosta.value.trim()

AlertaMensagemSucesso1.remove()

    amigos.push({ nome: nomeDigitado, gosta: [gostaDigitado] })
    varrerArray()
  document.querySelector("#contador").textContent = "Quantidade de amigos:" + amigos.length
  AlertaSucesso1.appendChild(AlertaMensagemSucesso1)
      setTimeout(function(){
      AlertaMensagemSucesso1.remove()
    }, 2000)
}

const AlertaSucesso1 = document.querySelector("#AlertaErro1")
const AlertaMensagemSucesso1 = document.createElement("p")
  AlertaMensagemSucesso1.id = "Alert3"
  AlertaMensagemSucesso1.textContent = "Caracteristica Adicionada!"

const AlertaSucesso2 = document.querySelector("#AlertaErro1")
const AlertaMensagemSucesso2 = document.createElement("p")
  AlertaMensagemSucesso2.id = "Alert3"
  AlertaMensagemSucesso2.textContent = "Amizade Adicionada!"

const AlertaErro1 = document.querySelector("#AlertaErro1")
const AlertaMensagem1 = document.createElement("p")
  AlertaMensagem1.id = "Alert1"
  AlertaMensagem1.textContent = "Você não preencheu um dos campos!"

const AlertaErro2 = document.querySelector("#AlertaErro2")
const AlertaMensagem2 = document.createElement("p")
  AlertaMensagem2.id = "Alert2"
  AlertaMensagem2.textContent = "Você não preencheu o campo de busca!"

//modo escuro//

function alternarTema() {
  const html = document.documentElement
  html.classList.toggle('light')
}
