let friend = {
  name: 'Gabriel',
  gender: 'M',
  weight: 78.5,
  fatten(p=0){
    console.log('engordou!')
    this.weight += p
  }
}

friend.fatten(2)
console.log(`${friend.name} pesa ${friend.weight}Kg atualmente.`)