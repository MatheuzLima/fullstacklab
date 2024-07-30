//Módulo 1: Primeiros Passos

//condicionail if else

let idade = 28;

if (idade >= 18) {
  console.log("Maior de Idade")
} else {
  console.log("menor de idade")
}
// Simbolos
// < Menor
// > Maior
// == Igual
// <= Menor igual
// >= Maior igual
// != Diferente
//####################################

//#14.Condicional == e === #
console.log("#14.Condicional == e === #")

let idade2 = 20;
//com == (igual igual) / se a variavel idade2 for igual ao 
//numero parametro 20 do if, ira aparecer no console caso contrario nao
if (idade2 == 20) {
  console.log(`Idade2 é ${idade2} anos`)
}
//O == faz a leitura mais simples entao, number e String serao lidas 
let idadeString = "20"
if (idadeString == 20) {
  console.log(`idadeString é ${idadeString} anos`)
}

// cometada porque o "===" nao le esse tipo de variavel
//let idadeString2 = "20"
let idadeString2 = 20
if (idadeString2 === 20) {
  console.log(`idadeString2 é ${idadeString2} anos`)
}

//Com diferente !==
let idadeString3 = 21
if (idadeString3 !== 20) {
  console.log(`idadeString3 é diferente ${idadeString3} anos`)
}
//####################################

//#15: Multi-condicionais (&& e ||)
console.log("#15: Multi-condicionais (&& e ||)")

// let idade4 = 90;
// if (idade >= 18) {

//   if (idade4 <= 60) {
//     console.log("Voce e adulto");
//   }
// }

//Usando o && e/and 
let idade4 = 30;
if (idade4 >= 18 && idade4 <= 60) {
  console.log("idade4 Voce e adulto com &&")
}

//Usando o || ou/or
let idade5 = 30;
if (idade5 >= 18 || idade5 <= 60) {
  console.log("idade5 Voce e adulto com ||")
}
//####################################

//#16: Condicional Dupla (if else)
console.log("#16: Condicional Dupla (if else)");

let idade16 = 20;
if (idade16 < 18) {
  console.log("idade16 Voce é uma criança");
} else if (idade16 <= 18 && idade16 >= 60) {
  console.log("idade16 Você é uma adulto");
} else if (idade16 >= 60) {
  console.log("idade16 Você é um idoso");
}
//####################################

//#17: Desmistificando o IF
console.log("#17: Desmistificando o IF");
//Variavel boolean
let desIf = 22;
let verificacao = desIf > 18;

if (verificacao) {
  //Se boolean for verdadeiro ele cai no if
  console.log("verificacao boolean Voce é uma criança")
} else {
  //Se falso ele cai no else
  console.log("verificacao boolean Voce é um adulto")
}
//####################################
//Exercício de condicional #2
console.log("Exercício de condicional #2")

//resultado TRUE
let x = 10;
let y = 5;
console.log(x > y);

//resultado FALSE
let z = "10";
let c = 10;
console.log(z === c);

//condicional para saber se o preco da carne esta barato ou caro
let preco = 40.3;
if (preco <= 45) {
  console.log("O preço da carne esta bom! FAZ O L ")
} else {
  console.log("A carne ta muito cara! Lula ladão!")
}

//####################################
//Condicional Ternário | if em uma linha so 2 condicoes
let isMember = true;
let shipping = isMember ? 2 : 10;
console.log("Frete: " + shipping)

let age = 60;
let isAdulte = ((age >= 18 && age <= 60) ? "Voce é adulto" : "Você é menor");
console.log(isAdulte)

//####################################
//#20: Switch
console.log("#20: Switch")
const tipoRabeta = 'pin'
console.log('rabeta: ' + tipoRabeta)
switch (tipoRabeta) {
  case 'pin'
    : console.log('sua rebeta sera pin');
    break;
  case 'swallow'
    : console.log('sua rebeta sera swallow');
    break;
  case 'squash'
    : console.log('sua rebeta sera squash');
    break;
}

//Exercicio sugerido pelo chatGPT
//Verificaor de dias da semana
// const dayNumber = parseInt(prompt('Digite um numero da semana de 1 a 7: '));
// switch (dayNumber) {
//   case 1
//     : console.log("Domingo: " + dayNumber);
//     break;
//   case 2
//     : console.log("Segunda-feira: " + dayNumber);
//     break
//   case 3
//     : console.log("Terça-feira: " + dayNumber);
//     break
//   case 4
//     : console.log("Quarta-feira: " + dayNumber);
//     break
//   case 5
//     : console.log("Quinta-feira: " + dayNumber);
//     break
//   case 6
//     : console.log("Sexta-feira: " + dayNumber);
//     break
//   case 7
//     : console.log("Sábado: " + dayNumber);
//     break
//   default
//     : console.log("Voce não escolheu um numero correspondente ao dia da semana")
//     break
// }

//calculadora
// let calc1 = parseFloat(prompt("Digite o primeiro numero do calculo: "));
// const operation1 = prompt("Digite o tipo de operação (+, -, *, /):");
// let calc2 = parseFloat(prompt("Digite o segundo numero do calculo: "));
// switch (operation1) {
//   case '+'
//     : console.log(calc1 + calc2)
//     break
//   case '-'
//     : console.log(calc1 - calc2)
//     break
//   case '*'
//     : console.log(calc1 * calc2)
//     break
//   case '/'
//     : console.log(calc1 / calc2)
//     break
// }
//EXE DO CHAT
// const num1 = parseFloat(prompt("Digite o primeiro número:"));
// const num2 = parseFloat(prompt("Digite o segundo número:"));
// const operation = prompt("Digite a operação (+, -, *, /):");

// switch (operation) {
//   case "+":
//     console.log(`Resultado: ${num1 + num2}`);
//     break;
//   case "-":
//     console.log(`Resultado: ${num1 - num2}`);
//     break;
//   case "*":
//     console.log(`Resultado: ${num1 * num2}`);
//     break;
//   case "/":
//     if (num2 !== 0) {
//       console.log(`Resultado: ${num1 / num2}`);
//     } else {
//       console.log("Erro: Divisão por zero.");
//     }
//     break;
//   default:
//     console.log("Operação inválida. Por favor, digite +, -, * ou /.");
// }

// DO CHAT: Exercício 3: Conversor de Notas para Conceitos
const grade = parseInt(prompt("Digite a nota (0 a 100):"));
switch (true) {
  case (grade >= 90 && grade <= 100):
    console.log("Conceito: A");
    break;
  case (grade >= 80 && grade < 90):
    console.log("Conceito: B");
    break;
  case (grade >= 70 && grade < 80):
    console.log("Conceito: C");
    break;
  case (grade >= 60 && grade < 70):
    console.log("Conceito: D");
    break;
  case (grade >= 0 && grade < 60):
    console.log("Conceito: F");
    break;
  default:
    console.log("Nota inválida. Por favor, digite uma nota entre 0 e 100.");
}

//####################################