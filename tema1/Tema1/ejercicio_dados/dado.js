
const imagen = document.querySelector('img');
let money = 10;
let stNumber;
updateCash();

function updateCash(){
    document.getElementById('infoMoney').textContent = money;
}

function play() {
    let apuesta = Number(document.querySelector('#inputMoney').value);
    if (apuesta <= 0 || apuesta > money) {
        alert("Introduce una apuesta válida");
        
    }else{
        let number = Math.floor(Math.random() * 6) + 1;
        imagen.src = `images/dice${number}.gif`;

        if (number > stNumber) {
            money += apuesta;
        } else {
            money -= apuesta;
        }

    if (money <=0){
        alert("Has perdido todo el dinero, reiniciando juego")
        reset();
    }
        stNumber = number;
        updateCash()
    }

}
function reset(){
    money = 10;
    document.querySelector('#inputMoney').value = '';
    updateCash();
    init();
}
function init() {
    stNumber = Math.floor(Math.random() * 6) + 1;
    imagen.src = `images/dice${stNumber}.gif`;
}
init();
