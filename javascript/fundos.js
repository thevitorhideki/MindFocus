document.addEventListener('DOMContentLoaded', function() {
    // Pega o src da imagem clicada
    fundos = document.querySelectorAll('figure img');
    html = document.querySelector('html');

    // Troca a imagem de fundo pela imagem salva no localStorage
    html.style.backgroundImage = localStorage.getItem('fundoUrl');

    // Adiciona um event listener para cada imagem
    for (let i = 0; i < fundos.length; i++) {
        fundos[i].addEventListener('click', function() {
            // Pega o SRC e o URL da imagem clicada e salva no localStorage
            localStorage.setItem('fundoUrl', ('url(' + fundos[i].src +')'));

            // Troca a imagem de fundo pela imagem salva no localStorage ao selecionar uma nova
            html.style.backgroundImage = localStorage.getItem('fundoUrl');
        });
    };
});