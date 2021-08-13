let text = document.querySelector('input#form')
let formlist = document.querySelector('select#formlist')
let result = document.querySelector('div#result')
let values = []

function inList(t, l) {
  if(l.indexOf(String(t)));
}

function add() {
  if(isText(String.value) && !inList(String.value, values)) {
    values.push(String(String.value))
  } else {
    alert('Valor inválido ou já encontrado na lista!')
  }
}
