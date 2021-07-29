function download() {
  var message = document.getElementById('message');
  var image = document.getElementById('images')
  var date = new Date()
  var time = date.getHours()
  message.innerHTML = `Agora são ${time} horas`
  if (time >= 0 && time < 12) {
    // bom dia
    image.src = 'morning.png'
    document.body.style.background = '#e3bd85'
  } else if (time >= 12 && time < 18) {
    // boa tarde
    image.src = 'afternoon.png'
    document.body.style.background = '#ffa234'
  } else {
    // boa noite
    image.src = 'night.png'
    document.body.style.background = '#081c1d'
  }
}
