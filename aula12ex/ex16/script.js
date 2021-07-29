function verify() {
  const date = new Date()
  const year = date.getFullYear()
  const form = document.getElementById('txtyear')
  const result = document.querySelector('div#result')
  // verifica se o form está vazio
  if (form.value.length == 0 || Number(form.value) > year) {
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    const fsex = document.getElementsByName('radsex')
    const age = year - Number(form.value)
    let gender = ''
    if (fsex[0].checked) {
      gender = 'um homem'
    } else if (fsex[1].checked) {
      gender = 'uma mulher'
    }
    result.innerHTML = `Detectamos ${gender} com ${age} anos.`
  }
}