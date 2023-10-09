const menorValor = 1
const maiorValor = 1000
const numeroS = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}
console.log(numeroS)


const elementMenorValor = document.getElementById('menor-valor')
elementMenorValor.innerHTML = menorValor

const elementMaiorValor = document.getElementById('maior-valor')
elementMaiorValor.innerHTML = maiorValor




