function welcome() {
    alert('Welcome');
    const contents = document.querySelector('.contents')
    contents.removeAttribute('hidden')
}

function increment(){
    document.querySelector('#count').innerText++;

    if (document.getElementById('count').innerText == 7) {
        const hiddenMessage = document.createElement('h4');
        hiddenMessage.innerText = 'Selamat! Anda menemukan hadiah tersembunyi...';

        const image = document.createElement('img');
        image.setAttribute('src', 'https://i.ibb.co/0V49VRZ/catto.jpg');

        const contents = document.querySelector('.contents');
        contents.appendChild(hiddenMessage).appendChild(image);
    }
}

// window.addEventListener('load', welcome)
// document.querySelector('#incrementButton').addEventListener('click', increment)

// document.body.onload = welcome
// document.querySelector('#incrementButton').onclick = increment

/* Custom Event */

const changeCaption = new Event('changeCaption');

window.addEventListener('load', function() {
    const tombol = document.getElementById('tombol');
    
    tombol.addEventListener('changeCaption', customEventHandler);
    tombol.addEventListener('click', function() {
        tombol.dispatchEvent(changeCaption)
    });
});

function customEventHandler(ev) {
    console.log('Event ' + ev.type + ' telah dijalankan');
    const caption = document.getElementById('caption');
    caption.innerText = 'Anda telah membangkitkan custom event';
}
