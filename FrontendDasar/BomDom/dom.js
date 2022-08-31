const gambar = document.getElementById('gambar')
gambar.setAttribute('width', 300)
gambar.setAttribute('height', '215')

const buttons = document.querySelectorAll('.button')
const playButton = buttons[3]

const playButtonElement = playButton.children[0];
playButtonElement.setAttribute('type', 'submit')

const dicoding = document.querySelector('#dicodingLink')
dicoding.innerText = 'Belajar Programming di Dicoding'

const google = document.querySelector('#googleLink')
google.innerHTML = '<i>Google</i>'

// style

for (const button of buttons) {
    button.children[0].style.borderRedius = '10px'
}

// adding element

const newElement = document.createElement('li')
newElement.innerText = 'Selamat menikmati!'
const daftar = document.getElementById('daftar')
daftar.appendChild(newElement)

const elementAwal = document.createElement('li');
elementAwal.innerText = 'Hidupkan kompor.';

const itemAwal = document.getElementById('awal');
daftar.insertBefore(elementAwal, itemAwal)