// Object Literals
  // let person = {
  //   firstName: 'Jim',
  //   lastName: 'Cooper'
  // }
  // person.age = 29;

  // console.log(person)


// Adding method to a object
  //  let person = {
  //   firstName: 'Jim',
  //   lastName: 'Cooper',
  //   age: 17,
  //   isAdult: function (){return person.age >= 18} //<--common way to accomplish this
  // }
  // person.isAdult = function() {return this.age >= 18;} <--- this is one way to accomplish this 

  // console.log(person.isAdult())


// Object Literal Shorthand for Properties
// function registerUser(firstName, lastName){
//   let person = {
//     firstName,
//     lastName
//   };
  // console.log(person)
// };

// registerUser('Jasmine', 'Guy')


// Object Literal Shorthand for Methods(remove colon and the keyword function from the method) Can't use this syntax anywhere. in classes and objects only

let person = {
    firstName: 'Jim',
    lastName: 'Cooper',
    age: 17,
    isAdult(){return person.age >= 18} 
  }
  // console.log(person.isAdult());

  // Inspecting Object with Object.keys() and for...in

// Object.keys() helps you to explore all the properties and methods on an object. It takes an object like person in as an argument and then returns a list of properties and methods in the object. Example below

// Object.keys(person)

// You can accomplish the same thing by using a 'for... in'

for (let propertyName in person){
  console.log(propertyName)
}