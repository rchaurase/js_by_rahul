let myDate = new Date()

//console.log(myDate);

//console.log(myDate.toString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toJSON());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toTimeString());
//console.log(myDate.toLocaleTimeString());
//console.log(myDate.toUTCString());
//console.log(myDate.getTimezoneOffset());

//console.log(typeof myDate)

// let myCreatDate = new Date(2023,0,23)
// let myCreatDate = new Date(2023,0,23,5,6)
let myCreatDate = new Date('01-14-2023')

console.log(myCreatDate.toLocaleString())

let newDate = new Date();

console.log(newDate);

console.log(newDate.getDay());


newDate.toLocaleString('default',{
   weekday:"long",
   timeZone:'',
   
})


