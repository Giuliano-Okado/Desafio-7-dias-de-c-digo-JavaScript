let frutas = [];
let laticinios = [];  
let congelados = [];  
let doces = [];

let adicionarNaLista = "sim";

while(adicionarNaLista == 'sim') {

    adicionarNaLista = prompt("Deseja adicionar algo na sua lista de compras? Responda com sim ou não");
    if(adicionarNaLista.toLowerCase() == 'sim') {
        
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
            alert("Categoria inválida. Insiria novamente o produto dentro de uma categoria válida")
        }
    }
    
}

console.log('Lista de compras:')
console.log('Frutas: ' +frutas);
console.log('Laticínios: ' +laticinios);
console.log('Congelados: ' +congelados);
console.log('Doces: ' +doces);
