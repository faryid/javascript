document
    .getElementById('set')
    .addEventListener('click', setAppearance);

const box = document.getElementById('box');

const elements = document.getElementsByTagName('select');

function setAppearance() {
    for (const element of elements) {
        const cssProperty = element.getAttribute('id');
        box.style[cssProperty] = element.value;
    }
}
