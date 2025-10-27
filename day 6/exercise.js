for(let i = 0;i < 11; i++) {
   console.log(i);
}

let i = 0;
while (i < 11) {
   console.log(i);
   i++;
}

let x = 0;
do {
   console.log(x);
   x++;
} while (x < 11);

for (let i = 10; i > -1; i--) {
   console.log(i);
}

let I = 10;
while (I> -1) {
   console.log(I);
   I--;
}

let X = 10;
do {
   console.log(X);
   X--;
} while (X > -1);

let M = 0;
for (let i = 0; i <= M; i++) {
   console.log(i);
}



for(let i = 0; i < 11; i++) {
   console.log(`${i} x ${i} = ${i*i}`);
}

for(let i = 0; i < 101; i += 2) {
   console.log(i);
}

for (let i = 1; i < 101; i += 2) {
   console.log(i);
}

let sum = 0;
for(let i = 0; i < 101; i++) {
   sum += i;
} console.log("Sum of 0-100: ", sum); 

for(let f =1;f<=100;f++){
   console.log("count")
}

console.log( i )

for (let x=0;x<=5;x++){
console.log(`${x}*${x}=${x*x}`)
}

let random = [];
for (let i = 1; i <= 5; i++) {
   let num = Math.floor(Math.random()* 101);
 random.push(num)
}

//level 2
// 1

let n = 12;
let id = '';
const characters = "abcdefghijklmnopqrstuvwxyz0123456789"
for (let i = 1; i <= n; i++) {
  let num = Math.floor(Math.random() * characters.length)
  id += characters[num]
}
console.log(id);

// 2

let hexcode = '';
const characters2 = '0123456789abcdef'
for (let i = 0; i <= 5; i++) {
  let num2 = Math.floor(Math.random() * characters2.length)
  hexcode += characters2[num2];
  
}
console.log('#' + hexcode);

// 3

let value = [];
for (let i = 0; i <= 3; i++) {
  let rgb = Math.floor(Math.random() * 256)
  value.push(rgb);
  
}
console.log(`rgb(${value[0]}, ${value[1]}, ${value[2]})`);

// 4

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
let upper = [];

for (let i = 0; i < countries.length; i++) {
  upper.push(countries[i].toUpperCase())
  
}
console.log(upper);


// 5
let numbers = [];
for (let i = 0; i < countries.length; i++) {
  numbers.push(countries[i].length)
  
}
console.log(numbers);

// 6

let data = [];
for (const country of countries) {
  const countrycode = country.substring(0,3);
  const code = country.length
  data.push([country,countrycode,code])
}
console.log(data);

// 7

let land = [];
for (const country of countries) {
  if (country.includes('land')) {
    land.push(country);
    }
  else{
    console.log('These countries are without land');
    }
}
console.log(land);

// 8

let ia = []
for (const country of countries) {
  if (country.includes('ia')) {
    ia.push(country)
  }
  else{
    console.log("These countries are without ia");
    
  }
}
console.log(ia);

// 9


let longestCountry = ''; // Initialize with an empty string
let maxLength = 0; // Initialize with 0

for (const country of countries) {
  if (country.length > maxLength) {
    maxLength = country.length;
    longestCountry = country;
  }
}

console.log(longestCountry);

// 10
let names = []
let size = 5;
for (const country of countries) {
  if (country.length == size) {
    names.push(country)
    
  }
}
console.log(names);

// 11

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
let maxlength = 0;
let longestname = '';
for (const languages of webTechs) {
  if (languages.length > maxLength) {
    maxLength = languages.length
    longestname = languages;
  }
}
console.log(longestname);

// 12

let ans = [];
for (const languages of webTechs) {
  const code = languages.length
  ans.push([languages,code])

}
console.log(ans);

// 13

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

let acronym = '';
for (let i = 0; i < mernStack.length; i++) {
  acronym += mernStack[i][0]
}
console.log(acronym);

// 14

const languages =  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
  
}

// 15

const fruits =  ['banana', 'orange', 'mango', 'lemon'];
let order = [];

for (let i = fruits.length -1; i >= 0; i--) {
  order.push(fruits[i])
  
}
console.log(order);

//16

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
let out = ''
  for (let i = 0; i < fullStack.length; i++) {
    out += fullStack[i]
  }
  console.log(out);