document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato");
    const feedback = document.getElementById("form-feedback");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Impede a página de recarregar

            // Captura os valores dos campos
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const mensagem = document.getElementById("mensagem").value;

            // Simula uma resposta de envio do servidor
            feedback.style.color = "#2f855a"; // Verde de sucesso
            feedback.innerText = `Obrigado pelo contato, ${nome}! Nossa equipe de especialistas em Agro Sustentável responderá em breve no e-mail: ${email}.`;

            // Limpa o formulário
            form.reset();

            // Apaga a mensagem de sucesso depois de 7 segundos
            setTimeout(() => {
                feedback.innerText = "";
            }, 7000);
        });
    }
});
