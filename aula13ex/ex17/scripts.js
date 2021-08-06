function tell() {
  let start = document.getElementById('txti')
  let end = document.getElementById('txtf')
  let step = document.getElementById('txtp')
  let result = document.getElementById('result')

  if(start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
    alert('[ERRO] Faltam dados')
  } else {
    result.innerHTML = 'Contando: '
    let first = Number(start.value)
    let last = Number(end.value)
    let pass = Number(step.value)
    if(start < end) {
      // contagem crescente
      for(let counter = first; counter <= last; counter += pass) {
        result.innerHTML += `${counter} \u{1f449} `// emoji 
      } 
    } 
  } 
    
}