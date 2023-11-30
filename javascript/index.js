document.addEventListener('DOMContentLoaded', function () {
    // Troca a imagem de fundo pela imagem salva no localStorage
    html = document.querySelector('html');

    if (localStorage.getItem('fundoUrl')) {
        html.style.backgroundImage = localStorage.getItem('fundoUrl');
    } else {
        localStorage.setItem('fundoUrl', 'url(http://127.0.0.1:5500/img/novo_fundo4.jpg)');
        html.style.backgroundImage = localStorage.getItem('fundoUrl');
    }
});
