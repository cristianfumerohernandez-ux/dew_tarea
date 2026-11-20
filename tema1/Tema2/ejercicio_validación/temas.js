const TEMAS = ['Cocina', 'Futbol', 'Salud', 'Arte', 'Sucesos', 'Política', 'Economía', 'Música', 'Cine', 'Baloncesto', 'Javascript', 'Vinos', 'Papiroflexia'];

const divTemas = document.getElementById('temasContainer')
TEMAS.forEach(tema =>{
    divTemas.innerHTML += `
    <input type="checkbox" name="tema[]" id="${tema}" value="${tema}" >
    <label for="${tema}">${tema}</label>
    `
})
const inputNombre = document.getElementById("nombre")
inputNombre.addEventListener('input', (e)=>{
    inputNombre.value = inputNombre.value.toUpperCase();
}) 

const form = document.getElementById('suscripcionForm');

const inputDni = document.getElementById('dni');
function validarDni(){
    const errorDni = document.getElementById('errorDni');
    if (inputDni.value === '') {
        errorDni.textContent = 'El DNI es obligatorio.';
        return false;
    }
   
    errorDni.textContent = '';
    return true;
}
inputDni.addEventListener('input', validarDni);

const suscripciones = document.querySelectorAll('input[name="tipo"]');
function actualizarPrecio(){
    const precio = document.getElementById("precio")
    const seleccionado = document.querySelector('input[name="tipo"]:checked');
    const precios ={
        basico: 5,
        estandar: 10,
        premium: 15,
        elite: 20, 
    }
    precio.textContent = precios[seleccionado.value] + ' €';
}

actualizarPrecio()

suscripciones.forEach(radio => {
    radio.addEventListener('change', () => {
        actualizarPrecio();
        if (radio.value === 'elite') {
            document.querySelectorAll('input[name="tema[]"]').forEach(tema => {
                    tema.checked = true;
                });
        }else{
            document.querySelectorAll('input[name="tema[]"]').forEach(tema => {
                    tema.checked = false;
                });

        }
    });
});