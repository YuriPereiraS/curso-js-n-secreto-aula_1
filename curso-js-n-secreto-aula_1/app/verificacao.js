function verificaChute(chute) {
    const numero = +chute
    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor invalido</div>'
    }

    if (numeroAlemDoPermitido(numero)) {
        console.log(`numero deve estar entre ${menorValor} e ${maiorValor}`)
        elementoChute.innerHTML += `<div>numero deve estar entre ${menorValor} e ${maiorValor}</div>`
    }

    if (chute== 'game over') {
        document.body.innerHTML = `
            <h2>GAME OVER</h2>
            
            <button id="jogar-novamente" class="btn-jogar">jogar novamente</button>
        `
    }

    if (numero === numeroS) {
        document.body.innerHTML = `
            <h2>você acertou</h2>
            <h3>Até que vc não é tão ruim assim</h3>
            <h3>O número era ${numeroS}</h3>
            <button id="jogar-novamente" class="btn-jogar">jogar novamente</button>
        `
    } else if (numero > numeroS) {
        elementoChute.innerHTML +=
        `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        <h3>Seu fraco dessiste logo e fala "Game Over"</h3>
        `
    } else {
        elementoChute.innerHTML += 
        `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        <h3>Seu fraco dessiste logo e fala "Game Over"</h3>
        `
    }


}
function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroAlemDoPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
} )