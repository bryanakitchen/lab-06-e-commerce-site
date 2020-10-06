import { wigs } from "./data.js";

export function renderWig(wig) {
    const li = document.createElement('li');
    li.classList.add('wig');

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = wig.name;

    
    const image = document.createElement('img');
    image.classList.add('image');
    image.src = `../assets/${wig.image}`;
    image.alt = wig.imageAlt;

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = wig.description;

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `$${wig.price}`;

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    
    li.append(name, image, description, price, button);

    return li;
}

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];

        if (item.id === someId) {
            return item;
        }
    }
}

export function renderTableRow(cartItem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;
    
    const wigData = findById(wigs, cartItem.id);
    
    const price = wigData.price;
    const theName = wigData.name;
    
    tdName.textContent = theName;

    const total = price * cartItem.quantity;
    
    tdTotal.textContent = `$${total}`;

    tr.append(tdName, tdQuantity, tdTotal);

    return tr;
}