document.getElementById('botao').addEventListener('click', function() {
    var ul = document.querySelector('ul');
    ul.classList.toggle('show');
});

document.querySelector('.button1').addEventListener('click', function() {
    window.location.href = 'chamados.html';
});

document.querySelector('.button2').addEventListener('click', function() {
    window.location.href = 'chatbot.html';
});

