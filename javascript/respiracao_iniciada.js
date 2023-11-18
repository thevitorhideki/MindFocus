document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('#favoritar');
    const nome_exercicio = document.querySelector('#nome_exericio').innerHTML;

    let favoritos = localStorage.getItem(nome_exercicio);
    heart.src =
        favoritos === 'true'
            ? 'img/white_heart_filled.png'
            : 'img/white_heart.png';

    heart.addEventListener('click', () => {
        favoritos = localStorage.getItem(nome_exercicio);
        if (favoritos === null) {
            console.log('Favoritado');
            heart.src = 'img/white_heart_filled.png';
            localStorage.setItem(nome_exercicio, true);
        } else if (favoritos === 'true') {
            console.log('Desfavoritado');
            heart.src = 'img/white_heart.png';
            localStorage.removeItem(nome_exercicio, false);
        }
    });
});
