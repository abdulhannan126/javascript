// LEVEL 1

const countriES = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//2
const callback = function (element) {
  console.log(element);
};

const numbers1 = [1, 2, 3, 4];
numbers.forEach(callback);

//3
countriES.forEach((country) => console.log(country));

//4
names.forEach((name) => console.log(name))

//5
numbers.forEach((no) => console.log(no))

//6
const countryUpper = countriES.map((country) => country.toUpperCase())
console.log(countryUpper);

//7
const countryLength = countriES.map((country) => country.length)
console.log(countryLength);

//8
const noSquare = numbers.map((no) => no * no)
console.log(noSquare);

//9
const nameUpper = names.map((name) => name.toUpperCase())
console.log(nameUpper);

//10
const price = products.map((prices) => prices.price)
console.log(price);

//11
const cointainLand = countriES.filter((country) => country.includes('land'))
console.log(cointainLand);

//12
const sixChar = countriES.filter((country) => country.length == 6)
console.log(sixChar);

//13
const sixMoreChar = countriES.filter((country) => country.length >= 6)
console.log(sixMoreChar);

//14
const hasEChar = countriES.filter((country => country.includes('e')))
console.log(hasEChar);

//15
const prices = products.filter((p) => typeof p.price == 'number')
console.log(prices);

//16
function getStringList(arr) {
    const getItems = arr.filter(value => typeof value === 'string')
    return getItems
}

const mixArray = ['hasan',20,'shah',100]
console.log(getStringList(mixArray));

//17
console.clear()

const sum = numbers.reduce((acc,cur) => acc + cur)
console.log(sum);

//18
const sentence = countries.reduce((acc,curr,index) => {
  if (index === countries.length -1) {
    return acc + ' and ' + curr
  }
  else{
    return acc + ', ' + curr
  }
}) + ' are north european countries'
console.log(sentence);

//19

//20
const namesGeater7 = names.some(n => n.length > 7)
console.log(namesGeater7);

//21
const cointainsLand = countries.every((country) => country.includes('land'))
console.log(cointainsLand);

//22

//23
const sixLetter = countriES.find(country => country.length == 6)
console.log(sixLetter);

//24
const sixLetter2 = countriES.findIndex(country => country.length == 6)
console.log(sixLetter2);

//25
const findNor = countriES.findIndex(country => country == 'Norway')
console.log(findNor);

//26
const findRuss = countriES.findIndex(country => country == 'Russia')
console.log(findRuss);



