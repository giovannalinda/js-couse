let text = document.querySelector('input#form')
let formlist = document.querySelector('select#formlist')
let result = document.querySelector('div#res')
let values = []

function inList(t, l) {

}

function add() {
  if(isText(text.value) && !inList(text.value, values)) {

  } else {
    alert('Valor inválido ou já encontrado na lista!')
  }
}
