const fullStack =[
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const [frontEnd,backEnd]=fullStack

console.log(frontEnd);
console.log(backEnd);

const numbers=[1,2,3]
let [numOne,numThree]=numbers
console.log(numOne,numThree);

const names = [undefined, 'Brook', 'David']
let [
  firstPerson = 'Asabeneh',
  secondPerson,
  thirdPerson,
  fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

const fullStacK=[
    ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
for(const [first, second, third] of fullStacK){
    console.log(first, second, third);
}

const rectangle ={
    width: 20,
    height:10,
    area: 200
}
let {width,height,area,perimeter}=rectangle

console.log(width, height, area, perimeter);

const Rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width: w, height: h, area: a, perimeter: p } = Rectangle

console.log(w, h, a, p)

const rectanglE = {
  Width: 30,
  Height: 10,
  Area: 200,
  Perimeter: 80
}
let { Width, Height, Area, Perimeter = 60 } = rectanglE
console.log(Width, Height, Area, Perimeter)

const rect = {
  width: 20,
  height: 10
}
const calculatePerimeter = rectangle => {
  return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect))

const todoList = [
{
  task:'Prepare JS Test',
  time:'4/1/2020 8:30',
  completed:true
},
{
  task:'Give JS Test',
  time:'4/1/2020 10:00',
  completed:false
},
{
  task:'Assess Test Result',
  time:'4/1/2020 1:00',
  completed:false
}
]

for (const {task, time, completed} of todoList){
  console.log(task, time, completed)
}

const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)

const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}
const copiedUser={...user}
console.log(copiedUser);



