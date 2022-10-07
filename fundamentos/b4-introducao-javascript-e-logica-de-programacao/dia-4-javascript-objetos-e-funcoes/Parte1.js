let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

console.log ('Olá', info.personagem);
console.log();

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info.recorente = 'sim';

console.log(info.recorente);
console.log();

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for (let chaves in info) {
    console.log(chaves);
}
console.log();

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let infoDois = {
    personagem: 'Margarida e Tio Patinhas',
    origem: "Pato Donald Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald O último MacPatinhas',
    recorente: 'sim',