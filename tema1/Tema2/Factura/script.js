
const table = document.querySelector('table');
const insertButton = document.getElementById('insert');
const taxRadioList = document.getElementsByName('tax')


taxRadioList.forEach(taxAlone =>{
    taxAlone.addEventListener("change", recalculateTotal)
})

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
    if(typeof product.price === 'number' ){

    newTr.innerHTML = `
        <td>${product.concept}</td>
        <td>${product.quantity}</td>
        <td>${product.price}€</td>
        <td class ="totalPrice">${product.total}€</td>
        <td><button class="delete" onclick= "deleteRow(this)">X</button></td>
    `;
    table.appendChild(newTr);
    }else{
        alert("Introduce un nº válido")
    }

    document.querySelector('form').reset()
    recalculateTotal();
}
insertButton.addEventListener('click', insertProduct);

function deleteRow(button) {
    const row = button.closest("tr");
    row.remove();
    recalculateTotal();
}

function totalPriceCalculation() {
    const priceElements = document.getElementsByClassName('totalPrice');
    const fullPrice = [...priceElements].reduce((priceTotal, price) => {
        const cleanPrice = parseFloat(price.textContent.replace('€', '').trim());
        return priceTotal + cleanPrice;
    }, 0)
    return fullPrice
}
function taxes() {
    const taxButton = document.querySelector('input[name="tax"]:checked');
    const taxesPrice = (totalPriceCalculation() * taxButton.value / 100);
    return taxesPrice
}

function recalculateTotal() {
    const tableFootRows = document.querySelectorAll('table tfoot tr')
    const taxButton = document.querySelector('input[name="tax"]:checked')
    const subtotal = totalPriceCalculation();
    const taxesValue = taxes();

    tableFootRows[0].cells[1].textContent = subtotal + "€";
    tableFootRows[1].cells[1].textContent = taxButton.value + "%";
    tableFootRows[2].cells[1].textContent = taxesValue + "€";
    tableFootRows[3].cells[1].textContent = taxesValue + subtotal + "€";

}
recalculateTotal();











