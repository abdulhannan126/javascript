const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

//1
const emptySet = new Set()

//2
const numbers = new Set()

for(let i=0;i<=10;i++){
    numbers.add(i)
}

console.log(numbers);

//3
numbers.delete(3)
console.log(numbers);

//4
numbers.clear()
console.log(numbers);

//5
const languages = [
    'English',
    'French',
    'German',
    'French',
    'German',
    'English',
    'English',
    'Hindi',
    'Gujarati'
]

const langSet = new Set(languages)
console.log(langSet);

//6
const map = new Map()

for (const country of countries) {
    map.set(country, country.length)   
}
console.log(map);

// LEVEL 2

//1
let A = new Set(a)
let B = new Set(b)

let c = [...A, ...b]

let C = new Set(c)
console.log(C);

//2
let d = a.filter( num => B.has(num) )
let D = new Set(d)
console.log(D);

//3
let e = a.filter( num => !B.has(num) )
let E = new Set(e)
console.log(E);

let f = b.filter( num => !A.has(num) )
let F = new Set(f)
console.log(F);

//LEVEL 3

//1

