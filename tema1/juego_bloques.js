const listaContainer = document.getElementById('container');
const inputBloque = document.getElementById('block-number');
const colors = ['blue', 'red', 'green'];


function createBlock() {
    let numBloque = inputBloque.value;
    for (let i = 0; i <= numBloque; i++) {
        createRandomBlock();
    }
}

function createRandomBlock(){
    let random = Math.floor(Math.random() * colors.length)
    createBlocks(colors[random]);
    
}

function createBlocks(color) {
    const bloque = document.createElement('div');
    bloque.classList.add('bloque', color);
    bloque.onclick = () => {
        let cellList = [bloque];
        let next = bloque;
        let previous = bloque;
        while ((next = next.nextElementSibling) && next.classList.contains(color)) {
            cellList.push(next);
        }
         while ((previous = previous.previousElementSibling) && previous.classList.contains(color)) {
            cellList.push(previous);
        }

        if(cellList.length > 2){
            cellList.forEach(cell => cell.remove());
            if(listaContainer.querySelectorAll('.bloque').length == 0){
                alert("Has Ganado")
            }
        }
    }
    listaContainer.appendChild(bloque);
    if(listaContainer.querySelectorAll('.bloque').length > 100){
        alert("HAS PERDIDO");
        listaContainer.innerHTML = "";
    }
}

setInterval(createRandomBlock , 1000);