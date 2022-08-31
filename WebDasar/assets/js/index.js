// Document Object Model
document.getElementById('captionCard')
	
document.getElementsByName('captionCard')

document.getElementsByClassName('captionCard')

// document.getElementsByTagName('captionCard')

document.querySelector('.captionCard')

let childs = document.querySelectorAll('.child')

// Atrribute

for (const child of childs) {
    child.setAttribute('id', 'child')
    console.log(child);
}

console.log(childs[0].getAttribute('id'))

// Content

let p = document.querySelector('.captionCard')

p.innerText = '<em>Belajar DOM Javascript</em>'

p.innerHTML = '<b>Belajar DOM Javascript</b>'

// Element

let newEl = document.createElement('button')
newEl.innerHTML = 'Klik'
document.body.appendChild(newEl)

// Event 
newEl.addEventListener('click', (e) => {
    let p = document.createElement('p')
    p.innerHTML = 'Hello, World!'
    document.body.appendChild(p)
})

