var age = 34
console.log(`Você tem ${age} anos.`)

if (age < 16) {
  console.log('Você ainda não tem a idade minima para votar')
} else if (age < 18 || age >= 65) {
  console.log('Seu voto é opcional')
} else {
  console.log('Seu voto é obrigatório')
}