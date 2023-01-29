console.log('dom file');
const body = document.querySelector('body');

const styleBody = () => {
  body.style.background = 'peachpuff';
};

const addTtile = (text) => {
  const title = document.createElement('h1');
  title.textContent = text;
  body.appendChild(title);
}


const contact = 'kristjan.laane@gmail.com';

export { styleBody, addTtile, contact }