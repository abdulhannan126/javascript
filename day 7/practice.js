function square(){
    let num=2
    let sq = num*num
    console.log(sq)
}
square()


function addTwoNumbers(){
    let numOne=10
    let numTwo=20
    let sum=numOne+numTwo
    console.log(sum)
    

}
addTwoNumbers()

function printFullName(){
    let firstName ='Asabeneh'
    let lastName ='Yetayeh'
    let space= ' '
    let fullName=firstName+space+lastName
    console.log(fullName)
}
printFullName()

function addTwoNUmbers(){
    let numThree=2
    let numFour=3
    let total=numThree+numFour
    return total
}
console.log(addTwoNUmbers())

function square(number){
    return number*number
}
console.log(square(20))

function sumTwoNumbers(numOne,numTwo){
    let sum=numOne+numTwo
    console.log(sum)
}
sumTwoNumbers(10,20)

function sumTwoNUmbers(numONe,numTWo){
    let sum =numONe+numTWo
    return sum
}
console.log(sumTwoNUmbers(10,20))

function sumArrayValues(arr){
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
}
return sum;
}
const numbers=[1,2,3,4,5,6];

console.log(sumArrayValues(numbers));

const areaOfCircle=(radius)=>{
    let area =Math.PI*radius*radius;
    return area;
}
console.log(areaOfCircle(10))
console.log(areaOfCircle(10))

function sumAllNums() {
 console.log(arguments)
}

sumAllNums(1, 2, 3, 4)

const suMAllNums = (...args) => {
    console.log(args)
}
suMAllNums(1,2,3,4)

const sumAllNUms = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}
console.log(sumAllNUms(1, 2, 3, 4))
console.log(sumAllNUms(10, 20, 13, 40, 10))
console.log(sumAllNUms(15, 20, 30, 25, 10, 33, 40))

const Square= function(n){
    return n*n
}
console.log(Square(8))
 
const PrintFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

console.log(PrintFullName('abdul', 'hannan'))

function greetings(name = 'hasan') {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}

console.log(greetings())
console.log(greetings('Hannan'))

function generateFullName(firstName = 'Abu', lastName = 'Saad') {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('Hasan', 'Sha'))

function calculateAge(birthYear, currentYear = 2025) {
  let age = currentYear - birthYear
  return age
}

console.log('Age: ', calculateAge(1819))

function weightOfObject(mass,gravity=9.81){
let weight=mass*gravity+'N'
return weight
}
console.log('Weight of an object in Newton:',weightOfObject(100))
console.log('Weight of an object in Newton:',weightOfObject(100,1.62))

