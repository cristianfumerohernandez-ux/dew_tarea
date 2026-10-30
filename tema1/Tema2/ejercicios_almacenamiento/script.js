
function saveSession(){
const arrayInputs = [document.getElementsByName('nombre')[0].value, document.getElementsByName('edad')[0].value ]
if(arrayInputs[1] !== 'number' ){
  arrayInputs[1] = "Sin edad"
}
try {
  localStorage.setItem('valores', JSON.stringify(arrayInputs))
} catch (error) {
  if (error.name === 'QuotaExceededError') {
    console.error('Error: Almacenamiento lleno');
  }
}
}

const buttonSave = document.getElementById('save')
buttonSave.addEventListener('click', saveSession )