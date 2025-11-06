const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

//LEVEL 1
//1
let [e, pi , gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

//2

let [fin, est, swe, den, nor] = countries
console.log(fin, est, swe, den, nor);

//3
let {height, width, area, perimeter} = rectangle
console.log(width, height, area, perimeter);

//LEVEL 2
//1
for (const {name, scores, skills, age} of users) {
    console.log(name, scores, skills, age);
}

//2
const lessThanTwo = users.filter( ({skills}) => skills.length < 2 )
console.log(lessThanTwo);

//LEVEL 3
const Countries = [
    {
        name: 'Inida',
        capital: 'Delhi',
        population: 140.05,
        languages: [
            'Hindi',
            'Marathi',
            'English'
        ]
    },
    {
        name: 'Canada',
        capital: 'Ottawa',
        population: 4.13,
        languages: [
            'English',
            'French'
        ]
    },
    {
        name: 'japan',
        capital: 'Tokyo',
        population: 12.4,
        languages: [
            'Amami',
            'Kyukyu',
            'Kikai',
            'Miyako'
        ]
    }
]

//1

for (const {name, capital, population, languages} of Countries) 
   {  console.log('Country: ' + name);
      console.log('Capital: ' + capital);     console.log('Population: ' + population);
      console.log('Languages: ' + languages);
}

//2
 const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
 let [name, skills, [, , jsScore, reaactScore]] = student
   console.log(name, skills, jsScore, reaactScore);

//3
 const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]

function convertArrayTOObject(students) {
    const convertedArray = []
    for (const [name,skills,score] of students) {
        convertedArray.push({name, skills, score})
    }
    return convertedArray
}

console.log(convertArrayTOObject(students));


