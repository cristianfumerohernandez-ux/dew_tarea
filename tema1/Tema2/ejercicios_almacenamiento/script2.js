const divAdd = document.querySelector('div')
const personRaw = localStorage.getItem('valores');

if (personRaw !== null) {
  try {
    const valores = JSON.parse(personRaw);
    divAdd.innerHTML= 
`
<h2><strong>${valores[0]}</strong></h2>
<h3><strong>${valores[1]}</strong></h3>
`

  } catch (e) {
    console.error('Error: El contenido no es un JSON válido');
  }
}
