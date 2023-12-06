document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os grupos
    titulo_grupo = document.querySelectorAll('section');

    // Adiciona o evento de clique em cada grupo
    titulo_grupo.forEach(function (elemento) {
        elemento.addEventListener('click', function () {
            // Seleciona o h2 filho do grupo clicado e salva no localStorage
            h2 = this.querySelector('h2').innerHTML;
            localStorage.setItem('grupo_titulo', h2);
        });
    });
});
