interface User{
    name:string,
    age?:number,
    email?:string
}
var greet=(user:User)=>{
    console.log(`Hello ${user.name}`)
}

var userData=(user:User)=>{
    console.log(`Name: ${user.name}, Age: ${user.age}, email: ${user.email}`)
}
var user1={name:"hemanth"}
var user2={name:"Raghu",age:55,email:"raghu@gmail.com"}

greet(user1)
userData(user2)