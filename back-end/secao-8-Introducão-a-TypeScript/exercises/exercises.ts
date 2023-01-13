// ./exercises.ts

// PRIMEIRO DIA 

export function getSquareArea(side: number): number {
  return side ** 2;
}

export function getRectangleArea(base: number, height: number): number {
  return base * height;
}

export function getTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, side) => acc + side, 0);
}

export function triangleCheck(
  sideA: number,
  sideB: number,
  sideC: number
  ): boolean {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
  const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
  const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
  return checkSideA && checkSideB && checkSideC;
}

export function getLosangoArea(largerDiagonal: number, smallerDiagonal: number): number {
  return (largerDiagonal * smallerDiagonal) / 2;
}

export function getTrapezeArea(height: number, largerSide: number, smallerSide: number): number {
  return ((largerSide + smallerSide) * height) / 2
}

export function getCircleArea(raio: number): number {
  return Math.PI * raio ** 2
}

// SEGUNDO DIA 

// EXERCICIOS 01

type Passaros = {
  asas:2,
  bicos: 1,
  bipede: true 
};

type Sum = (x: number, y: number) => number;

type Address = {
  lugarPublico: string,
  numero: number,
  distrito: string,
  cidade: string,
  estado: string
};

type PhysicalStatesOfMatter = 'liquid' | 'solid' | 'gaseous1';

type IdentificationDocument = string | number;

type OperationalSystems = 'LINUX' | 'MAC' | 'WINDOWS';

type Vogais = 'A' | 'E' | 'I' | 'O' | 'U';


// FEITO NO VIDEO 

interface Hero {
  _name: string;
  _power: string;
  impactPhrase(phrase: string): string;
}

class Hero {

  constructor(name: string, power: string) {
    this._name = name;
    this._power = power;
  }

  impactPhrase(phrase: string) {
    return `${this._name} fala: ${phrase}`
  }
}

const Hero1 = new Hero('Xablau', 'Barabam');
const Hero2 = new Hero('DevMuuuito', 'DEVENDO 40MIL');


console.log(Hero1.impactPhrase('VQV !'));
console.log(Hero2.impactPhrase('Se estiver com medo, vai com medo mesmo !!!'));

// EXERCICIO 02

// 1 Crie uma classe cujo objeto represente um Cachorro.

interface Dog {
  name: string;
  cutenessLevel: number;
  favoriteToy: string;
};

class Dog {

  constructor(name: string, cutenessLevel: number,  favoriteToy: string) {
    this.name = name;
    this.cutenessLevel = cutenessLevel;
    this.favoriteToy = favoriteToy;
  }

  bark(speaks: string) {
    return `
    Nome: ${this.name}, 
    Nivel de fofura: ${this.cutenessLevel},
    Brinquedo favorito: ${this.favoriteToy},
    fala: ${speaks}`  
  }
}

const Dog1 = new Dog('Fofuxo', 1000, 'bolinha de tenis');


console.log(Dog1.bark('Au Au'));

// 2 Crie uma classe cujo objeto represente uma Casa.

class House {
  owner: string;
  address: string;
  color: string;
  area: number;

  constructor(owner: string, address: string, color: string, area: number) {
    this.owner = owner;
    this.address = address;
    this.color = color;
    this.area = area;
  }
}

// 3 Crie uma classe cujo objeto represente um Voo.

class Flight {
  origin: string;
  destination: string;
  departureDate: Date;
  arrivalDate: Date;
  passengers: number;


  constructor(origin: string, destination: string, departureDate: Date, arrivalDate: Date, passengers: number) {
    this.origin = origin;
    this.destination = destination;
    this.departureDate = departureDate;
    this.arrivalDate = arrivalDate;
    this.passengers = passengers;
  }
}

// EXERCICIO 03

// 1 Crie uma interface cujo objeto represente um Automóvel.

interface Automobile {
  name: string;
  brand: string;
  color: string;
  doors: number;
  gears: number;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
  break: () => void;
}

// 2 Crie uma interface cujo objeto represente um Felino.

interface Feline {
  name: string;
  subfamilies: string;
  walk: () => void;
  hunt: () => void;
  eat: () => void;
  sleep: () => void;
}

// 3 Crie uma interface cujo objeto represente uma Aeronave.

interface Aircraft {
  model: string;
  brand: string;
  wings: number;
  engines: number;
  isManned: boolean;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
}