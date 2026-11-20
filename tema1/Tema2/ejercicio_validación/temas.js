const TEMAS = ['Cocina', 'Futbol', 'Salud', 'Arte', 'Sucesos', 'Política', 'Economía', 'Música', 'Cine', 'Baloncesto', 'Javascript', 'Vinos', 'Papiroflexia'];

const divTemas = document.getElementById('temasContainer')
TEMAS.forEach(tema => {
    divTemas.innerHTML += `
    <input type="checkbox" name="tema[]" id="${tema}" value="${tema}" >
    <label for="${tema}">${tema}</label>
    `
})
const inputNombre = document.getElementById("nombre")
inputNombre.addEventListener('input', (e) => {
    inputNombre.value = inputNombre.value.toUpperCase();
})

const form = document.getElementById('suscripcionForm');


const inputDni = document.getElementById('dni');
function validarDni() {
    const errorDni = document.getElementById('errorDni');
    if (inputDni.value === '') {
        errorDni.textContent = 'El DNI es obligatorio.';
        return false;
    }

    errorDni.textContent = '';
    return true;
}
inputDni.addEventListener('input', validarDni);
function validarNombre() {
    const errorNombre = document.getElementById('errorNombre')
    if (inputNombre.value === '') {
        errorNombre.textContent = 'El nombre es obligatorio.';
        return false;
    }
    if (inputNombre.value.trim().length < 3) {
        errorNombre.textContent = 'El nombre no puede ser menor de 3 caracteres.';
        return false;
    }

    errorNombre.textContent = '';
    return true;
}
inputNombre.addEventListener('input', validarNombre)

const suscripciones = document.querySelectorAll('input[name="tipo"]');
function actualizarPrecio() {
    const precio = document.getElementById("precio")
    const seleccionado = document.querySelector('input[name="tipo"]:checked');
    const precios = {
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
        } else {
            document.querySelectorAll('input[name="tema[]"]').forEach(tema => {
                tema.checked = false;
            });

        }
    });
});

form.addEventListener('submit', (e) => {
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const seleccionados = document.querySelectorAll(
        'input[name="tema[]"]:checked'
    ).length;

    const cantidades = {
        basico: 1,
        estandar: 3,
        premium: 6,
        elite: TEMAS.length
    };

    const errorTemas = document.getElementById('errorTemas');
    const requeridos = cantidades[tipo];

    if (seleccionados !== requeridos) {
        e.preventDefault();
        errorTemas.textContent = tipo === 'elite'
            ? 'Para la suscripción Élite debes seleccionar todos los temas.'
            : `Debes seleccionar exactamente ${requeridos} tema(s).`;
    } else {
        errorTemas.textContent = '';
    }
});