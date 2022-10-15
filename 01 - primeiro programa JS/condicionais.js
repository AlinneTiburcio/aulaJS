console.log(`Trabalhando com condicionais`)

const listaDeDestino = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;
// if (idadeComprador >= 18) {
//   console.log('Comprador maior de idade');
//   listaDeDestino.splice(1, 1); //removendo item
// } else if (estaAcompanhada) {
//   console.log('Comprador esta acompanhado');
//   listaDeDestino.splice(1, 1);//removendo item
// } else {
//   console.log('Não é maior de idade, não é possível comprar o destino');
// }

if (idadeComprador >= 18 || estaAcompanhada === true) {
  console.log('Comprador maior de idade');
  listaDeDestino.splice(1, 1); //removendo item
}else {
  console.log('Não é maior de idade, não é possível comprar o destino');
}

console.log('Embarque: \n')
if(idadeComprador >= 18 || temPassagemComprada){
  console.log('Boa viagem!!')
} else {
  console.log('Não é possível embarcar')
}
console.log(listaDeDestino);
