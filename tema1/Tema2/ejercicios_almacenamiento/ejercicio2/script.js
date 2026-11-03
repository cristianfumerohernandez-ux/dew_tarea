const rangeColor = document.getElementById('inputColor');
const inputSize = document.getElementById('inputSize');
const text = document.querySelector('p')

rangeColor.addEventListener('input', (event) =>{
    text.style.color = event.target.value;
})

inputSize.addEventListener('input', (event) =>{
    text.style.fontSize = event.target.value + 'px'
})