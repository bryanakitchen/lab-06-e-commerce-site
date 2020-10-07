import { wigs, cart } from '../data.js';
import { renderTableRow } from '../utils.js';
import { calculateTotal } from './cart-utils.js';

const tbody = document.querySelector('#table');

for (let i = 0; i < cart.length; i++) {
    const item = cart[i];

    const tr = renderTableRow(item);

    tbody.appendChild(tr);
}

const totalCell = document.querySelector('#total-price');
const total = calculateTotal(wigs, cart);
totalCell.textContent = `$${total}`;
