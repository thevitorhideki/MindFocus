document.addEventListener('DOMContentLoaded', () => {
    const infos = JSON.parse(localStorage.getItem('Exercício Iniciado'));
    const nome_exercicio = infos.nome;
    const desc_exercicio = infos.desc;
    const tempo_exercicio = infos.tempo;
    const bg_color = infos.bg_color;
    document.querySelector('#nome_exercicio').innerHTML = nome_exercicio;
    document.querySelector('#desc_exercicio').innerHTML = desc_exercicio;
    document.querySelector('#tempo_exercicio').innerHTML = tempo_exercicio;
    document.querySelector('body').style.backgroundImage = bg_color;

    const heart = document.querySelector('#favoritar');

    let favoritos = JSON.parse(localStorage.getItem(nome_exercicio));
    heart.src = favoritos === null ? 'img/white_heart.png' : 'img/white_heart_filled.png';

    heart.addEventListener('click', () => {
        favoritos = JSON.parse(localStorage.getItem(nome_exercicio));
        if (favoritos === null) {
            heart.src = 'img/white_heart_filled.png';
            infos = localStorage.setItem(nome_exercicio, JSON.stringify(infos));
        } else {
            heart.src = 'img/white_heart.png';
            localStorage.removeItem(nome_exercicio);
        }
    });
});
