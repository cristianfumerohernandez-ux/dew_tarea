

const divPersonas = document.getElementById("personas")
const divPersona = document.querySelectorAll(".persona")
const listaNombresUl = document.createElement('ul');


const navInicio = document.querySelector("nav");

function limpiarPanel() {
    divPersonas.innerHTML = "";
}

function mostrarNombres() {
divPersona.forEach(persona => {
    const tituloH2 = persona.querySelector('h2').textContent;
    const elementoLi = document.createElement('li');
    elementoLi.textContent = tituloH2;
    listaNombresUl.appendChild(elementoLi);
});
divPersonas.appendChild(listaNombresUl);
}

function botonesPersonas(personas){
    personas.forEach(persona => {
        const button = document.createElement('button');
        button.textContent = persona.nombre
        button.onclick = () => {mostrarPersonaId(persona.id)}
        navInicio.appendChild(button)

});
}
botonesPersonas(PERSONAS);

function mostrarPersona(persona){
    div = document.createElement('div')
    div.classList.add("persona")
    const nuevaPersona = `
    <div class="persona">
            <h2>${persona.nombre} (${persona.edad})</h2>
            <p>${persona.estudios}</p>
            <button onclick="eliminarPersona(${persona.id})">Eliminar</button>
            <ul>
                <li>${persona.intereses[0]}</li>
                <li>${persona.intereses[1]}</li>
                <li>${persona.intereses[2]}</li>
            </ul>
     </div>
    `;
    divPersonas.innerHTML += nuevaPersona

}

function mostrarPersonaId(id){
    PERSONAS.forEach(persona =>{
        if(id == persona.id){
        mostrarPersona(persona)
        }
    })
    
}

function mostrarListadoPersonas(personas){
    personas.forEach(persona =>{
        mostrarPersona(persona)
    })
}

function crearPersona(){
    let inputNombre = document.querySelector('input[name="nombre"').value;
    let inputEdad = document.querySelector('input[name="edad"').value;
    let inputEstudios = document.querySelector('input[name="estudios"').value;
    let inputIntereses = document.querySelector('input[name="intereses"')
    .value.split(",")
    .map((interes)=> interes.trim());

    const personaNueva ={
        id: Math.floor(Math.random()*99999+1),
        nombre: inputNombre,
        edad: inputEdad,
        estudios: inputEstudios,
        intereses: inputIntereses
    } 
    PERSONAS.push(personaNueva)
    mostrarPersona(personaNueva)
}
function filtrarEdad(){
    let inputEdadMax = document.querySelector('input[name="maxima"').value;
    let inputEdadMin = document.querySelector('input[name="minima"').value;
    limpiarPanel()
    PERSONAS.forEach(persona =>{
        if(inputEdadMax > persona.edad && persona.edad > inputEdadMin)
            mostrarPersona(persona)
    })
}

function eliminarPersona(id){
    let indice = PERSONAS.findIndex(persona => persona.id === id);

    if (indice !== -1) {
        PERSONAS.splice(indice, 1);
    }
    mostrarListadoPersonas();

    
}





