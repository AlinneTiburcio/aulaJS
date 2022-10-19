console.log(`Trabalhando com loops de repetição`)

const listaDeDestino = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`)

const idadeComprador = 22
const estaAcompanhada = false
let temPassagemComprada = false
const destino = 'Bor'

console.log('\n Destinos possíveis:')
console.log(listaDeDestino)

const podeComprar = idadeComprador >= 18 || estaAcompanhada === true

let contador = 0
let destinoExiste = false;

while (contador < 3) {
  
  if (listaDeDestino[contador] == destino){
    console.log('Destino existe');
    destinoExiste = true;
    break;
  } 
  contador++
}

if(podeComprar && destinoExiste){
  console.log('Boa Viagem!')
} else {
  console.log('Não há passagem para esse destino, tente novamente nas opções informado acima!')
}


