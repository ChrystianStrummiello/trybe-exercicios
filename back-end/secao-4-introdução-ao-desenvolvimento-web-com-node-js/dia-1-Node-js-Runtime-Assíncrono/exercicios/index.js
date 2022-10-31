const path = require('path'); // modulo interno


console.log(path.dirname('/usr/share/gnome'));
console.log(path.resolve('usr', 'share', 'gnome'));
console.log(path.resolve('/', 'usr', 'share', 'gnome'));

const temp = require('./temp'); // modulo local armazenando em uma const

console.log(temp.fahrenheitTocelsius(500));
console.log(temp.celsiusToFahrenheit(200));

const { celsiusToFahrenheit, fahrenheitTocelsius } = require('./temp'); // modulo local sem ter que armazenar em const 

console.log(fahrenheitTocelsius(500));
console.log(celsiusToFahrenheit(200));