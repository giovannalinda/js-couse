let values = [8, 1, 7, 4, 2, 9]
values.sort()
console.log(values)
// percurso para exibição no vetor 
/*
for(let pos = 0 ; pos < values.length ; pos++) {
  console.log(`A posição ${pos} tem o valor ${values[pos]}`)
}
*/
// for in
// in = dentro ou em
// for = para
for(let pos in values) {
  console.log(`A posição ${pos} tem o valor ${values[pos]}`)
}