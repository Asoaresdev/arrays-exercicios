const arrayNumbers = [10, 16, 0, 24, 28, 2023]

const arrayStrings = ["Andréa" , "Bernardo", "Asinha"]

const arrayAllTypes = ["andréa", 16, true]

console.log(arrayNumbers);
console.log(arrayStrings);
console.log(arrayAllTypes);





console.log("====================TESTES====================");


console.log(arrayAllTypes.includes("Andréa") && arrayAllTypes.includes(16)); //true
console.log(arrayAllTypes.includes( 16 && "Andréa"))
console.log(arrayAllTypes.includes("andréa",0)); //true
console.log(arrayAllTypes.includes("andréa",1)); //false

const novoArray =[ ...arrayAllTypes]
novoArray.push("banana")
console.log(novoArray);


const fraseQuebrada = ["Olá", "Tudo", "bem", "por aí?"];
const novaFrase = fraseQuebrada.join();
//imprime 'Olá,Tudo,bem,por aí?'

const novaFrase2 = fraseQuebrada.join(' ');//espaço em branco passado 
// entre caracteres
//imprime 'Olá Tudo bem por aí?'
console.log(novaFrase);
console.log(novaFrase2);
console.log(fraseQuebrada.splice(2,1));
console.log(fraseQuebrada);
// const fraseQuebrada = fraseQuebrada.splice()

// let condicao= "chovendo"

// if(condicao){
//     console.log("esta chovendo");
// }else{
//     console.log("não está chovendo");
// }

let condicaoTrue= true
let condicaoFalse= false

if(condicaoFalse){
    console.log("entrei no primeiro if");
}else{
    console.log("entrei no else");
    if(condicaoFalse){
        console.log("entrei no if dentro do else");
    }else{
        console.log("entrei no else dentro do if");
    }
}