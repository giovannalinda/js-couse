function download() {
  const message = document.getElementById('message');
  const image = document.getElementById('morning')
  const date = new Date()
  const time = date.getHours()
  message.innerHTML = `Agora são ${time} horas`
  if (time >= 0 && time < 12) {
    // bom dia
    image.src = './images/morning.png'
    document.body.style.background = '#e3bd85'
  } else if (time >= 12 && time < 18) {
    // boa tarde
    image.src = './images/afternoon.png'
    document.body.style.background = '#ffa234'
  } else {
    // boa noite
    image.src = './images/night.png'
    document.body.style.background = '#081c1d'
  }
}
