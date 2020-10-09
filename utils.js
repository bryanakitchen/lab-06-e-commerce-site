import { addToCart } from './cart/cart-api.js';
import { wigs } from './data.js';

export const CART = 'CART';
export const PRODUCTS = 'PRODUCTS';

export function addWig(myObject) {
    // Retrieve the existing products array
    // DO NOT USE GETFROMLOCALSTORAGE() FUNCTION
    const productArray = seedAndGetWigs(PRODUCTS);
    // Push the new product into the array
    productArray.push(myObject);
    // Re-save the products array into localStorage
    setInLocalStorage(PRODUCTS, productArray);
}

export function seedAndGetWigs() {
    let localStorageWigs = JSON.parse(localStorage.getItem(PRODUCTS));
    
    if (!localStorageWigs) {
        const stringyWigs = JSON.stringify(wigs);
        
        localStorage.setItem(PRODUCTS, stringyWigs);
        localStorageWigs = wigs;
    }
    return localStorageWigs;
}


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

    button.addEventListener('click', () => {
    
        addToCart(wig);
    });
    
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
    const tdSubtotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;
    
    const wigData = findById(wigs, cartItem.id);
    
    const price = wigData.price;
    const theName = wigData.name;
    
    tdName.textContent = theName;

    // new function 
    const subtotal = calcLineItem(price, cartItem.quantity);
    
    tdSubtotal.textContent = `$${subtotal}`;

    tr.append(tdName, tdQuantity, tdSubtotal);

    return tr;
}

export function calcLineItem(price, quantity) {

    const total = price * quantity;
    return total;
}

// this function will not return anything
export function setInLocalStorage(key, value) {
    const myString = JSON.stringify(value);
    localStorage.setItem(key, myString);
}

export function getFromLocalStorage(key) {
    const myKey = localStorage.getItem(key);
    return JSON.parse(myKey);

}
