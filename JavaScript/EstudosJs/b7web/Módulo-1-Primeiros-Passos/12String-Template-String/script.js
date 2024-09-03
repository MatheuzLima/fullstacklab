let nome = "Matheus";
let sobreNome = "Lima";

//Metodo atribuicao a variavel com concatenacao
//let nomeCompleto = nome + ' ' + sobreNome;

//Metodo TemplateString "${} expressao so funciona dentro de " `` "
let nomeCompleto = `${nome} ${sobreNome}`;
console.log(nomeCompleto);

//Exemplos

let idade = 90;
let idadeString = `${idade} anos`;
console.log(idadeString);


let num1 = 15
let num2 = 23
let total= `A multiplicaçao deu: ${num1*num2}\nA soma deu: ${num1+num2}\nA divisao deu: ${num1/num2}`
console.log(total)
