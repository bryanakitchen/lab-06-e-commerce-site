
import { renderTableRow } from '../utils.js';
import { calculateTotal } from '../cart/cart-utils.js';

const test = QUnit.test;

test('Test should take in a cartItem and return an table row with the appropriate contents.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cartItem = {
        id: 'frizz123',
        quantity: 2,
    };
    
    const expected = '<tr><td>The Ms. Frizzle</td><td>2</td><td>$89.98</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTableRow(cartItem);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

// test('Test should take in a cart total and return a table total row with the appropriate contents.', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const cartTotal = {
//         id: 'frizz123',
//         quantity: 2,
//     };
    
//     const expected = '<tr><td>Total</td><td>2</td><td>$89.98</td></tr>';
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = calculateTotal(wigs, cart);

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual.outerHTML, expected);
// });
