document.getElementById('form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const contato = document.getElementById('contato').value.trim();

    if (!nome || !contato) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycby0vhmAu__hLhiVZCUbQkhCOhYueK7kX3iIc2TzL9Sz/dev", {
            method: "POST",
            mode: 'no-cors',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, contato })
        });

        const result = await response.text();
        console.log("Resposta do servidor:", result);

        if (response.ok) {
            alert("Registrado com sucesso!");
            window.location.href = "../pages/conclusao.html";
        } else {
            alert("Erro ao registrar. Tente novamente.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Erro ao conectar-se ao servidor.");
    }
});
