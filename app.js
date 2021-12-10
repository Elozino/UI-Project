function newUser(name, isDeveloper){
  return {name, isDeveloper}
}

let user = new newUser("Elozino", true)

console.log(user)