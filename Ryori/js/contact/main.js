// Função para exibir a mensagem de sucesso
    function showSuccessMessage() {
    const form = document.querySelector(".contact-form");
    const successMessage = document.querySelector(".success-message");

    successMessage.classList.add("show"); // Adiciona a classe para mostrar a mensagem de sucesso
    const inputs = form.querySelectorAll("input, select, textarea");

    inputs.forEach(input => {
        input.disabled = true;
    });

    form.querySelector("input[type=submit]").disabled = true;
    form.querySelector("input[type=submit]").classList.remove("btnenviar");
    form.querySelector("input[type=submit]").classList.add("btn-green");

    setTimeout(function () {
      form.style.filter = "none";
      successMessage.classList.remove("show"); // Remove a classe após alguns segundos
      form.querySelector("input[type=submit]").classList.add("btnenviar");
      form.querySelector("input[type=submit]").classList.remove("btn-green");
    }, 3000); 
  }

  // Captura o evento de envio do formulário
  document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); 
    showSuccessMessage();
  });
