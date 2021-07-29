function verify() {
  let date = new Date()
  let year = date.getFullYear()
  let form = document.getElementById('txtyear')
  let res = document.querySelector('div#res')
  // verifica se o form está vazio
  if (form.value.length == 0 || Number(form.value) > year) {
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    let fsex = document.getElementByName('radsex')
    let age = year - Number(form.value)
    res.innerHTML = `Idade calculada ${age}`
  }
}