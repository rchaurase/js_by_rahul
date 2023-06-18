const myNum = [1,2,3]

const total = myNum .reduce((accumulator,currentvalue) =>  accumulator + currentvalue
,0)

console.log(total);

const shoppingCart = [
{
  coursname:'js course',
  price:2999
},
{
  coursname:'py course',
  price:999
},
{
  coursname:'mobile dev course',
  price:5999
},
{
  coursname:'data science course',
  price:12999
}
]

const totalPrice = shoppingCart.reduce((accumulator,item) => accumulator + item.price,0)

console.log(totalPrice);
