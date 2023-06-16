//array

const myArr = [0,1,2,3,4,5,6]
const myHeros = ["Ironman","captain-America","spiderman"]

const myArr2 = new Array(1,2,3,4,5)

console.log(myArr[1]);

// methods

// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)

// myArr.shift()

// console.log(myArr.includes(8))
// console.log(myArr.indexOf(4))
// console.log(myArr)


// const newArr = myArr.join()

// console.log(newArr)

// console.log(typeof(newArr))

// // slice and splice

// console.log("A",myArr);

// const myn1 = myArr.slice(1,3)

// console.log(myn1)

// console.log("B",myArr);

// const myn2 = myArr.splice(1,3)

// console.log(myn2)

// console.log("C" , myArr)

// second part

const marvelHeros = ["Thor","Ironman","Spiderman"]
const dcHeros = ["Superman","Flash","Batman"]

// marvelHeros.push(dcHeros)

console.log(marvelHeros)

const allHeros = marvelHeros.concat(dcHeros)

console.log(allHeros);

const all_newHeros = [...marvelHeros, ...dcHeros]

console.log(all_newHeros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)


console.log(Array.isArray("Rahul"))
console.log(Array.from({name:'rahul'}))//interasting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
