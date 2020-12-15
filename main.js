const xhr = new XMLHttpRequest();
const button = document.querySelector('.button');
xhr.addEventListener('loadend', () => {
    const data = JSON.parse(xhr.responseText);
    button.innerText = 'Another dog, please!'
    button.disabled = false;
    document.querySelector('img').src = data.message;
})

button.addEventListener('click', () => {
    button.disabled = true;
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
    xhr.send();
})
