document.addEventListener('DOMContentLoaded', function() {
    semana_atual = localStorage.getItem('Semana: ')
    ultimo_ativo = localStorage.getItem('Dia: ')
    nota = document.querySelector('.nota')
    input = document.querySelector('textarea')
    classificador = document.querySelector('.classificador')
    pos_neg = classificador.querySelectorAll('a')
    pos = pos_neg[0]
    neg = pos_neg[1]
    salvar = document.querySelector('.salvar')
    bool_pos = false
    bool_neg = false

    pos.addEventListener('click', function() {
        salvar.classList.remove('oculto')
        nota.style.border = '0.1875rem solid #C2E8FF'
        bool_neg = false
        bool_pos = true
    })
    neg.addEventListener('click', function() {
        salvar.classList.remove('oculto')
        nota.style.border = '0.1875rem solid #FFE3C2'
        bool_pos = false
        bool_neg = true
    })

    salvar.addEventListener('click', function() {
        if (bool_pos) {
            localStorage.setItem('Semana: ', semana_atual)
            localStorage.setItem('Dia: ', ultimo_ativo)
            localStorage.setItem('PosNeg: ', 'positivo')
            localStorage.setItem('Nota: ', input.value)
        }
        else {
            localStorage.setItem('Semana: ', semana_atual)
            localStorage.setItem('Dia: ', ultimo_ativo)
            localStorage.setItem('PosNeg: ', 'negativo')
            localStorage.setItem('Nota: ', input.value)
        }
        window.location.href = 'diario.html'
    })
});