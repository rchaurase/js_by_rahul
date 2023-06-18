
// const coding = ['js','ruby','java','python','cpp']


// const values = coding.forEach((item) => {
//   console.log(item);
//   return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNums.filter((num) => {
//   return num > 4
// })

// console.log(newNum);

const newNum = []

myNums.forEach((num) => {
    if(num > 4){
      newNum.push(num)
    }
})

console.log(newNum);

const books = [
  {
    title:'the alchemist', genre : 'fiction', publish: '1991', edition: '2002'
  },
  {
    title:'harry potter', genre : 'fiction', publish: '1997', edition: '2007'
  },
  {
    title:'the lord of the rings', genre : 'fiction', publish: '1954', edition: '1976'
  },
  {
    title:'the book of life', genre : 'spiritual', publish: '1991', edition: '2002'
  },
  {
    title:'the atmaman', genre : 'spiritual', publish: '2015', edition: '2020'
  },
  {
    title:'Deep work', genre : 'self help', publish: '2022', edition: '2022'
  },
  {
    title:'the awaken', genre : 'spiritual', publish: '1980', edition: '2002'
  },
  {
    title:'the power of now', genre : 'spiritual', publish: '2004', edition: '2010'
  },
];
let userBooks = books.filter((bk) => bk.genre === 'spiritual')

 userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === 'fiction')

console.log(userBooks);
