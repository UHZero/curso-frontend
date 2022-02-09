var nota1 = 10;
var nota2 = 5;
var nota3 = 0;
var nota4 = 10;
var media = (nota1 + nota2 + nota3 + nota4)/4;

if (media > 7){
    console.log("aluno aprovado")
}else {
    console.log("aluno em recuperação")
}

if (cor == "preto") {
    meuCarro = "preto";
}else if (cor == "vermelho") {
    meuCarro = "cinza";
}else if (cor == "azul") {
    meuCarro = "azul";
}else {
    console.log ("cor nao encontrada");
}

switch (cor) {
    case 'branco':
        meuCarro = 'branco';
        break;
    case 'vermelho':
        meuCarro = 'vermelho';
        break;
    case 'amarelo':
        meuCarro = 'amarelo';
        break;
    default:
        console.log ('não temos a cor desejada');
}

var km;
var revisao = 10;
for (km = 0; km < revisao; km++ ){
    console.log("apenas " + km + "kms entao pode rodar")
}

var alunos = [
    [8, 6, 1, 10],
    [6, 6, 6, 9],
    [4, 8, 9, 10],
    [8, 8, 8, 8]
]

var nota = 0;

for (var i = 0; i < alunos.length; i++) {
    nota = 0
    notasAluno = alunos[i]
    console.log("Aluno :" + parseInt(i+1));
    console.log("Notas: " + notasAluno);

    for (c = 0; c < notasAluno.length; c++){
        nota += notasAluno[c];
    }

    media = nota / 4;
    if (media >= 7) {
        resultado = 'aprovado';
    }else {
        resultado = 'em recuperação';
    }
    console.log("Média: " + media + " - " + resultado);
}

var hora = 24;
while (hora > 0){
  console.log(hora);
  hora--;
}
console.log("total de horas: " + hora);

let equacoes;
equacoes = [''
    [8, 6],
    [8, 4],
    []
];
function calculoSoma( equacao ) {
	var soma = 0;
  for (i = 0; i < equacao.length; i++){
  
  	soma += equacao[i];
    
  }
  
  resultado = soma;
  
  return resultado;
  
}
console.log (calculoSoma([10, 15]));