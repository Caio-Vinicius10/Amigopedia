# Amigopedia
Eu sempre esqueço os limites que tenho com meus amigos, nunca sei qual piada vai e qual não vai ofender.Com essa Amigopedia eu sanei um dos meus problemas.

Enciclopédia interativa dos meus amigos, desenvolvida com HTML, CSS e JavaScript puro.

## Funcionalidades

- Cadastrar amigos e o que eles gostam
- Buscar um amigo pelo nome
- Interface minimalista com suporte a modo claro e escuro

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)

## Como usar

1. Clone o repositório
2. Abra o arquivo `index.html` no navegador
3. altere os amigos ja existentes no dicionário
4. Cadastre seus amigos e pesquise à vontade

## Aprendizados
pratiquei a manipulação o DOM — criar elementos, appendar, remover e esconder sem recarregar a página. 
Entendi a diferença entre selecionar um elemento e guardar um estado em variável, que me travou bastante no começo.
Aprendi a ter eventos que se acionam pelo teclado e clique.
Descobri que refatorar código em funções separadas evita repetição e facilita manutenção.
Pratiquei busca em arrays com `.find()` e `.includes()`, e entendi por que `.toLowerCase()` é essencial pra comparações.
Aprendi a usar `position: fixed` pra criar painéis que ficam fixos na tela independente do scroll.


## Futuras adições desejadas

1. Temas de cor para modo escuro e claro 
-*FEITA*-2. Visualizar a lista inteira dos amigos
3. Adição de imagem

## Nota 

Essa aba serve para mostrar a linha cronologica das edições e meu aprendizado até aqui.

*LEMBRANDO* projeto feito sem muletas da IA!

1. Sei que a adição das mensagens de sucesso e erro foram feitos da forma mais complexa desnecessariamente e que poderia ter feito o elemento p no html e manipular com js. Porém, foi feito com o intuito de praticar um pouco a complexidade de certas coisas do js, por mais que tenha uma maneira mais facil.

2. Adição de botão de modo para alternancia do cadastro. Uma das maiores dificuldade enfrentadas durante meu aprendizado de JavaScript, porém, fiz muito pouco de uso de IA para o codigo.

3. A listagem de amigos foi implementada com forEach e createElement, renderizando o array dinamicamente. O painel usa classList.toggle com !important no CSS para sobrescrever o none: .
A lista se atualiza automaticamente ao cadastrar um novo amigo.
Descobri palavras para usar no gir, como feat, fit, perf, chore etc. passarei a usar

Feito por Caio Vinicius — 2026