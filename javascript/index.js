document.addEventListener('DOMContentLoaded', function() {
    // Troca a imagem de fundo pela imagem salva no localStorage
    html = document.querySelector('html');
    if (localStorage.getItem('fundoUrl')) {
        html.style.backgroundImage = localStorage.getItem('fundoUrl');
    };
});