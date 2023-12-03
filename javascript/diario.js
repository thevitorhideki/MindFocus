// Função descobre_semana adaptada de https://stackoverflow.com/a/27125580
// Função que dado uma data retorna o número da semana do ano, começando em 0
function descobre_semana(data) {
    // Cria uma data com o dia 1 de janeiro do ano, para que possa ser calculado o número da semana em relação a ele
    let onejan = new Date(data.getFullYear(), 0, 1);
    // Calcula o número da semana em relação ao dia 1 de janeiro do ano
    let week = Math.ceil((((data.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
    return week - 1;
}

// Função que muda a semana que é exibida na página de acordo com a data atual 
function troca_semana(i, dias) {
    for (j=0; j<7; j++) {
        dias[j].querySelector('h3').innerHTML = semanas[i][j]
    }
}

function troca_dia_ativo(dias, ativo) {
    for (let i=0; i<7; i++) {
        if (ativo[i] == true){
            dias[i].classList.add('ativo')
        }
        if (ativo[i] == false){
            dias[i].classList.remove('ativo')
        }
    }
}

function troca_mes(i) {
    let mes = document.querySelector('.mes').querySelector('h2')
    if (i <= 3) {
        mes.innerHTML = 'Janeiro'
    }
    else if (i == 4) {
        mes.innerHTML = 'Jan/Fev'
    }
    else if (i > 4 & i <= 7) {
        mes.innerHTML = 'Fevereiro'
    }
    else if (i == 8) {
        mes.innerHTML = 'Fev/Mar'
    }
    else if (i > 8 & i <= 11) {
        mes.innerHTML = 'Março'
    }
    else if (i == 12) {
        mes.innerHTML = 'Mar/Abr'
    }
    else if (i > 12 & i <= 16) {
        mes.innerHTML = 'Abril'
    }
    else if (i == 17) {
        mes.innerHTML = 'Abr/Mai'
    }
    else if (i > 17 & i <= 20) {
        mes.innerHTML = 'Maio'
    }
    else if (i == 21) {
        mes.innerHTML = 'Mai/Jun'
    }
    else if (i > 21 & i <= 24) {
        mes.innerHTML = 'Junho'
    }
    else if (i == 25) {
        mes.innerHTML = 'Jun/Jul'
    }
    else if (i > 25 & i <= 29) {
        mes.innerHTML = 'Julho'
    }
    else if (i == 30) {
        mes.innerHTML = 'Jul/Ago'
    }
    else if (i > 30 & i <= 33) {
        mes.innerHTML = 'Agosto'
    }
    else if (i == 34) {
        mes.innerHTML = 'Ago/Set'
    }
    else if (i > 34 & i <= 38) {
        mes.innerHTML = 'Setembro'
    }
    else if (i > 38 & i <= 42) {
        mes.innerHTML = 'Outubro'
    }
    else if (i == 43) {
        mes.innerHTML = 'Out/Nov'
    }
    else if (i > 43 & i <= 46) {
        mes.innerHTML = 'Novembro'
    }
    else if (i == 47) {
        mes.innerHTML = 'Nov/Dez'
    }
    else if (i > 47 & i <= 51) {
        mes.innerHTML = 'Dezembro'
    }
    else if (i == 52) {
        mes.innerHTML = 'Dez/Jan'
    }
}

function notas_local (contador_notas) {
    let notas = []
    for (let i=1; i<=contador_notas; i++) {
        notas.push([parseInt(localStorage.getItem(`Semana${i}: `)), parseInt(localStorage.getItem(`Dia${i}: `)), localStorage.getItem(`PosNeg${i}: `), localStorage.getItem(`Nota${i}: `)])
    }
    return notas
}

function verifica_nota(semana_atual, ultimo_ativo, contador_notas, posneg_s) {
    notas = notas_local(contador_notas)
    for (j of notas) {
        if (j[0] == semana_atual & j[1] == ultimo_ativo) {
            if (j[2] == 'positivo') {
                a = document.createElement('a')
                a.classList.add('nota_pos')
                a.href = 'diario_view_nota.html'
                p = document.createElement('p')
                p.innerHTML = j[3].slice(0, 120)
                p_total = document.createElement('p')
                p_total.innerHTML = j[3]
                p_total.style.display = 'none'
                a.appendChild(p)
                a.appendChild(p_total)
                posneg_s[0].appendChild(a)
            }
            else {
                a = document.createElement('a')
                a.classList.add('nota_neg')
                a.href = 'diario_view_nota.html'
                p = document.createElement('p')
                p.innerHTML = j[3].slice(0, 120)
                p_total = document.createElement('p')
                p_total.innerHTML = j[3]
                p_total.style.display = 'none'
                a.appendChild(p)
                a.appendChild(p_total)
                posneg_s[1].appendChild(a)
            }
        }
        else {
            posneg_s[0].innerHTML = '<h2>Positivos</h2>'
            posneg_s[1].innerHTML = '<h2>Negativos</h2>'
        }
    }
}

// Variáveis globais
let data = new Date()
// Faz com que o horário da data pega seja 00:00:00 para que a função descobre_semana funcione corretamente
data = new Date(data.getFullYear(), data.getMonth(), data.getDate())
const semana_inicial = descobre_semana(data)
const dia_inicial = data.getDay()
let i = descobre_semana(data)
let verificador_oculto = false
let verificador_oculto2 = false

// Lista com todas as semanas de 2023
const semanas = [
    // Jan
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    // Jan/Fev
    [29, 30, 31, 1, 2, 3, 4],
    // Fev
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    // Fev/Mar
    [26, 27, 28, 1, 2, 3, 4],
    // Mar
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    // Mar/Abr
    [26, 27, 28, 29, 30, 31, 1],
    // Abr
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    // Abr/Mai
    [30, 1, 2, 3, 4, 5, 6],
    // Mai
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    // Mai/Jun
    [28, 29, 30, 31, 1, 2, 3],
    // Jun
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    // Jun/Jul
    [25, 26, 27, 28, 29, 30, 1],
    // Jul
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    // Jul/Ago
    [30, 31, 1, 2, 3, 4, 5],
    // Ago
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    // Ago/Set
    [27, 28, 29, 30, 31, 1, 2],
    // Set
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30],
    // Out
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    // Out/Nov
    [29, 30, 31, 1, 2, 3, 4],
    // Nov
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    // Nov/Dez
    [26, 27, 28, 29, 30, 1, 2],
    // Dez
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30],
    // Dez/Jan
    [31, 1, 2, 3, 4, 5, 6]
]


document.addEventListener('DOMContentLoaded', function() {
    let dias = document.querySelector('.semana').querySelectorAll('a')
    let botao_semana = document.querySelector('.mes').querySelectorAll('a')
    let posneg_s = document.querySelector('.posneg').querySelectorAll('section')
    let anterior = botao_semana[0]
    let proxima = botao_semana[1]
    let semana_atual = i
    let ativo = {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false
    }
    let ultimo_ativo = data.getDay()

    if (localStorage.getItem('Contador: ') != null) {
        contador_notas = parseInt(localStorage.getItem('Contador: '))
    }
    else {
        contador_notas = 0
        localStorage.setItem('Contador: ', contador_notas)
    }

    ativo[data.getDay()] = true

    for (let k=0; k<=dia_inicial; k++) {
        dias[k].classList.remove('dia_nao_selecionavel')
    }
    for (let k=dia_inicial+1; k<=6; k++) {
        dias[k].classList.add('dia_nao_selecionavel')
    }
    
    troca_dia_ativo(dias, ativo)

    troca_semana(i, dias)

    troca_mes(i)
    verifica_nota(semana_atual, ultimo_ativo, contador_notas, posneg_s)

    anterior.addEventListener('click', function() {
        if (i == semanas.length - 1) {
            proxima.classList.remove('oculto')
            verificador_oculto2 = false
        }
        if (i != 0) {
            i -= 1
        }
        if (i == 0 & verificador_oculto == false) {
            anterior.classList.add('oculto')
            verificador_oculto = true
        }

        if (i != semana_atual) {
            for (let k=0; k<7; k++) {
                ativo[k] = false
            }
        }
        if (i == semana_atual) {
            ativo[ultimo_ativo] = true
        }

        if (i > semana_inicial) {
            for (let k=0; k<7; k++) {
                dias[k].classList.add('dia_nao_selecionavel')
            }
        }

        if (i == semana_inicial) {
            for (let k=0; k<=dia_inicial; k++) {
                dias[k].classList.remove('dia_nao_selecionavel')
            }
            for (let k=dia_inicial+1; k<=6; k++) {
                dias[k].classList.add('dia_nao_selecionavel')
            }
        }

        if (i < semana_inicial) {
            for (let k=0; k<7; k++) {
                dias[k].classList.remove('dia_nao_selecionavel')
            }
        }

        troca_semana(i, dias)
        troca_dia_ativo(dias, ativo)
        troca_mes(i)
    });

    proxima.addEventListener('click', function() {
        if (i == 0) {
            anterior.classList.remove('oculto')
            verificador_oculto = false
        }
        if (i != semanas.length - 1) {
            i += 1
        }
        if (i == semanas.length - 1 & verificador_oculto2 == false) {
            proxima.classList.add('oculto')
            verificador_oculto2 = true
        }

        if (i != semana_atual) {
            for (let k=0; k<7; k++) {
                ativo[k] = false
            }
        }
        if (i == semana_atual) {
            ativo[ultimo_ativo] = true
        }

        if (i > semana_inicial) {
            for (let k=0; k<7; k++) {
                dias[k].classList.add('dia_nao_selecionavel')
            }
        }
        
        if (i == semana_inicial) {
            for (let k=0; k<=dia_inicial; k++) {
                dias[k].classList.remove('dia_nao_selecionavel')
            }
            for (let k=dia_inicial+1; k<=6; k++) {
                dias[k].classList.add('dia_nao_selecionavel')
            }
        }

        if (i < semana_inicial) {
            for (let k=0; k<7; k++) {
                dias[k].classList.remove('dia_nao_selecionavel')
            }
        }

        troca_semana(i, dias)
        troca_dia_ativo(dias, ativo)
        troca_mes(i)
    });
    
    for (let j=0; j<7; j++) {
        dias[j].addEventListener('click', function() {
            if (dias[j].classList.contains('dia_nao_selecionavel')) {
                alert('Esse dia ainda não ocorreu!')
            }
            else {
                for (let k=0; k<7; k++) {
                    ativo[k] = false
                }
                ativo[j] = true
                ultimo_ativo = j
                semana_atual = i
                troca_dia_ativo(dias, ativo)
                verifica_nota(semana_atual, ultimo_ativo, contador_notas, posneg_s)
            }
        });
    }

    document.querySelector("body > main > a").addEventListener('click', function() {
        localStorage.setItem('Semana: ', semana_atual)
        localStorage.setItem('Dia: ', ultimo_ativo)
        contador_notas += 1
        localStorage.setItem('Contador: ', contador_notas)
    });
    
    notas_pos = document.querySelector('.posneg').querySelectorAll('section')[0].querySelectorAll('a')
    notas_neg = document.querySelector('.posneg').querySelectorAll('section')[1].querySelectorAll('a')
    for (let j=0; j<notas_pos.length; j++) {
        notas_pos[j].addEventListener('click', function() {
            localStorage.setItem('Ver PosNeg: ', 'positivo')
            localStorage.setItem('Ver Nota: ', notas_pos[j].querySelectorAll('p')[1].innerHTML)
        });
    }
    for (let j=0; j<notas_neg.length; j++) {
        notas_neg[j].addEventListener('click', function() {
            localStorage.setItem('Ver PosNeg: ', 'negativo')
            localStorage.setItem('Ver Nota: ', notas_neg[j].querySelectorAll('p')[1].innerHTML)
        });
    }
});