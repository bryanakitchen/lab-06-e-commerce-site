
import { renderTableRow } from '../utils.js';
import { calculateTotal } from '../cart/cart-utils.js';
import { wigs } from '../data.js';

const test = QUnit.test;

test('Test should take in a cartItem and return an table row with the appropriate contents.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cartItem = {
        id: 'frizz123',
        quantity: 2,
    };
    
    const expected = '<tr><td>The Ms. Frizzle</td><td>2</td><td>$88</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTableRow(cartItem);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('Test should take in cart list and return total quantity.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cart = [
        {
            id: 'frizz123',
            quantity: 2,
        },
        {
            id: 'bob123',
            quantity: 1,
        },
        {
            id: 'cyn123',
            quantity: 3,
        },
    ];
    
    const expected = 270.94;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calculateTotal(wigs, cart);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
