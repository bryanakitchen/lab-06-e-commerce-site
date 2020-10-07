import { findById } from '../utils.js';

export function calculateTotal(wigs, cart) {
    let total = 0;
    
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const wig = findById(wigs, item.id);
        const subTotal = item.quantity * wig.price;
        total += subTotal;
    }
    return total;
}