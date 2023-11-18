document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('#favoritos');
    const exercicios = document.querySelectorAll('section');

    let favoritos = false;
    heart.addEventListener('click', () => {
        if (favoritos == false) {
            heart.src = 'img/black_heart_filled.png';
            favoritos = true;
            for (let exercicio of exercicios) {
                nome_exercicio = exercicio.querySelector('h2').innerHTML;

                if (localStorage.getItem(nome_exercicio) == null) {
                    exercicio.style.display = 'none';
                }
            }
        } else {
            heart.src = 'img/black_heart.png';
            favoritos = false;
            for (let exercicio of exercicios) {
                exercicio.style.display = 'flex';
            }
        }
    });

    exercicios_container = document.querySelector('.cards-container');
    for (let i = 0; i < exercicios.length; i++) {
        exercicios[i].addEventListener('click', () => {
            prev = i != 0 ? i - 1 : 0;
            next = i != exercicios.length - 1 ? i + 1 : exercicios.length - 1;
            exercicios[next].classList.remove('active');
            exercicios[prev].classList.remove('active');
            exercicios[i].classList.toggle('active');
            exercicios_container.style = `transform: translateX(-${i * 16}rem)`;
            exercicios_container.style.transition =
                'transform 0.5s ease-in-out';
        });
    }
});
