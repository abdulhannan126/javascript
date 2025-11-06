const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(1)(1)(1))

const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))


function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 2000)

let sum = 0;
const Numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)

const countries =['Finland','Denmark','Sweden','Norway','Iceland']
countries.forEach((element)=> console.log(element.toUpperCase()))

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const Greetings = "Hello world!"
for (const greet of Greetings) {
    console.log('Each char is $(greet)');
    
}

const map = new Map()
map.set('IN', "India")
map.set('FR', "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}                          

const Countries =[
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',          
  'Ireland',                                                                               
  'Japan',
  'Kenya',                                                                                                                                                                                                                                                                                                                           
]

const CountriesToUpperCase = Countries.map((country) => country.toUpperCase())
console.log(CountriesToUpperCase);

const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') 

console.log(areAllStr)

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)


const nAmes = ['Asabeneh', 'Mathias', 'Elias', 'Brookess']
const aGes = [24, 22, 25, 32, 35, 18]

const result = nAmes.findIndex((nAme) => nAme.length > 7)
console.log(result) 

const aGe = aGes.findIndex((aGe) => aGe < 20)
console.log(aGe) 

const nameS = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue)  

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort());

const NUmbers = [9.81, 3.14, 100, 37]
console.log(NUmbers.sort());

NUmbers.sort(function (a,b){
  return a - b
})
console.log(NUmbers)

const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users) 
NUmbers.sort(function (a, b) {
  return b - a
})
console.log(NUmbers)

const USers = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
USers.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(USers) 

