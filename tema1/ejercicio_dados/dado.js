const imagen = document.querySelector('img');
const texto = document.createElement('div')
function play(){
let numero = parseInt((Math.random()*6)+1);
console.log(numero);
imagen.src = `images/dice${numero}.gif`;
texto.innerHTML=`  `
}