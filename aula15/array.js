// armazenar vários valores
let num = [3, 2, 1]
// escolher a identificação das chaves
num[3] = 4
// adiciona no final
num.push(1)
// organiza em ordem crescente
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for(let pos=0 ; pos < num.length; pos++){
  console.log(num[pos])
}

let pos = num.indexOf()
if(pos == -1){
  console.log(`O valor não foi encontrado!`)
} else {
  console.log(`O valor 3 está na posição ${pos}`)
}