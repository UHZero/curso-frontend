/*var soma = [
    [10, 15],
    ["10", 2],
    [10, true],
    ["dez", true],
    [10, false],
    [true, true]  

]

var somatoria = 0;

for (var i = 0; i < soma.length; i++) {
    somatoria = 0
    resultado = soma[i]
    console.log("equação :" + parseInt(i+1));
    console.log("soma: " + resultado);

    for (c = 0; c < resultado.length; c++){
        somatoria += resultado[c];
    }

    total = somatoria;
    console.log("total: " + total);
}
*/

//resultado, tipo e código.
//[10, 15] = 25, typeof = "number"
//["10", 2] = '102', typeof = "string"
//[10, true] = 11, typeof = "number"
//["dez", true] = 'deztrue', typeof = "string"
//[10, false] = 10, typeof = "number"
//[true, true] = 2, typeof = "number"


var soma = [
    [10, 15],
    ["10", 2],
    [10, true],
    ["dez", true],
    [10, false],
    [true, true]  

]

for (var indiceDeCadaEquacao = 0; indiceDeCadaEquacao < soma.length; indiceDeCadaEquacao++){
    calculo = 0
    equacao = soma[indiceDeCadaEquacao]
    console.log("soma: " + equacao);

    for (cadaContaDaArraySOMA = 0; cadaContaDaArraySOMA < equacao.length; cadaContaDaArraySOMA++){
        calculo += equacao[cadaContaDaArraySOMA];
    }

    total = calculo;
    console.log("total: " + total);

}

// boleanos
//typeof = boleanos

const bolean = [];
bolean [0] = ["10"== 10];
bolean [1] = [5 + 5 == 10];
bolean [2] = ["5" + "5" == 10];
bolean [3] = ["10" === 10];
bolean [4] = [10 < 11];
bolean [5] = [10 > 12];
bolean [6] = [10 <= 10.1];
bolean [7] = [10 > 9.99];
bolean [8] = [10 != "dez"];
bolean [9] = ["5" * 2 > 9];


for (var i = 0; i < bolean.length; i++){
    equacaoBolean = bolean[i];
    console.log("equação [" + parseInt(i) + "] " + equacaoBolean);
}

//multiplicação e divisão
//variavel multDiv os tipos são numéricos e float.

var multDiv = [];
multDiv [0] = ["10" * 2];
multDiv [1] = ["10" / 3];
multDiv [2] = ["10" % 3];
multDiv [3] = [0 / 1];
multDiv [4] = [(10 + 10) * 2];
multDiv [5] = [10 + 10 * 2];
multDiv [6] = [10 * false];


for (var i = 0; i < multDiv.length; i++){
    resultado = multDiv[i];
    console.log("equação [" + parseInt(i) + "] " + resultado);
}

//Exercicio 2

var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";

//letra (a) branco == “branco”
if (branco == "branco"){
    console.log("Verdadeiro");
}else {
    console.log("Falso");
}

//letra (b) branco == cinza
if (branco == cinza){
    console.log("Verdadeiro");
}else {
    console.log("Falso");
}

//letra (c) carro === branco
if (carro === branco){
    console.log("Verdadeiro")
}else {
    console.log("Falso")
}

//letra (d) var cavalo = carro == "preto" ? "cinza" : "marron";
//devolve cavalo = "cinza" e carro = "preto"

//letra (e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada
//de 3.000? Demonstre a operação

var valor = 30000;
var prestacao = 750;
for (p = 3000; p < valor; p + prestacao){
    total = p += prestacao;
    console.log(total); // até aqui funciona
}
//    for (i = 0; i < parcela; i++){
//        parcela = p += prestacao[i];
//        console.log("pestação: " + parseInt(i+1));
//    } - tentei fazer sair um contagem junto com as parcelas mas nao obtive sucesso, total de 36 parcelas


//letra (f)]
var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";

var x = branco + preto + cinza + carro
x.length
//out: 21