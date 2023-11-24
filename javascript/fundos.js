document.addEventListener('DOMContentLoaded', function() {
    // Pega o src da imagem clicada
    fundos = document.querySelectorAll('figure img');

    // Adiciona um event listener para cada imagem
    for (let i = 0; i < fundos.length; i++) {
        fundos[i].addEventListener('click', function() {
            // Pega o src da imagem clicada e salva no localStorage
            image_src = fundos[i].getAttribute('src');
            localStorage.setItem('fundo', image_src);
        });
    };
});