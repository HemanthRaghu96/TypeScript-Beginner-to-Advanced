var greet = function (user) {
    console.log("Hello ".concat(user.name));
};
var userData = function (user) {
    console.log("Name: ".concat(user.name, ", Age: ").concat(user.age, ", email: ").concat(user.email));
};
var user1 = { name: "hemanth" };
var user2 = { name: "Raghu", age: 55, email: "raghu@gmail.com" };
greet(user1);
userData(user2);
