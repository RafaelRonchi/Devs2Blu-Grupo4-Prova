
// Get HTML elements IIFE
const elements = (() => {
  const input = document.querySelector('#email');
  const subscribe = document.querySelector('#subscribe');
  const warning = document.querySelector('.warning');
  const elements = [input, subscribe, warning];

  return elements;
})();

// Check if user input is a valid e-mail address
const checkInput = () => {
  let isValid = false;

  if (elements[0].value == '' || !elements[0].value.includes('@')) {
    isValid = false;
    elements[2].style.visibility = 'hidden';
    elements[2].innerHTML = `<img src="../../img/home/subscribe/warning.png" alt="">
      <p>Por favor, informe um endereço de e-mail válido.</p>`;
    elements[2].style.visibility = 'visible';
  } else {
    isValid = true;
    elements[2].style.visibility = 'hidden';
  }

  return isValid;
}

// Handle form on 'click' event; simulates submit behavior
elements[1].addEventListener('click', (ev) => {
  ev.preventDefault();

  if (checkInput()) {
    // Add spinner into submit button
    elements[1].innerHTML = `<img class="spinner" src="../../img/home/subscribe/spinner.png" alt=""></button>`;
    // Remove spinner at "response"; simulates 2.5s wait time
    setTimeout(() => {
      elements[0].value = '';
      elements[1].innerHTML = 'Inscrever-se';
      elements[2].innerHTML = '<p class="green">Agradecemos a sua inscrição!</p>';
      elements[2].style.visibility = 'visible';
    }, 2500);
  }
});