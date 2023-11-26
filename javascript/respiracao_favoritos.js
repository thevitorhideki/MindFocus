document.addEventListener('DOMContentLoaded', () => {
    const cria_elementos = (nome, desc, color, time) => {
        const section = document.createElement('section');
        section.style.background = color;
        section.innerHTML = `
        <div class="infos">
            <div class="card-header">
                <h2 id="nome_exercicio">${nome}</h2>
                <img id="favorito" src="img/white_heart_filled.png" alt="Coração">
            </div>
            <p id="desc_exercicio">${desc}</p>
            <div class="bottom-container">
                <div class="tempo">
                    <p id="tempo">${time}</p>
                    <img src="img/clock.png" alt="Tempo">
                </div>
                <a id="iniciar" href="./respiracao_iniciada.html">Iniciar</a>
            </div>
        </div>`;
        document.querySelector('.cards-container').appendChild(section);
    };

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.includes('Respiração')) {
            const value = JSON.parse(localStorage.getItem(key));
            cria_elementos(value['nome'], value['desc'], value['bg_color'], value['tempo']);
        }
    }

    const iniciar = document.querySelectorAll('#iniciar');
    const exercicios = document.querySelectorAll('section');
    const favorito = document.querySelectorAll('#favorito');
    for (let i = 0; i < exercicios.length; i++) {
        favorito[i].addEventListener('click', () => {
            exercicios[i].style.display = 'none';
            localStorage.removeItem(exercicios[i].querySelector('#nome_exercicio').innerHTML);
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
