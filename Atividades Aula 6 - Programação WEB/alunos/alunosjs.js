function main() {
    let alunos = parseInt(prompt("Numero de alunos: "));
    let vetor = new Array(alunos);

// Preenchendo o vetor
for(let count=0; count<alunos; count++)
    vetor[count] = parseFloat( prompt("Aluno " + (count+1) + ":"))
// Somando todos os elementos
let soma = vetor.reduce((t, n) => t + n,0);
// Calculando a média dos elementos
let media = soma/alunos;


document.querySelector("#result").innerHTML = `
    <h2>N° de alunos: ${alunos}</h2>
    <h2>Média da turma: ${media.toFixed(2)}</h2>`;
}