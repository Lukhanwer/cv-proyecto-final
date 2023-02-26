

let hideText_btn = document.getElementById('hideText_btn');

let hideText = document.getElementById('hideText');


hideText_btn.addEventListener('click', toggletext);

function toggletext() {
    hideText.classList.toggle('show');
    if(hideText.classList.contains('show')) {
        hideText_btn.innerHTML = '<i class="fa-solid fa-angles-up"></i>mostrar menos';        
    }
    else{
        hideText_btn.innerHTML = '<i class="fa-solid fa-angles-down"></i> leer mas';
    }
}
