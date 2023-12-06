document.addEventListener('DOMContentLoaded', function () {
    // Adicionar a mensagem digitada pelo usuário no campo de texto
    chat = document.querySelector('.chat');
    envio = document.querySelector('img[class="envio"]');

    // Muda o título do chat
    titulo = document.querySelector('h1');
    titulo.innerHTML = localStorage.getItem('grupo_titulo');

    // Verifica se apertou o botão de enviar
    envio.addEventListener('click', function () {
        mensagem = document.querySelector('input[type="text"]');
        if (mensagem.value != '') {
            nova_mesagem = document.createElement('p');
            nova_mesagem.innerHTML = mensagem.value;
            nova_mesagem.classList.add('user');

            chat.appendChild(nova_mesagem);
            mensagem.value = '';
        }
    });
});
