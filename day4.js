let numeroSorteado = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let numeroEscolhido = prompt("Escolha um número de 0 a 10");

if(numeroSorteado == numeroEscolhido) {

    alert("Parabéns! Você acertou!");

} else {

    let i = 1;
    
    while(numeroEscolhido != numeroSorteado && i < 3) {

        numeroEscolhido = prompt("Você errou. Tente outra vez");
        i += 1;
        
        if(numeroSorteado == numeroEscolhido) {

            alert("Parabéns! Você acertou na "+i+"ª tentativa!");
        
        }
    }

}

if(numeroEscolhido != numeroSorteado) {

    alert("Que pena! Você não conseguir acertar. O número sorteado foi o "+numeroSorteado+"");

}
