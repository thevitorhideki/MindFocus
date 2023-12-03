document.addEventListener('DOMContentLoaded', function() {
    nota = document.querySelector('.nota');
    texto = nota.querySelector('p');
    texto.innerHTML = localStorage.getItem('Ver Nota: ');
    console.log(texto.innerHTML);

    if (localStorage.getItem('Ver PosNeg: ') == 'positivo') {
        nota.style.background = '#C2E8FF';
    }
    else {
        nota.style.background = '#FFE3C2';
    }
});