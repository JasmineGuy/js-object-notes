// Object Literals
//   let person = {
//     firstName: 'Jim',
//     lastName: 'Cooper'
//   }
//   person.age = 29;

//   console.log('object literal', person)


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

// let person = {
//     firstName: 'Jim',
//     lastName: 'Cooper',
//     age: 17,
//     isAdult(){return person.age >= 18} 
//   }
  // console.log(person.isAdult());

  // Inspecting Object with Object.keys() and for...in

// Object.keys() helps you to explore all the properties and methods on an object. It takes an object like person in as an argument and then returns a list of properties and methods in the object. Example below

// Object.keys(person)

// You can accomplish the same thing by using a 'for... in'

// 

// JS Equality Operators

// 3 Types of Equality operators in JS
// 1. == <--- Should be avoided. Useful only in rare cases. not type safe. ex. '42 == 42
// 2. === <--- Commonly used and rightly so. type safe. convenient and concise, NaN is not equal to NaN with === and +0 = -0
// 3. Object.is()  <--- less common. similar to === except for a few math differences. type safe. verbose. Nan = Nan, +0 not equal to -0


// Ex:
// Object.is(person1, person2)

// ^passes 2 objects in and it will determine if the 2 objects are equal

// let person1 = {
//     firstName: 'Jasmine',
//     lastName: 'Guy'
// }
// let person2 = {
//     firstName: 'Jasmine',
//     lastName: 'Guy'
// }

// person1 == person2 //false
// person1 === person2 //false
// Object.is(person1, person2) //false

// they all return false because the values contained in the objects are not be evaluated, but rather the place they occupy in memory, which is different. THIS IS ONLY THE CASE WITH OBJECTS. primitive types like strings, nums and booleans are compared based on VALUE

// let firstName1 = 'Jim'
// let firstName2 = 'Jim'

// firstName1 == firstName2 //true
// firstName1 === firstName2 //true
// Object.is(firstName1, firstName2) //true

// let person1 = {
//         firstName: 'Jasmine',
//         lastName: 'Guy'
//     }
    
// let person2 = {}
//     Object.assign(person2, person1) //assigns the values of properties to a new variable. takes 2 parameters 1 = the object you want to make the copy to and then 2, the object you want to copy

    // console.log(person2)
    // console.log(Object.is(person1, person2)) //false


    // Ex 2: 

    // let person3 = {
    //     firstName: 'Hilary',
    //     lastName: 'Swank'
    // }

    // let healthStats = {
    //     height: 68,
    //     weight: 150
    // }

    // Object.assign(person3, healthStats)

    // console.log(person3)

    // the problem with using the assign method is that it mutates the original object and you don't always want that. Below is the way to use object.assign to copy data but not mutate the original object

    // function mergeHealthStats(person3, healthStats){
    //     return Object.assign({}, person3, healthStats)
    // }
    // let mergedPerson = mergeHealthStats(person3, healthStats)
    // console.log(mergedPerson)
    // console.log(person3)

    // Constructor Function -creating classes using the constructor function, using the keyword this for properties

//     let jim = {
//         firstName: 'Jim',
//         lastName: 'Cooper',
//         age: 17,
//         isAdult(){return this.age >= 18} 
//   }
//   console.log(jim.isAdult())

//   let sophie = {
//     firstName: 'Sophie',
//     lastName: 'Jones',
//     age: 29,
//     isAdult(){return this.age >= 18} 
// }
// console.log(sophie.isAdult())


// function Person(firstName, lastName) {
//     this.firstName = firstName,
//     this.lastName = lastName
// }

// let person = new Person('Jose', "Alvarez")
// console.log(person)


// Using Bracket Notation
// let human = {
//       first: 'Jim',
//       last: 'Cooper',
//       age: 29
//   };

// console.log(human.first)
// console.log(human['first']) <- bracket notation


// Object Property Descriptors  - every property has a descriptor that we use to see attributes of that property
// let human = {
//     first: 'Jim',
//     last: 'Cooper',
//     age: 29
// };

// console.log(Object.getOwnPropertyDescriptor(human, 'first'))


// returns {value: "Jim", writable: true, enumerable: true, configurable: true}

// *Writable property dictates whether the propety's value can be modified from its inital value. you can change property attribues by using the the object.defineProperty method. We make the writable property false below:

// Object.defineProperty(human, 'first', {writable: false})
// console.log(Object.getOwnPropertyDescriptor(human, 'first'))


// returns {value: "Jim", writable: false, enumerable: true, configurable: true}

// let person = {
//       name: {
//         first: 'Jim',
//         last: 'Cooper'
//       },
//       age: 29
//     };

    // Object.defineProperty(person, 'name', {writable: false})

    // person.name.first ='Jose'
    // console.log(person.name)  //<---so you cannot change the name property but your CAN change properties ON the name property

// Enumerable property 
    // let human = {
    //     first: 'Jim',
    //     last: 'Cooper',
    //     age: 29
    // };
    

    // Object.defineProperty(human, 'first', {enumerable: false})
    // console.log(human) // <-- returns {last: "Cooper", age: 29, first: "Jim"} because setting enumerable to false 9on the first property) makes it so that you can't iterate over that property
    // console.log(Object.keys(human)) // <--- returns (2) ["last", "age"] (notice the first property is removed)
    // console.log(JSON.stringify(human)) // <== returns {"last":"Cooper","age":29} cant json serialize

    // Configurable Property: 
    // let human = {
    //     first: 'Jim',
    //     last: 'Cooper',
    //     age: 29
    // };
    

    // Object.defineProperty(human, 'first', {configurable: false})
    // Object.defineProperty(human, 'first', {enumerable: false}) <--- get an error

    // Creating Property Getters & Setters: 

  //   let person = {
  //       name: {
  //           first: 'Jasmine',
  //           last: 'Guy'
  //       },
  //       age: 32
  //   };

  //   Object.defineProperty(person, 'fullName', 
  //   {
  //     get: function() { 
  //       return this.name.first + ' ' + this.name.last;
  //     },
  //     set: function(value) { 
  //       var nameParts = value.split(' ');
  //       this.name.first = nameParts[0];
  //       this.name.last = nameParts[1];
  //     }
  
  //   });
  
  //   person.fullName = 'Fred Jones';
  
  //  console.log(person.fullName);
  
  //  console.log(person.name.first);
  //  console.log(person.name.last);
  
  //  function Student(firstName, lastName, age) {
  //   Person.call(this, firstName, lastName, age);
  //   this._enrolledCourses = [];
   
  //   this.enroll = function(courseId) { 
  //     this._enrolledCourses.push(courseId);
  //   };
   
  //   this.getCourses = function() {
  //     return this.fullName + "'s enrolled courses are: " +
  //       this._enrolledCourses.join(', ');
  //   };
  // }
  // Student.prototype = Object.create(Person.prototype);
  // Student.prototype.constructor = Student;
  // Student.fromPerson = function(person) {
  //   return new Student(person.firstName, person.lastName, person.age);
  // }
  

  // let jim = new Student('Jim', 'Cooper', 29);
  // jim.enroll('CS205');
  // jim.enroll('MA101');
  // jim.enroll('PS101');
   
  // display(jim.getCourses());



// Js Built in Objects:
// let date = new Date (); //<== creates a new date representing the current date and time

// let date = new Date('2021-07-25T13:01:30Z')
let date = new Date (2021, 7, 10, 6, 30, 30, 50) //<--- syntax for a js date

//MONTHS ARE ZERO BASED

// these setters are built into JS: 
date.setMonth(5)
date.setHours(1)
date.setYear(1999)


// console.log(date.toString())

//the getters below get the date relative to your machine's timezone
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())


//the getters below get dat info in universal time
// console.log(date.getUTCFullYear())
// console.log(date.getUTCMonth())
// console.log(date.getUTCDate())
// console.log(date.getUTCHours())
// console.log(date.getUTCMinutes())
// console.log(date.getUTCSeconds())
// console.log(date.getUTCMilliseconds())

// Date Math: 

let date1 = new Date (2050, 3, 25, 13, 1, 30, 50)
let date2 = new Date (2051, 3, 25, 13, 1, 30, 55)


console.log(date2-date1) //<--returns the time between dates in milliseconds




