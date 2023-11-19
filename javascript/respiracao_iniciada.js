document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('#favoritar');
    const nome_exercicio = document.querySelector('#nome_exericio').innerHTML;
    const desc_exercicio = document.querySelector('#desc_exercicio').innerHTML;
    const tempo_exercicio = document.querySelector('#tempo_exercicio').innerHTML;

    const body = document.querySelector('body');
    const bodyStyles = getComputedStyle(body);
    const bg_color = bodyStyles.background;

    let favoritos = JSON.parse(localStorage.getItem(nome_exercicio));
    heart.src = favoritos === null ? 'img/white_heart.png' : 'img/white_heart_filled.png';

    heart.addEventListener('click', () => {
        favoritos = JSON.parse(localStorage.getItem(nome_exercicio));
        if (favoritos === null) {
            heart.src = 'img/white_heart_filled.png';
            save_info = JSON.stringify({
                nome: nome_exercicio,
                desc: desc_exercicio,
                tempo: tempo_exercicio,
                bg_color: bg_color,
            });
            infos = localStorage.setItem(nome_exercicio, save_info);
        } else {
            heart.src = 'img/white_heart.png';
            localStorage.removeItem(nome_exercicio);
        }
    });
});
