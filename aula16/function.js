// verificar se um número é impar ou par
function parimp(n) {
  // se n dividido por 2 resta 0 significa que é par, se não ímpar
  if(n%2==0) {
    return `Seu número é par`
  } else {
    return `Seu número é ímpar`
  }
}
let res = parimp(10)

console.log(res)