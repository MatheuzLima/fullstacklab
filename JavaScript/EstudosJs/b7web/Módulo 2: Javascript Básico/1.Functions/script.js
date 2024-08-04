// FUNÇÃO SEM RETORNO
function soma(n1, n2) { //ENTRADA
  const resultado = n1 + n2; //PROCESSAMENTO
  console.log("Resultado: " + resultado) //EXIBE CONSOLE, NÃO SALVA INFORMAÇÃO.
}
soma(37, 35); //CHAMADA PARA FUNÇÃO

// FUNÇÃO COM RETORNO
function divisao(n1, n2) { //2 ENTRADA
  resultado = n1 / n2; //3 PROCESSAMENTO 
  return resultado //4->1 RETORNO DO PROCESSA MENTO PARA ARMAZENAR NA VARIAVEL
}
let saida = divisao(8, 2); //1 CHAMA A FUNÇAO E ARMAZENA O RETORNO NA VARIAVEL
console.log("Retorno armazenando na variavel dentro da function: " + saida) //EXIBE O VALOR DA VARIAVEL
 // OU 
 function divisao1(n1, n2) {
  return `${n1} / ${n2}` 
}
let saida1 = divisao(6, 2);
console.log("Retorno direto: " + saida1)
console.log("====================//====================")
//#6: Função com retorno condicional
console.log("#6: Função com retorno condicional");

function dataNascimento(idade) {
  if (2024 - idade >= 18) {
    return true;
  } else {
    return false;
  }
}

let anoNascimento  = 1996;
let verificacao = dataNascimento(anoNascimento);
//A VARIAVEL VERIFICACAO ESTA ARMAZENANDO TRUE OU FALSE

if(verificacao) { //TRUE OU FALSE CAI NO IF DE ACORDO COM A ESTRUTURA
  console.log("É maior de idade"); //TRUE
} else {
  console.log("É menor de idade"); //FALSE
}
console.log("====================//====================")
