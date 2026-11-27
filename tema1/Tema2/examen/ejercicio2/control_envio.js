// Nombre del alumno: Cristian Fumero Hernández  Escribe tu nombre aquí o no serás evaluado


const desplegable = document.getElementById("vehiculo")

function cargarVehiculos() {
    VEHICULOS.forEach(v => {
        desplegable.addEventListener("change", (e)=>{
            const inputPeso = document.getElementById("peso")
            if (inputPeso.value.trim() > v.capacidad){
                const errorPeso = document.getElementById("errorPeso")
                errorPeso.textContent = 'El peso está incorrecto.';
            }
        })
        const opcionCoche = document.createElement("option")
        opcionCoche.textContent = `${v.nombre}, Máx: ${v.capacidad}`
        desplegable.appendChild(opcionCoche)
    })
}
cargarVehiculos()

const errorFragil = document.getElementById('errorFragil');


