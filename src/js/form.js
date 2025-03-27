document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const contato = document.getElementById('contato').value;

    if (nome && contato) {
        // Criando a mensagem a ser enviada via WhatsApp
        const mensagem = encodeURIComponent(
            `Novo registro de cliente:\nNome: ${nome}\nContato: ${contato}`
        );

        // Número de telefone para o qual a mensagem será enviada
        const numeroWhatsApp = '5581997033290'; // Altere para o número desejado (incluindo código do país)

        // Gerando o link para o WhatsApp
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

        // Redirecionando para o WhatsApp
        window.open(linkWhatsApp, '_blank');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
