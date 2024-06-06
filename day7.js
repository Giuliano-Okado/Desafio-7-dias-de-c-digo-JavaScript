let operacao = "";

function operadorSoma(numero1, numero2) {
    return Number(numero1) + Number(numero2);
}

function operadorSubtracao(numero1, numero2) {
    return Number(numero1) - Number(numero2);
}

function operadorMultiplicacao(numero1, numero2) {
    return Number(numero1) * Number(numero2);
}

function operadorDivisao(numero1, numero2) {
    return Number(numero1) / Number(numero2);
}

while(operacao != 'sair') {

    operacao = prompt('Qual operação você deseja realizar? Escolha entre "soma", "subtração", "multiplicação" e "divisão" ou "sair" para sair');
    if(operacao == 'sair') {
        alert("Até a próxima!");
        break;
    } else if (operacao == 'soma' || operacao == 'subtração' || operacao == 'multiplicação' || operacao == 'divisão') {
        let num1 = parseFloat(prompt('Escolha o primeiro número'));
        let num2 = parseFloat(prompt('Escolha o segundo número'));

        switch(operacao) {
            case 'soma':
                alert(operadorSoma(num1,num2));
                break;
            case 'subtração':
                alert(operadorSubtracao(num1,num2));
                break;
            case 'multiplicação':
                alert(operadorMultiplicacao(num1,num2));
                break;
            case 'divisão':
                alert(operadorDivisao(num1,num2));
                break;
        }
    } else {
        alert('Operação inválida');
    }
}
