
function saveSession(){
const arrayInputs = [document.getElementsByName('nombre')[0].value, document.getElementsByName('edad')[0].value ]
let edad = parseInt(arrayInputs[1],10)
if(isNaN(edad) ){
  arrayInputs[1] = "Sin edad"
}
if(arrayInputs[0] == ""){
  arrayInputs[0] = "Anónimo"
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