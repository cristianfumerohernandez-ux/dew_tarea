// Nombre del alumno: Cristian Fumero Hernández
class Gasto {
    esAlto;
    constructor(concepto, importe, categoria) {
        this.concepto = concepto
        this.importe = importe
        this.categoria = categoria
        if (importe >= 50) {
            return this.esAlto = true
        } else {
            return this.esAlto = false
        }

    }

    formatear() {
        return `[${this.categoria}] ${this.concepto} -- ${this.importe.toFixed(2)}`
    }
}




const gastosForm = document.getElementById('gastoForm')
let arrayGastos = []

gastosForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const concept = document.getElementById("concepto").value.trim()
    const importe = document.getElementById("importe").value.trim()
    const categoria = document.getElementById("categoria").value.trim()

    let gasto = new Gasto(concept, importe, categoria)

    arrayGastos.push(gasto)

   

    e.target.reset();
    renderizarGastos()
})

const contenedor = document.getElementById("listaGastos");
contenedor.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    
    if (e.target.tagName === "BUTTON") {
        deleteGasto(li);
    }
})
function renderizarGastos() {

    const gastosTotal = document.getElementById("totalGastos")
    let valorImportes = 0;

    arrayGastos.forEach(g => {

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";

        const liGasto = document.createElement("li");
        liGasto.textContent = g.formatear();
        liGasto.appendChild(botonEliminar);
        valorImportes = parseFloat(valorImportes + g.importe)

        if (g.esAlto == true) {
            liGasto.classList.add("gasto-alto")
        }
        contenedor.appendChild(liGasto)

    })
    gastosTotal.textContent = valorImportes
}

function gastosConvertidos(gasto) {
    return {
        concepto: String(gasto.concepto),
        importe: gasto.importe,
        categoria: gasto.categoria,
    }
}

function deleteGasto(li){
    li.remove()
}

function setGastos(){
    localStorage.setItem('gastos',JSON.stringify(arrayGastos))
}
function getGastos(){
    arrayGastos = localStorage.getItem('gastos') || []
    arrayGastos = arrayGastosObjetos.map(o => new Gasto(
        o.concepto, o.importe, o.categoria
    ));
}