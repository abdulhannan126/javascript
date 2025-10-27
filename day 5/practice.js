let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies)
let txt =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const wordS = txt.split(' ')
console.log(wordS)

const countries = [
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
    'Kenya'
]

countries[0]= 'Afghanistan' // Replacing Albania by Afghanistan
let lastIndex=countries.length-1
countries[lastIndex]='Korea' // Replacing Kenya by Korea
console.log(countries)

const eightarr= Array(8).fill(2)
console.log(eightarr)

const firstList= [1,2,3]
const secondList=[4,5,6]
const thirdList=firstList.concat(secondList)
console.log(thirdList)

const num=[1,2,3,4,5]
console.log(num.length)

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0


if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}

const nameS= ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(nameS.join())
console.log(nameS.join(''))
console.log(nameS.join(' '))
console.log(nameS.join(', '))
console.log(nameS.join(' # '))

const numbers = [1, 2, 3, 4, 5]
	numbers.splice(0,3)
  console.log(numbers) 


  