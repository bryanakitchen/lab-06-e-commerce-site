import { addWig } from '../utils.js';

// Get a reference to the form
const form = document.querySelector('form');
// Subscribe to the submit event
form.addEventListener('submit', (e) => {
// Don't forget to call event.preventDefault()!
    e.preventDefault();

    // Create a new FormData object passing in the form
    const data = new FormData(form);
    // Make a new product object from the formData (i.e. form.get) data.get?
    const id = data.get('id');
    const name = data.get('name');
    const image = data.get('image');
    const imageAlt = data.get('image-alt');
    const description = data.get('description');
    const category = data.get('category');
    const price = data.get('price');

    const newWig = {
        id: id,
        name: name,
        image: image,
        imageAlt: imageAlt,
        description: description,
        category: category,
        price: Number(price),
    };
    // Call your new store addProduct function with the object.
    addWig(newWig);
    // Reset the form
    form.reset();

});

