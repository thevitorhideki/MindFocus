document.addEventListener('DOMContentLoaded', () => {
    const exercicios = document.querySelectorAll('section');
    const exercicios_container = document.querySelector('.cards-container');

    for (let i = 0; i < exercicios.length; i++) {
        exercicios[i].addEventListener('click', () => {
            prev = i != 0 ? i - 1 : 0;
            next = i != exercicios.length - 1 ? i + 1 : exercicios.length - 1;
            exercicios[next].classList.remove('active');
            exercicios[prev].classList.remove('active');
            exercicios[i].classList.add('active');
            exercicios_container.style = `transform: translateX(-${i * 16}rem)`;
            exercicios_container.style.transition = 'transform 0.5s ease-in-out';
        });
    }
});
