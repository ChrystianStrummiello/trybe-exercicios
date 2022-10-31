const readline = require('readline-sync');

const name = readline.question('Digite seu nome: ');
const age = readline.questionInt('Digite sua idade: ');


console.log(`Meu nome é ${name} e tenho ${age} anos`);