document.addEventListener('DOMContentLoaded', function() {
    semana_atual = parseInt(localStorage.getItem('Semana: '))
    ultimo_ativo = parseInt(localStorage.getItem('Dia: '))
    nota = document.querySelector('.nota')
    input = document.querySelector('textarea')
    classificador = document.querySelector('.classificador')
    pos_neg = classificador.querySelectorAll('a')
    pos = pos_neg[0]
    neg = pos_neg[1]
    salvar = document.querySelector('.salvar')
    bool_pos = false
    bool_neg = false
    contador_notas = parseInt(localStorage.getItem('Contador: '))

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
            localStorage.setItem(`Semana${contador_notas}: `, semana_atual)
            localStorage.setItem(`Dia${contador_notas}: `, ultimo_ativo)
            localStorage.setItem(`PosNeg${contador_notas}: `, 'positivo')
            localStorage.setItem(`Nota${contador_notas}: `, input.value)
        }
        else {
            localStorage.setItem(`Semana${contador_notas}: `, semana_atual)
            localStorage.setItem(`Dia${contador_notas}: `, ultimo_ativo)
            localStorage.setItem(`PosNeg${contador_notas}: `, 'negativo')
            localStorage.setItem(`Nota${contador_notas}: `, input.value)
        }
        window.location.href = 'diario.html'
    })
});