const masks = {
  cpf(value) {
    console.log(value)
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1")
  },
  cnpj(value) {
    console.log(value)
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1")
  },
  phone(value) {
    console.log(value)
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})/, "($1) ")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1")
  },
  cep(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1")
  },
  pis(value) {
    return value.replace(/\D/g, "").replace(/(\d{3})(\d)/g, "$1.$2")
  },
  date(value) {
  	return value
  		.replace(/\D/g, "")
  		.replace(/(\d{2})(\d)/,"$1/$2")
  		.replace(/(\d{2})(\d)/,"$1/$2")
  		.replace(/(\d{4})\d+?$/,"$1")
  }
}

document.querySelectorAll("input").forEach(input => {
  const field = input.dataset.js
  console.log("Field:", field)
  /* Campo Input */
  input.addEventListener(
    "input",
    function(e) {
      /* Atualiza o campo com a mascara aplicada */
      e.target.value = masks[field](e.target.value)
    },
    false
  )
})
