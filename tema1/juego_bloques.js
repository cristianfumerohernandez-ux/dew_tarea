const listaContainer = document.getElementById('container');
const inputBloque = document.getElementById('block-number');

function createBlock(){
    let numBloque = inputBloque.value;
    for(let i = 0; i<=numBloque; i++){
        createBlocks('red');
    }
    
}

function createBlocks(color){
    const bloque = document.createElement('div');
    bloque.classList.add('block',color);
    listaContainer.appendChild(bloque);
}