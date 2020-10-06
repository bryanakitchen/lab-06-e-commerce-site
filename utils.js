export function renderWig(wig) {
    const li = document.createElement('li');
    li.classList.add('wig');

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = wig.name;

    
    const image = document.createElement('img');
    image.classList.add('image');
    image.src = `../assets/${wig.image}`;
    image.alt = wig.imageAlt;

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = wig.description;

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `$${wig.price}`;

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    
    li.appendChild(name);
    li.appendChild(image);
    // is img a child of p??? Also need to add alt id?
    li.appendChild(description);
    li.appendChild(price);
    li.appendChild(button);

    return li;
}