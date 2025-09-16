let resultado = document.getElementById(`resultado`)

function somar(){
    
    let resposta = 0
    let num1 = Number(document.getElementById(`num1`).value)
    let num2 = Number(document.getElementById(`num2`).value)

    resposta = num1 + num2

    console.log(`o resultado da soma é: ${resposta}`)

    resultado.innerHTML = `` 
    resultado.innerHTML += `o resultado da soma é: ${resposta}` 
}

somar()