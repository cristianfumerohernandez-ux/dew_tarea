
const table = document.querySelector('table');
const insertButton = document.getElementById('insert');

function readProductData() {
    const conceptValue = document.getElementsByName('concept')[0].value
    const quantityValue = document.getElementsByName('quantity')[0].value
    const priceValue = document.getElementsByName('price')[0].value;
    let totalValue = quantityValue * priceValue;

    return {
        concept: conceptValue,
        quantity: quantityValue,
        price: priceValue,
        total: totalValue
    };
}

function insertProduct() {
    const product = readProductData();
    newTr = document.createElement('tr')
    newTr.innerHTML = `
        <td>${product.concept}</td>
        <td>${product.quantity}</td>
        <td>${product.price}</td>
        <td>${product.total}</td>
        <td><button class="delete" onclick= "deleteRow(this)">X</button></td>
    `;
    table.appendChild(newTr);

    document.querySelector('form').reset()
   
}
insertButton.addEventListener('click', insertProduct);

function deleteRow (button){
    const row = button.closest("tr");
    row.remove();
}









