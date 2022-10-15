console.log(`Trabalhando com loops de repetição`)

const listaDeDestino = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`)

const idadeComprador = 22
const estaAcompanhada = false
let temPassagemComprada = false
const destino = 'São Paulo'

console.log('\n Destinos possíveis:')
console.log(listaDeDestino)

const podeComprar = idadeComprador >= 18 || estaAcompanhada === true

let contador = 0

while (contador < 3) {
  if (listaDeDestino[contador] == destino){
    console.log('Destino existe');
  } else{
    console.log('Destino não existe')
  }
  contador++
}
