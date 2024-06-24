// Assignment 1

let myName = "Ikpe Jonathan Joseph"
 
let myAge = 31

let isStudent = false


console.log(myName)

console.log(myAge)

console.log(isStudent)


// Assignment 2

let person = {
  firstName: "Joseph",
  lastName: "Jonathan",
  age: 31,
  isStudent: false,
  fullName: function() {
    return this.firstName + " " + this.lastName
  }
}

console.log(person.fullName())


// Assignment 3

let number = 64

let squareroot = Math.sqrt(number)

console.log(squareroot)


// Assignment 4

let a = 175000

let b = 100000

let sum = a + b

let subtract = a - b

let multiply = a * b

let divide = a / b

let remainder = a % b

console.log(sum)

console.log(subtract)

console.log(multiply)

console.log(divide)

console.log(remainder)


// Assignment 5

let x = 10

let y = x + 5

x = 20

console.log(x)

console.log(y)


// Assignment 6

let object = {
  title: "Java Script Man",
  author: "Jonathan",
  pages: 203,
  isAvailable: true,
  summary : function () {
    return "The book " + this.title + ' ' + "written by " + this.author + ' ' + "is " + this.pages + ' long.' + " Is it avaliable? " + this.isAvailable
  }
}

console.log(object.summary())


// Assignment 7

// 1

let absoluteNumber = -45

let absolute = Math.abs(absoluteNumber)

console.log(absolute)

// 2

let newNumber = 7.8

let floor = Math.floor(newNumber)

console.log(floor)

// 3

let newNumbertwo = 3.2

let ceil = Math.ceil(newNumbertwo)

console.log(ceil)

// 4
let newNumberthree = 3

let power = Math.pow(newNumberthree, 4)

console.log(power)


// Asignment 8

// 1
let c = 300000

let d = 500000

// 2

let expo = c ** d

console.log(expo)

c += 1

d += 1

console.log(c)

console.log(d)