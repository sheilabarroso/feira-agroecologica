document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formConsultoria");
    
    if (form) {
        const feedback = document.getElementById("mensagemFeedback");

        form.addEventListener("submit", function (evento) {
            evento.preventDefault(); 

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const cultura = document.getElementById("cultura").value.trim();
            const telefone = document.getElementById("telefone").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

           
            if (!nome || !email || !cultura || !telefone || !mensagem) {
                feedback.style.color = "#D32F2F"; 
                feedback.textContent = "Por favor, preencha todos os campos do formulário.";
                return;
            }

            
            if (!email.includes("@") || !email.includes(".")) {
                feedback.style.color = "#D32F2F";
                feedback.textContent = "Por favor, insira um endereço de e-mail válido (ex: seu@email.com).";
                return;
            }

          
            feedback.style.color = "#2E7D32"; 
            feedback.textContent = "Solicitação enviada com sucesso! Entraremos em contato em breve.";
            
           
            form.reset();
        });
    }
});