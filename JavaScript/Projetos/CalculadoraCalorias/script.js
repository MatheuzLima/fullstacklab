function pulaLinha() {
    document.write("<br><br>");
}
function mostrar(texto) {
    document.write(texto);
    pulaLinha();
}
function calcImc(peso, altura){
    let imc = (Math.round(10*peso/(altura**2)))/10;

    return imc;
}
// function pesoIdeal(altura){
//     mostrar("Busque manter seu peso entre "+((Math.round(18.5*(altura**2)*10))/10)+" e "+((Math.round(24.9*(altura**2)*10))/10)+" kg.")
// }


const form = document.getElementById('imcForm');

// Adiciona um event listener para o evento 'submit' do formulário
form.addEventListener('submit', function(event) {
    // Previne o envio padrão do formulário
    event.preventDefault();


    // let nome = prompt("Nome: ");//
let peso = parseFloat(document.getElementById('weight'));
let altura = parseFloat(document.getElementById('height'))/100;
let result = calcImc(peso, altura);

mostrar(peso+" kg e "+altura+"m.");
document.write("<hr>Seu IMC = "+result+" - ");

if (result <= 18.5) {
    mostrar(nome + "   Seu imc é "+ Math.round(result) + " você esta abaixo do peso!");
} else if (result >= 18.5 &&  result <= 24.9) {
    mostrar(nome + "   Seu imc é " + Math.round(result) + " você está com o seu peso ideal!");
} else if (result >= 25 && result <= 29.9) {
    mostrar(nome + "   Seu imc é "+ Math.round(result) + " você está acima do peso ideal!");
} else if (result >= 30 ) {
    mostrar(nome + "   Seu imc é "+ Math.round(result) + " você está obeso!");
}

});

// document.write("<hr><h3>Tabela de referência</h3>")
// mostrar("Menor que 18,5 = Peso baixo")
// mostrar("Entre 18,5 e 24,9 = Peso normal")
// mostrar("Entre 25,0 e 29,9 = Sobrepeso")
// mostrar("Emtre 30,0 e 34,9 = Obesidade Grau 1")
// mostrar("Emtre 35,0 e 39,9 = Obesidade Grau 2")
// mostrar("Maior que 40,0 = Obesidade Grau 3")