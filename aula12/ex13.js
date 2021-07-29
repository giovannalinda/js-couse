// pega horário atual
var now = new Date()
var time = now.getHours()
console.log(`Agora são exatamente ${time} horas`)

if (time < 12) {
  console.log('Bom Dia!')
} else if (time <= 18) {
  console.log('Boa Tarde!')
} else {
  console.log('Boa Noite')
}
