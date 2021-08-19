let text = document.querySelector('input#form')
let formlist = document.querySelector('select#formlist')
let result = document.querySelector('div#result')
let values = []

function add() {
  if(text.value) {
    values.push(String(text.value))
    let item = document.createElement('option')
    item.textContent = `Valor ${value} adicionado`
    formList.appendChild(item.value)
  } 
}


