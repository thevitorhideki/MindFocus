document.addEventListener('DOMContentLoaded', function () {
    // Troca a imagem de fundo pela imagem salva no localStorage
    html = document.querySelector('html');
    

    if (localStorage.getItem('fundoUrl')) {
        html.style.backgroundImage = localStorage.getItem('fundoUrl');
    } else {
        localStorage.setItem('fundoUrl', 'url(http://127.0.0.1:5500/img/novo_fundo4.jpg)');
        html.style.backgroundImage = localStorage.getItem('fundoUrl');
    }

    // Função para pegar o dia, mes e ano atual e colocar nas informações
    var date = new Date();
    var dia = date.getDate();
    var ano = date.getFullYear();
    
    var mes = date.getMonth();
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembo', 'Outubro', 'Novembro', 'Dezembro'];
    mes = meses[mes];

    data = document.querySelector('p');
    data.innerHTML = dia + ' de ' + mes + ' de ' + ano;
});
