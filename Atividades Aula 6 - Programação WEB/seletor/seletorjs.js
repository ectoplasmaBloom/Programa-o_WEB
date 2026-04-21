let notas = [2, 4, 5, 4, 3]

document.querySelector("#result").innerHTML = `
    <h2>A soma das notas é: ${somar()}</h2>
    <h2>A Média das notas é: ${somar()/notas.length}</h2>
`

function somar() {
    let soma = 0
    for(let i in notas) {
        soma += notas[i]
    }
    return soma
}