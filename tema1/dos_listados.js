const ulListOrigin = document.getElementById("listOrigin");
const ulListDestiny = document.getElementById("listDestination");

function setSelected(li) {
    li.classList.toggle("selected");
}

function changeElement(origin,destiny) {
    let selectedLis = [...origin.querySelectorAll('.selected')];
    selectedLis.forEach(li => {
        destiny.appendChild(li);
        li.classList.remove('selected'); 
    });
}

function changeElementLeft(){
    changeElement(ulListDestiny,ulListOrigin)
}

function changeElementRight(){
    changeElement(ulListOrigin,ulListDestiny)

}


function addSelectableElements(){
    let lisLiOrigin = [...ulListOrigin.querySelectorAll('li')];
    lisLiOrigin.forEach( li => li.onclick = () => li.classList.toggle('selected') )
}

function init(){
    addSelectableElements();
}

init()