document.addEventListener('DOMContentLoaded', () => {
    const exercicios = document.querySelectorAll('section');
    const iniciar = document.querySelectorAll('#iniciar');
    const exercicios_container = document.querySelector('.cards-container');

    for (let i = 0; i < exercicios.length; i++) {
        exercicios[i].addEventListener('click', () => {
            prev = i != 0 ? i - 1 : 0;
            next = i != exercicios.length - 1 ? i + 1 : exercicios.length - 1;
            exercicios[next].classList.remove('active');
            exercicios[prev].classList.remove('active');
            exercicios[i].classList.add('active');
            exercicios_container.style = `transform: translateX(-${i * 16}rem)`;
        });
        iniciar[i].addEventListener('click', () => {
            let nome_exercicio = exercicios[i].querySelector('#nome_exercicio').innerHTML;
            let desc = exercicios[i].querySelector('#desc_exercicio').innerHTML;
            let tempo = exercicios[i].querySelector('#tempo').innerHTML;

            const bodyStyles = getComputedStyle(exercicios[i]);
            const bg_color = bodyStyles.backgroundImage;

            localStorage.setItem(
                'Exercício Iniciado',
                JSON.stringify({ nome: nome_exercicio, desc: desc, tempo: tempo, bg_color: bg_color })
            );
        });
    }
});
