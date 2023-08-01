
// higher order function like forEach,map,filter,reduce


// const user = [1,2,3,4,5,6,7]

// const newUser = user.map((num) => {return num+10})

// const newNums = newUser.map((num) => num*10).map((num) => num+1).filter((num)=>num>=130)
// console.log(newNums);

const myArr = [12,34,5,67,8,99,13]

// const sum = myArr.reduce(function(accumulator,currentValue){
//     console.log(`acc Value is:${accumulator} and currentValue is:${currentValue}`);
//     return accumulator + currentValue
// },10)
const sum = myArr.reduce((accumulator,currentValue)=> accumulator + currentValue,10)

console.log(sum)

const shoppingCart = [
  {
    itemName:'js course',
    price: 2999
  },
  {
    itemName:'data science course',
    price: 12999
  },
  {
    itemName:'full stack  course',
    price: 14999
  },
  {
    itemName:'java developer course',
    price: 5999
  }
]

const totalCost = shoppingCart.reduce((accumulator,item)=>{
   return accumulator+ item.price
},0)

console.log(totalCost)