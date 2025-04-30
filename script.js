const botao = document.querySelector("button"); // ajuste o seletor se seu botão tiver ID ou classe
const notificacao = document.getElementById("notificacao");

botao.addEventListener("click", (e) => {
    e.preventDefault(); // impede envio do formulário (se tiver)

    notificacao.classList.add("show");

    // Oculta após 3 segundos
    setTimeout(() => {
        notificacao.classList.remove("show");
    }, 3000);
});