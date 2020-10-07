import { findById, calcLineItem } from '../utils.js';

export function calculateTotal(wigs, cart) {
    let total = 0;
    
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const wig = findById(wigs, item.id);
        // use new funciton here
        const subTotal = calcLineItem(wig.price, item.quantity);
        total += subTotal;
    }
    return total;
}