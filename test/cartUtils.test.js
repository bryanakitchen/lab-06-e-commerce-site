
import { renderWig } from '../utils.js';

const test = QUnit.test;

test('Test should take in a Wig and return an li with the appropriate contents.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const wig = {
        id: 'frizz123',
        name: 'The Ms. Frizzle',
        image: 'the-ms-frizzle.jpg',
        imageAlt: 'The Ms. Frizzle Wig',
        description: 'A look that screams "kooky grade school teacher takes students on a field trip," but cute.',
        category: 'going out',
        price: 44.99,
    };
    
    const expected = '<li class="wig"><p class="name">The Ms. Frizzle</p><img class="image" src="../assets/the-ms-frizzle.jpg" alt="The Ms. Frizzle Wig"><p class="description">A look that screams "kooky grade school teacher takes students on a field trip," but cute.</p><p class="price">$44.99</p><button>Add to Cart</button></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderWig(wig);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

"<tbody><tr><td>The Ms. Frizzle</td><td>2</td><td>$89.98</td></tr></tbody>"