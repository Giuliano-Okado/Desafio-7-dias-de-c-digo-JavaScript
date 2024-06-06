let perguntaBase = prompt("Você quer seguir para área de Front-End ou para a área de Back-End?");

if(perguntaBase.toLowerCase() == 'front-end') {
   
    const perguntaFrontEnd = prompt("Você quer aprender React ou aprender Vue?");

} else if (perguntaBase.toLowerCase() == 'back-end') {

    const perguntaBackEnd = prompt("Você quer aprender C# ou aprender Java?");

} else {

    alert("Resposta inválida")

}

if(perguntaBase.toLowerCase() == 'front-end' || perguntaBase.toLowerCase() == 'back-end' ) {

    let perguntaBase2 = prompt("Você deseja seguir se especializando em "+perguntaBase+" ou seguir se desenvolvendo para se tornar Fullstack? Digite o número 1 para a primeira opção e o número 2 para a segunda opção");

    if(perguntaBase2 == 1){

        alert("Continue praticando e aprimorando seus conhecimentos em "+perguntaBase+"!");

    } else if(perguntaBase2 == 2) {

        alert("Muito bem! Como você já tem um conhecimento sólido de "+perguntaBase+". Falta pouco para você se tornar um desenvolvedor Fullstack!");

    } else {

        alert("Essa não é uma resposta válida");

    }

    let continuar = 'SIM';

    while (continuar.toLowerCase() == 'sim') {

        let perguntaBase3 = prompt("Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?");
        continuar = prompt("Deseja Continuar? Digite SIM para continuar e NÃO para parar");

    }

}

