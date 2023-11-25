document.addEventListener('DOMContentLoaded', () => {
    const cria_elementos = (nome, desc, color, time) => {
        const section = document.createElement('section');
        section.style.background = color;
        section.innerHTML = `
        <div class="infos">
            <h2 id="nome_exercicio">${nome}</h2>
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
        const value = JSON.parse(localStorage.getItem(key));
        if (key.includes('Respiração')) {
            cria_elementos(value['nome'], value['desc'], value['bg_color'], value['tempo']);
        }
    }

    const iniciar = document.querySelectorAll('#iniciar');
    const exercicios = document.querySelectorAll('section');
    for (let i = 0; i < exercicios.length; i++) {
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
