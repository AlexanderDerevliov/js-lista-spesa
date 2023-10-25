
// Elementi del DOM
const listElements = document.getElementById("market-list");


// Arrey elementi della lista

const products = ["pane", "olio", "cipolla", "vino", "mozzarella", "pomodori"];


// Creo il ciclo while con la lista e ul di index

let i = 0;

let listProducts = "<ul>"


while (products[i]) {
    listProducts += `<li>${products[i]}</li>`;

    i++;
}



listElements.innerHTML += listProducts;
