const divPersonas = document.getElementById("personas")
const divPersona = document.querySelectorAll(".persona")

function limpiarPanel() {
    divPersonas.innerHTML = "";
}

function mostrarNombres() {
const listaNombresUl = document.createElement('ul');
divPersona.forEach(persona => {
    let tituloH2 = persona.querySelector('h2').textContent;
    const elementoLi = document.createElement('li');
    elementoLi.textContent = tituloH2;
    listaNombresUl.appendChild(elementoLi);
});
divPersonas.appendChild(listaNombres);
}

