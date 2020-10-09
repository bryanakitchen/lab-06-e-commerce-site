
import { renderTableRow, calcLineItem, addWig, seedAndGetWigs } from '../utils.js';
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
    
    const expected = 265;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calculateTotal(wigs, cart);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Test should take in a quantity and an price and return the total.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const price = 44;
    const quantity = 2;
    
    const expected = 88;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcLineItem(price, quantity);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Test should take in a new product object and add it to the local storage (returning nothing).', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const newWig = {
        id: 'abc123',
        name: 'This is my new wig',
        image: 'new-wig.png',
        imageAlt: 'The Best Wig',
        description: 'it looks great',
        category: 'going out',
        price: 10,
    };
    
    const expected = [
        {
            id: 'frizz123',
            name: 'The Ms. Frizzle',
            image: 'the-ms-frizzle.jpg',
            imageAlt: 'The Ms. Frizzle Wig',
            description: 'A look that screams "kooky grade school teacher takes students on a field trip," but cute.',
            category: 'going out',
            price: 44,
        },
        {
            id: 'bob123',
            name: 'The Asymmetrical Number',
            image: 'the-asymmetrical-number.png',
            imageAlt: 'The Asymmetrical Number',
            description: 'A stunning little number that can\'t decide what length it wants to be.',
            category: 'staying in',
            price: 39,
        },
        {
            id: 'cyn123',
            name: 'The Cyndi Lauper',
            image: 'the-cyndi-lauper.jpg',
            imageAlt: 'The Cyndi Lauper',
            description: 'This wig looks like it has been round-brushed within an inch of its life — in a good way. The blonde streaks frame her face before flipping skyward. It\'s a vibe we hope she keeps coming back to "time after time" (get it?).',
            category: 'staying in',
            price: 46,
        },
        {
            id: 'lob123',
            name: 'The Luau Lob',
            image: 'the-luau-lob.jpg',
            imageAlt: 'The Luau Lob',
            description: 'We learn that this wig\'s name is Maureen, and "she doesn\'t like to be manhandled." She certainly has a lot of personality, as is evidenced by the blonde layered over slightly longer black. It\'s a weird look, and no one but Moira could pull it off so effortlessly.',
            category: 'going out',
            price: 57,
        },
        {
            id: 'queen123',
            name: 'The Queen Elizabeth I, But Make It Punk',
            image: 'the-queen-elizabeth-i-but-make-it-punk.jpg',
            imageAlt: 'The Queen Elizabeth I, But Make It Punk',
            description: 'Paired with her Tudor ruff and pearl drop earrings, Moira looks like she just Outlander-ed herself forward in time and learned about hairspray somewhere along the way. It\'s a magnificent disaster.',
            category: 'going out',
            price: 42,
        },
        {
            id: 'ex123',
            name: 'The Existential Crisis Bob',
            image: 'existential-crisis-bob.jpg',
            imageAlt: 'The Existential Crisis Bob',
            description: 'Moira dons this gray number after being frustrated about what people are saying about her online. It frames her face well, but it\'s a bit too ordinary for the great Moira Rose to wear on a daily basis.',
            category: 'staying in',
            price: 20,
        },
        {
            id: 'abc123',
            name: 'This is my new wig',
            image: 'new-wig.png',
            imageAlt: 'The Best Wig',
            description: 'it looks great',
            category: 'going out',
            price: 10,
    
        }
    ];
   
    addWig(newWig);
    
    const actual = seedAndGetWigs(expected);
    
    expect.deepEqual(actual, expected);
});
