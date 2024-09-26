/*
OOP - object oriented programming
- turi savybes
- turi funkcionaluma, kuris manipuliuoja savo savybemis
*/

import { Cat } from "./js/Cat.js";
import { Dog } from "./js/Dog.js";

const reksas = new Dog('Rex', 'black');
const rainis = new Cat('Rainis', 'grey');
// console.log(reksas);
// console.log(rainis);
console.log(reksas.hi());
console.log(rainis.hi());

/*
CAR

- brandas
- modelis
- kuro bako talpa
- kuro sanaudos 100km

- ijungtiVarykli()
- isjungtiVarykli()
- vaziuoti(atstumas)
- uzpiltiKuro(litrai)
- kiekLikoKuroBake()
- kokiAtstumaGaliDarNuvaziuoti()
- arGaliPrivaziuotiDegaline(atstumas km)
*/