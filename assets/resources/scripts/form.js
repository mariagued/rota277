// CPF - Máscara e Validação

const cpfInput = document.getElementById('cpf');
const form = document.getElementById('form');

// Máscara de CPF
if (cpfInput) {
  cpfInput.addEventListener('input', () => {
    let cpf = cpfInput.value.replace(/\D/g, '');
    if (cpf.length > 11) cpf = cpf.substring(0, 11);

    if (cpf.length <= 3) {
      cpfInput.value = cpf;
    } else if (cpf.length <= 6) {
      cpfInput.value = `${cpf.slice(0, 3)}.${cpf.slice(3)}`;
    } else if (cpf.length <= 9) {
      cpfInput.value = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6)}`;
    } else {
      cpfInput.value = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
    }
  });
}

// Função de Validação do CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = 11 - (soma % 11);
  if (resto >= 10) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = 11 - (soma % 11);
  if (resto >= 10) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) return false;

  return true;
}

// Validação do CPF no envio do formulário
if (form) {
  form.addEventListener('submit', function (event) {
    const cpf = cpfInput.value;
    if (!validarCPF(cpf)) {
      M.toast({ html: 'CPF inválido!', classes: 'red' });
      cpfInput.classList.remove('valid');
      cpfInput.classList.add('invalid');
      event.preventDefault();
    } else {
      cpfInput.classList.remove('invalid');
      cpfInput.classList.add('valid');
    }
  });
}
