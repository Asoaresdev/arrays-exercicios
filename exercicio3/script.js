
const arrayNumbers = [10, 16, 0, 24, 28, 2023]

const arrayStrings = ["Andréa" , "Bernardo", "Asinha"]

const arrayAllTypes = ["andréa", 16, true]



const arrayNumbersCopy = arrayNumbers.slice()
const arrayStringsCopy = arrayStrings.slice()
const arrayAllTypessCopy = arrayAllTypes.slice()

console.log("===== ADICIONA NUMBER NO INICIO DO PRIMEIRO ARRAY====");

//com unshift
arrayNumbersCopy.unshift(1)


//com splice
// arrayNumbersCopy.splice(0,0,1)

console.log(arrayNumbers);
console.log(arrayNumbersCopy);

console.log("===== REMOVA ULTIMO ITEM DO SEGUNDO ARRAY====");

//com SPLICE
// arrayStringsCopy.splice(arrayStringsCopy.length-1, 1)

//com POP
arrayStringsCopy.pop()

console.log(arrayStrings);
console.log(arrayStringsCopy);

console.log("===== REMOVA SEGUNDO ITEM DO TERCEIRO ARRAY====");
arrayAllTypessCopy.splice(1, 1)
console.log(arrayAllTypes);
console.log(arrayAllTypessCopy);