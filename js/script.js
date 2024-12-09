// Adiciona evento de envio ao formulário
document.getElementById('form-contato').addEventListener('submit', function(event) {
    // Previne o comportamento padrão (recarregar a página)
    event.preventDefault();
    // Exibe mensagem de sucesso
    alert('Mensagem enviada com sucesso!');
});

// Rolagem suave ao clicar nos links de navegação
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado por entrar em contato, responderemos em breve!');
});
