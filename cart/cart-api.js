import { CART, getFromLocalStorage, setInLocalStorage, findById } from '../utils.js';

export function clearCart(item) {

    localStorage.removeItem(item);
}
    
export function addToCart(wig) {
    
    const cart = getFromLocalStorage(CART) || [];
    const itemInCart = findById(cart, wig.id);
    
    if (itemInCart === undefined) {
        const newCartItem = {
            id: wig.id,
            quantity: 1
        };
        cart.push(newCartItem);
    } else {
        itemInCart.quantity++;
    }
    setInLocalStorage(CART, cart);
    
}
    
// export function getCart() {
        
    // }
