//LEVEL 1

//1
const sentence = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

let numbers = sentence.match(/\d+/g).map(Number)
let annualSalary = numbers[0] * 12
let annualBonus = numbers[1]
let courseIcome = numbers[2] * 12

let totalIncome = annualSalary + annualBonus + courseIcome
console.log(totalIncome);

//2
let sentence1 = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.'

let points = sentence1.match(/-?\d+/g).map(Number)
console.log(points);
let sortedPoints = points.sort( (a,b) => a - b )
console.log(sortedPoints);
let distance = sortedPoints[sortedPoints.length -1] - sortedPoints[0]
console.log(distance);

//3
let is_valid_variable = (value) => {
    let validation = /^[$|_|a-z|A-Z][1-9|a-z|A-Z|_]*?/
    return Boolean(value.match(validation))
}

console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))

//LEVEL 2

//1
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
let tenMostFrequentWords = (text, range=10) => {
   let pattern = /[a-z|A-Z]*\w/g;
   return Object.entries(text.match(pattern).reduce((dict, word) => {
      dict[word] = (dict[word] || 0) +1;
      return dict;
   }, {})).sort((a, b) => b[1]-a[1]).slice(0, range);
}
tenMostFrequentWords(paragraph).forEach(x => console.log(x));


//LEVEL 3

//1
let Sentence =  '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?'

let TenMostFrequentWords = (text, range=10) => {
   let pattern = /[a-z|A-Z]*\w/g;
   return Object.entries(text.match(pattern).reduce((dict, word) => {
      dict[word] = (dict[word] || 0) +1;
      return dict;
   }, {})).sort((a, b) => b[1]-a[1]).slice(0, range);
}

function cleanText(Sentence) {
    let cleanedText =  Sentence.replace(/[^a-zA-z\s]/gi, '')
    return TenMostFrequentWords(cleanedText)
}
console.log(cleanText(Sentence));


const txt = 'This regular expression example was made in December 6,  2019.'
const pattern =/^This/
const matches = txt.match(pattern)
console.log(matches)


