document.addEventListener('DOMContentLoaded', () => {
    const cria_elementos = (nome, desc, color, time) => {
        const section = document.createElement('section');
        section.style.background = color;
        section.innerHTML = `
        <div class="infos">
            <h2>${nome}</h2>
            <p>${desc}</p>
            <div class="bottom-container">
                <div class="tempo">
                    <p>${time}</p>
                    <img src="img/clock.png" alt="Tempo">
                </div>
                <a href="./respiracao_iniciada.html">Iniciar</a>
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
});
