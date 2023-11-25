document.addEventListener('DOMContentLoaded', function() {
    // Troca a imagem de fundo pela imagem salva no localStorage
    html = document.querySelector('html');
    if (localStorage.getItem('fundo')) {
        html.style.backgroundImage = 'url(' + localStorage.getItem('fundo') + ')';
    };
    
});