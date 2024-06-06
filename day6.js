let frutas = [];
let laticinios = [];  
let congelados = [];  
let doces = [];
let listaParcial = [];
let adicionarNaLista = 1;

while(adicionarNaLista == 1 || adicionarNaLista == 2) {

    adicionarNaLista = prompt("Deseja adicionar ou remover algo na sua lista de compras? Responda com 1 para adicionar, 2 para remover e 3 para sair");
    if(adicionarNaLista == 1) {
        
        let produtoAdicionado = prompt("Qual produto você deseja inserir?");
        let categoria = prompt("Em qual categoria esse produto se encaixa? Escolha entre frutas, laticinios, congelados e doces");
 
        if(categoria == 'frutas') {
            frutas.push(produtoAdicionado);
        } else if(categoria == 'laticinios') {
            laticinios.push(produtoAdicionado);
        } else if(categoria == 'congelados') {
            congelados.push(produtoAdicionado);
        } else if(categoria == 'doces') {
            doces.push(produtoAdicionado);
        } else {
            alert('Categoria inválida. Insiria novamente o produto dentro de uma categoria válida')
        }

    } else if(adicionarNaLista == 2) {
        if(frutas.concat(laticinios, congelados, doces).length == 0) {
            alert('Não há itens na sua lista')
        } else {
            alert('Lista de compras atual: \n Frutas: '+frutas+'\n Laticínios: '+laticinios+'\n Congelados: '+congelados+'\n Doces: '+doces+'');
            let excluir = prompt("Qual item da lista de compras você deseja excluir?");
            if(frutas.includes(excluir)) {
                frutas.splice(frutas.indexOf(excluir), 1);
                alert('O produto '+excluir+' foi excluído da sua lista de compras')
            } else if(laticinios.includes(excluir)) {
                laticinios.splice(laticinios.indexOf(excluir), 1);
                alert('O produto '+excluir+' foi excluído da sua lista de compras')
            } else if(congelados.includes(excluir)) {
                congelados.splice(congelados.indexOf(excluir), 1);
                alert('O produto '+excluir+' foi excluído da sua lista de compras')
            } else if(doces.includes(excluir)) {
                doces.splice(doces.indexOf(excluir), 1);
                alert('O produto '+excluir+' foi excluído da sua lista de compras')
            } else {
                alert('Não foi possível encontrar o item dentro da lista')
            }
        }
    } else if(adicionarNaLista == 3) {
        alert("Sua lista de compras está pronta!")
        
    } else {
        alert("Este não é uma opção válida. Por favor, digite 1, 2 ou 3");
        adicionarNaLista = 1;
    } 
    
}

alert('Lista de compras:\n Frutas: '+frutas+'\n Laticínios: '+laticinios+'\n Congelados: '+congelados+'\n Doces: '+doces+'');
