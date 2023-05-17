// import { arrayNumbers } from "../exercicio1/script.js";
// console.log("=============importando de  outro arquivo========" );
// export const arrayNumbers = [10, 16, 0, 24, 28, 2023]


const arrayNumbers = [10, 16, 0, 24, 28, 2023]
//quantidade itens     1  2  3   4   5    6
//index dos itens      0  1  2   3   4    5

const arrayStrings = ["Andréa" , "Bernardo", "Asinha"]

const arrayAllTypes = ["andréa", 16, true]

console.log("\n");
console.log("===QUANTIDADE DE ITENS===");
console.log(arrayNumbers.length);
console.log(arrayStrings.length);
console.log(arrayAllTypes.length);

console.log("\n");
console.log("===PRIMEIRO DO PRIMEIRO, SEGUNDO DO SEGUNDO, TERCEIRO DO TERCEIRO===");
console.log(arrayNumbers[0]);
console.log(arrayStrings[1]);
console.log(arrayAllTypes[2]);

console.log("\n");
console.log("===VERIFICAÇÃO COM INCLUDES===");
console.log(arrayNumbers.includes(10));
console.log(arrayAllTypes.includes(10));



