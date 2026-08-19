document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formConsultoria");
    
    if (form) {
        const feedback = document.getElementById("mensagemFeedback");

        form.addEventListener("submit", function (evento) {
            evento.preventDefault(); // Impede o envio real para validar com JS

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const cultura = document.getElementById("cultura").value.trim();
            const telefone = document.getElementById("telefone").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            // 1. Validação de campos obrigatórios vazios
            if (!nome || !email || !cultura || !telefone || !mensagem) {
                feedback.style.color = "#D32F2F"; // Vermelho erro
                feedback.textContent = "Por favor, preencha todos os campos do formulário.";
                return;
            }

            // 2. Validação básica de formato de e-mail
            if (!email.includes("@") || !email.includes(".")) {
                feedback.style.color = "#D32F2F";
                feedback.textContent = "Por favor, insira um endereço de e-mail válido (ex: seu@email.com).";
                return;
            }

            // 3. Sucesso na validação
            feedback.style.color = "#2E7D32"; // Verde sucesso
            feedback.textContent = "Solicitação enviada com sucesso! Entraremos em contato em breve.";
            
            // Limpa o formulário após alguns segundos
            form.reset();
        });
    }
});