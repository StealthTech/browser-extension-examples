const div = document.createElement('div');
div.style.width = '100%';
div.style.backgroundColor = '#353535';
div.style.color = '#fff';
div.style.padding = '4px 12px';
div.style.fontFamily = 'sans-serif';

const {length: count} = document.querySelectorAll('a');
const content = `Количество ссылок на странице: ${count}`
div.textContent = content;

document.body.insertAdjacentElement('afterbegin', div);
