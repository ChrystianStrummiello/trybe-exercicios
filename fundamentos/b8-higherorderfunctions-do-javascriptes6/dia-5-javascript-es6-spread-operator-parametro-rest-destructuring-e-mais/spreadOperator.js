// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maça', 'Manga', 'Abacate'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Creme de Leite', 'Leite Moça', 'Leite'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const saladaDeFrutas = [...fruit, ...additional];
  return saladaDeFrutas;
};

console.log(fruitSalad(specialFruit, additionalItens));