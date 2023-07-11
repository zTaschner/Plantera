const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "vinhas": {
        "forca": 40,
        "poder": 20,
        "natureza": 40,
        "velocidade": -5
    },

    "petalas": {
        "forca": 15,
        "poder": 50,
        "natureza": 40,
        "velocidade": -20
    },
    "raizes":{
        "forca": 70,
        "poder": 30,
        "natureza": 35,
        "velocidade": -30
    },
    "esporos":{
        "forca": -20,
        "poder": 15,
        "natureza": -32,
        "velocidade": 42
    },
    "veneno":{
        "forca": 0,
        "poder": 28,
        "natureza": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else { 
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
  
    })
}