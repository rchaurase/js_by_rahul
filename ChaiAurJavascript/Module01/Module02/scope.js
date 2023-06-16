
// {it is s Scope except object }
// var C = 300;
let a = 300
if(true){
  let a = 10
  const b = 20
  // console.log("INNER: ", a)
}


// console.log(A)
// console.log(B)
// console.log(a)

// Second part

function One(){
  const username = 'rahul'

  function Two(){
    const website = 'youtube'
    console.log(username)
  }
  // console.log(website);

  // Two()
}
// One()
if(true){
  const username = 'rahul'
  if(username === 'rahul'){
    const website = ' youtube'
    // console.log(username + website);
  }
  // console.log(website)
}

// console.log(username)

console.log(addOne(5)
)
function addOne(num){
  return num + 1
}

addTwo(5)

const addTwo = function(num){
  return num + 2
}




