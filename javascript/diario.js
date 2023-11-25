const semanas = [
    [26, 27, 28, 29, 30, 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30],
    [31, 1, 2, 3, 4, 5, 6]
]

document.addEventListener('DOMContentLoaded', function() {
    let dias = document.querySelector('.semana').querySelectorAll('h3')
    let botao_semana = document.querySelector('.mes').querySelectorAll('a')
    let anterior = botao_semana[0]
    let proxima = botao_semana[1]
    let i = 1
    let verificador_oculto = false
    let verificador_oculto2 = false

    function troca_semana(i, dias) {
        for (j=0; j<7; j++) {
            dias[j].innerHTML = semanas[i][j]
        }
    }

    anterior.addEventListener('click', function() {
        if (i == 5) {
            proxima.classList.remove('oculto')
            verificador_oculto = false
        }
        if (i != 0) {
            i -= 1
        }
        if (i == 0 & verificador_oculto == false) {
            i = 0
            anterior.classList.add('oculto')
            verificador_oculto = true
        }
        troca_semana(i, dias)
    });

    proxima.addEventListener('click', function() {
        if (i == 0) {
            anterior.classList.remove('oculto')
            verificador_oculto2 = false
        }
        if (i != 5) {
            i += 1
        }
        if (i == 5 & verificador_oculto2 == false) {
            i = 4
            proxima.classList.add('oculto')
            verificador_oculto2 = true
        }
        troca_semana(i, dias)
    });
});