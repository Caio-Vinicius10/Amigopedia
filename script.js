const amigos = [
  { nome: "Giselle", gosta: ["dançar"] },
  { nome: "Lucas", gosta: ["futebol"] },
  { nome: "Ana", gosta: ["música"] }
]

const botao = document.querySelector("#btn-buscar")
const input = document.querySelector("#input-nome")
const resultado = document.querySelector("#resultado")

botao.addEventListener("click", function() {
  const nomeBuscado = input.value

  const amigaEncontrada = amigos.find(function(amigo) {
    return amigo.nome === nomeBuscado
  })

  if (amigaEncontrada) {
    resultado.textContent = "Esse amigo gosta de: " + amigaEncontrada.gosta.join(", ")
  } else {
    resultado.textContent = "Amigo não encontrado"
  }
})


//Adicionar novos gostos//
const botaoAdicionar = document.querySelector("#btn-adicionar")
const inputCadastroNome = document.querySelector("#input-cadastro-nome")
const inputCadastroGosta = document.querySelector("#input-cadastro-gosta")

botaoAdicionar.addEventListener("click", function() {
  const nomeDigitado = inputCadastroNome.value
  const gostaDigitado = inputCadastroGosta.value

  const amigoExistente = amigos.find(function(amigo) {
    return amigo.nome === nomeDigitado
  })

  if (amigoExistente) {
    amigoExistente.gosta.push(gostaDigitado)
    alert("Caracteristica adcionada")
  } else {
    amigos.push({ nome: nomeDigitado, gosta: [gostaDigitado] })
  }
})

//modo escuro//

function alternarTema() {
  const html = document.documentElement
  html.classList.toggle('light')

}