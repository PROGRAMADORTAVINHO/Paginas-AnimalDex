    // Selecionar a div explorar e a modal
    const explorarDiv = document.querySelector('.explorar');
    const modal = document.getElementById('explorarModal');

    // Abrir a modal ao clicar na div explorar
    explorarDiv.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Fechar a modal ao clicar fora dela
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });