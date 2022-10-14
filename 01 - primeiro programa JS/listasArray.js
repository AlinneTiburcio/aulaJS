console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestino = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,  
);

listaDeDestino.push(`Fernando de Noronha`) // adicionando um item na lista
console.log(`Destinos possíveis:`);
console.log(listaDeDestino);

listaDeDestino.splice(1,1); //deleta o elemente a partir da posição 1, delete 1 elemento
console.log(listaDeDestino);
console.log(listaDeDestino[1], listaDeDestino[0]);