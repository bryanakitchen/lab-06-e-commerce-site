import { renderTableRow, CART, getFromLocalStorage, seedAndGetWigs } from '../utils.js';
import { calculateTotal } from './cart-utils.js';
import { clearCart } from './cart-api.js';

const wigs = seedAndGetWigs();

const cart = getFromLocalStorage(CART) || [];

const tbody = document.querySelector('#table');

for (let i = 0; i < cart.length; i++) {
    const item = cart[i];

    const tr = renderTableRow(item);

    tbody.appendChild(tr);
}

const totalCell = document.querySelector('#total-price');
const total = calculateTotal(wigs, cart);
totalCell.textContent = `$${total}`;

const orderButton = document.getElementById('order-button');

orderButton.addEventListener('click', () => {
    const stringCart = JSON.stringify(cart, true, 2);
    
    alert(stringCart);
    
    clearCart(CART);

    window.location.href = '../index.html';
});