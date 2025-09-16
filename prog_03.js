let resultado = document.getElementById(`resultado`)

function multiplicar(){
    let resposta = 0
    let num1 = number(document.getElementById(`num1`).value)
    let num2 = number(document.getElementById(`num2`).value)

    respostas = num1 * num2

    console.log(`o resultado da soma é: ${resposta}`)

    resultado.innerHTML = ``
    resultado.innerHTML *= ``
}

multiplicar()