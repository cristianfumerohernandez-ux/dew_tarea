const TEMAS = ['Cocina', 'Futbol', 'Salud', 'Arte', 'Sucesos', 'Política', 'Economía', 'Música', 'Cine', 'Baloncesto', 'Javascript', 'Vinos', 'Papiroflexia'];

const divTemas = document.getElementById('temasContainer')
TEMAS.forEach(tema =>{
    divTemas.innerHTML += `
    <input type="checkbox" name="tema[]" id="${tema}" value="${tema}" >
    <label for="${tema}">${tema}</label>
    `
})

const form = document.getElementById('suscripcionForm');
const suscripcion = document.querySelectorAll('radio');
const formData = new FormData(form);

suscripcion.addEventListener('click', (e)=>{
    e.preventDefault();
    if(formData.get('tipo') == 'Élite'){
        const temas = document.querySelectorAll('input[type="checkbox"]');
        temas.forEach(tema =>{
            tema.checked = true;
        })


    }

})
