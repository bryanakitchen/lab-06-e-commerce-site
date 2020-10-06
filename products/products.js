import { wigs } from '../data.js';
import { renderWig } from '../utils.js';

// In your products.js, you will need to:
const ul = document.querySelector('#list');

for (let i = 0; i < wigs.length; i++) {
    const wig = wigs[i];

    const li = renderWig(wig);

    ul.appendChild(li);
}
