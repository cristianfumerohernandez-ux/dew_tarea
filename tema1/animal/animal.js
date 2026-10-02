// Nivel 1: Selección de Elementos
// El objetivo de este nivel es familiarizarse con querySelector y querySelectorAll y ver los resultados en la consola.

// Seleccionar por ID:
// Selecciona el <h1> con el id main-title y muéstralo en la consola.
// const mainTitle = document.getElementById('main-title');
const mainTitle = document.querySelector('#main-title');
console.log(mainTitle);
// Selecciona el aside con el id sidebar y muéstralo en la consola.
// const mainAside = document.getElementById('sidebar');
const mainAside = document.querySelector('#sidebar');
console.log(mainAside);
// Seleccionar por Clase:
// Selecciona todos los elementos con la clase nav-link y muestra la colección (NodeList) en la consola.
const mainNav = document.getElementsByClassName('nav-link');
console.log(mainNav);
// Selecciona la primera tarjeta (.card) que encuentres en la sección de mamíferos y muéstrala en la consola.
const firstCard = document.querySelector('#mammals .card');
console.log(firstCard);
// Seleccionar por Etiqueta:
// Selecciona todos los elementos <p> de la página y muéstralos en la consola.
const pAll = document.getElementsByTagName('p');
console.log(pAll);

// Seleccionar con Selectores Complejos:
// Selecciona todos los <li> que están dentro de la tarjeta del león.
const liLion = document.querySelectorAll('#mammals article[data-animal-type="land"] li');
console.log(liLion);
// Selecciona el elemento con la clase important que está dentro de la tarjeta del delfín.
const liDelfin = document.querySelector("#mammals article[data-animal-type='sea'] .important");
console.log(liDelfin);

// Selecciona todas las tarjetas (.card) que estén dentro de la sección con id mammals.
const allCards = document.querySelectorAll("#mammals .card");
console.log(allCards);

// Seleccionar por Atributo:
// Selecciona todas las tarjetas que tengan el atributo data-animal-type="sea".
const allSea = document.querySelectorAll('article[data-animal-type="sea"]');
console.log(allSea);

// Nivel 2: Modificación de Contenido y Clases
// Ahora se manipulan los elementos seleccionados.

// Cambiar Contenido:
// Cambia el texto del título principal (#main-title) por "La Gran Aventura Animal".
mainTitle.textContent = "La Gran Aventura Animal";

// Cambia el texto del enlace "Saber más..." (#more-info-link) por "Obtener más información".
const infoList = document.querySelector('#more-info-link');
infoList.textContent = "Obtener más información";
// Modifica el contenido del footer para que incluya tu nombre.
const miNombre = document.querySelector('footer');
miNombre.textContent += "Cristian";
// Manipular Clases:

// Añade la clase highlight a la sección de aves (#birds).
const claseAves = document.querySelector("section#birds");
// claseAves.setAttribute('class', 'highlight');
claseAves.classList.add('highlight');
// Quita la clase important del <li> "Vista aguda" del águila.
const vistaAguda = document.querySelector("#birds li.important");
vistaAguda.classList.remove('important');
// Usando toggle, haz que al hacer clic en cualquier tarjeta (.card), se le añada o quite la clase highlight. 
// (Pista: necesitarás un bucle para añadir el evento a todas las tarjetas).
const cards = document.querySelectorAll('.card');
for (let i = 0; i < cards.length; i++) {
    // cards[i].setAttribute("Onclick",`toggleHighlight(${i})`)
    cards[i].setAttribute("Onclick", `toggleHighlight(this)`)
}

function toggleHighlight(card) {
    console.log("Haciendo toggle");
    // cards[i].classList.toggle('highlight')
    card.classList.toggle('highlight')


}
// Nivel 3: Creación y Eliminación de Elementos
// En este nivel se añaden y se quitan elementos del DOM.

// Crear y Añadir Elementos:
// Crea un nuevo <h2> con el texto "Reptiles".
const newH2 = document.createElement('h2');
newH2.textContent = "Reptiles";
// Crea una nueva sección con id="reptiles" y la clase category.
const newSection = document.createElement('section');
newSection.id = "reptiles";
newSection.classList.add('category');
// Añade el <h2> que has creado dentro de la nueva sección.
// newSection.innerHTML = "<h2>Reptiles</h2>"
   newSection.appendChild(newH2);
// Finalmente, añade esta nueva sección de reptiles al main de la página, justo después de la sección de aves.
const aside = document.getElementById('sidebar');
const main = document.querySelector('main');
main.insertBefore(newSection,aside);
// Crear y Añadir una Nueva Tarjeta:
// Dentro de la nueva sección de reptiles, crea un article con la clase card.
const newCard = document.createElement('div')
newCard.classList.add('card-container');
newCard.innerHTML= `
            <article class="card" data-animal-type="tierra">
                    <h3>Serpiente</h3>
                    <p>Reptil sin patas conocido por su sigilo.</p>
                    <ul class="features">
                        <li class="feature-item important">Puede ser venenoso</li>
                        <li class="feature-item">No tiene patas</li>
                    </ul>
             </article>
             `;

newSection.appendChild(newCard);

// Eliminar Elementos:
// Selecciona y elimina el aside (#sidebar).
aside.remove();
// Elimina la característica "Gran melena" de la lista de características del león.

//Eliminando la primera caracteristica de leon
const encabezados3 = document.querySelectorAll('article h3');
const leonH3 = [...encabezados3].find(h3 => h3.textContent === "León")
const leonArticle = leonH3.parentElement;
const leonFeatures = leonArticle.querySelectorAll('ul.features li')
leonFeatures[0].remove();
// Nivel 4: Mover Elementos y Eventos
// Se combinan conceptos para reorganizar la página dinámicamente.

// Mover Elementos:
// Mueve la tarjeta del delfín para que aparezca antes que la del león dentro de la sección de mamíferos.
// (Pista: usa insertBefore).
const delfinArticle = leonArticle.nextElementSibling;
const cardContainer = delfinArticle.parentElement;
cardContainer.insertBefore(delfinArticle,leonArticle);

// Ejercicio Combinado (Bonus):
// Crea un botón button con el texto "Invertir Orden".

// Añade este botón justo después del <h1> principal.

// Haz que, al hacer clic en el botón, el orden de las secciones (#mammals y #birds) se invierta.
// Es decir, si Aves está después de Mamíferos, al hacer clic, Aves debería aparecer primero.
// Si se vuelve a hacer clic, deberían volver a su orden original.

function reverse(){
    const sections = [...document.querySelectorAll('section')];
    console.log(sections);
    sections.reverse();
    sections.forEach(section =>{
    main.appendChild(section)
    });
};