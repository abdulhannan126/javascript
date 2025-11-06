//1
const dog = {};

//2
console.log(dog);

//3
dog.name = 'German shepherd'
 dog.legs = 4
 dog.color = 'brown'
 dog.age = 2
 dog.bark = function () {
    return'woof woof'
    
 }

 //4
console.log(dog.name);
 console.log(dog.legs);
 console.log(dog.color);
 console.log(dog.age);
 console.log(dog.bark());

//5
 dog.breed = 'siberian husky'

 dog.getDogInfo = function () {
    let statement = `name: ${this.name} legs: ${this.legs} color: ${this.color} age: ${this.age} breed: ${this.breed}`
    return statement
    
 }

console.log(dog.getDogInfo());

//Level 2
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

//1
let personWithSkills = ''
let maxSkills = 0

for (let userName in users ) {
    let existingSkills = users[userName].skills.length
    if (existingSkills > maxSkills) {
        maxSkills = existingSkills
        personWithSkills = userName
    }
    
}
console.log(personWithSkills);

//2
let userPoints = ''
let loggedInUser = ''

for (const userName in users) {
    const user = users[userName]
    if (user.isLoggedIn == true) {
        loggedInUser++
    }   
    if (user.points >= 50) {
        userPoints++
        
    }
}
console.log(`number of users logged in:${loggedInUser}`);

console.log(`number of users having points euqal or greater than 50: ${userPoints}`);

//3
let mernSrackDevelopers = []

for (const userName in users) {
    const skills = users[userName].skills
    if (skills.includes('MongoDB') && skills.includes('Node') && skills.includes('Express') && skills.includes('React')) {
        mernSrackDevelopers.push(userName)
    }
}

console.log(mernSrackDevelopers);


//4
const users2 = Object.assign({}, users)
users2.hasan = {
    email: 'hasan@gmail.com',
    skills: [
        'HTML',
        'TAILWIND',
        'JAVASCRIPT'
    ],
    age: 20,
    points: 20
}
console.log(users2);

//5
const properties = Object.keys(users)
console.log(properties);

//6
const allUserData = Object.values(users)
console.log(allUserData);

//7
const countries = {
    name: 'India',
    capital: 'Delhi',
    population: '145.09 crores',
    languages: [
        'HINDI',
        'MARATHI',
        'ENGLISH',
        'KANNADA',
        'TELUGU'
    ]
}
console.log(countries.name);
console.log(countries.capital);
console.log(countries.population);
console.log(countries.languages);

//level 3

const personAccount = {
    firstName: 'Hasan',
    lastName: 'Shah',
    incomes: [
        { description: 'salary', amount:12000},
        {description: 'freelance', amount:5000}
    ],
    expenses: [
        {description: 'travlling', amount:5000},
        {description: 'food', amount:7000}
    ]
}



console.log(personAccount.incomes);




