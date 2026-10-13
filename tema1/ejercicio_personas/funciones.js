
function buscarPersonaPorId(personas, id) {
    return personas.find(usuario => usuario.id === id);
}

function filtrarPersonasPorEstudios(personas, estudios) {
    let personasPorEstudio = [];
    personas.forEach(persona => {
        if (persona.estudios == estudios) {
            personasPorEstudio.push(persona);
        }
    });
    return personasPorEstudio
}

function filtrarPersonasPorEdad(personas, minEdad, maxEdad) {
    let personasPorEdad = [];
    personas.forEach(persona => {
        if (persona.edad > minEdad && persona.edad <= maxEdad) {
            personasPorEdad.push(persona);
        }
    })
    return personasPorEdad;
}

function filtrarPersonaPorInteres(personas, interes) {
    let personasPorInteres = [];
    personas.forEach(persona => {
        if(persona.intereses.includes(interes)){
            personasPorInteres.push(persona)
        }
    })
    return personasPorInteres
}

function nombres(personas){
    let personasNombre = [];
    personas.forEach(persona =>{
        personasNombre.push(persona.nombre);
    })
    return personasNombre
}

function mediaEdad(personas){
    let personasPorEdad = personas.reduce((acumulador,persona) => acumulador + persona.edad,0)
    return personasPorEdad / personas.length
}

function intereses(personas){
    let interesesUnicos = [];
    personas.forEach(persona =>{
        persona.intereses.forEach(interes => {
            if(!interesesUnicos.includes(interes)){
                interesesUnicos.push(interes);
            }
        });
    });
    return interesesUnicos;
}

function insertarPersona(personas,id,nombre,edad,estudios,intereses){
   const nuevaPersona = {
        id: id,
        nombre: nombre,
        edad: edad,
        estudios: estudios,
        intereses: intereses,
    }
    personas.push(nuevaPersona);
}

function eliminarPersona(personas,id){
let indice;
 for(let i = 0; i< personas.length; i++){
    if(personas[i].id == id ){
        indice = i;
    }
 }
 personas.splice(indice,1);


//   let indice =  personas.findIndex(persona => persona.id === id);
//   personas.splice(indice,1);
    
}
