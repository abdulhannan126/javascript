 let emptyArray = [];

        let arrayWithMoreThanFiveElements = [1, 2, 3, 4, 5, 6, 7];

        console.log(arrayWithMoreThanFiveElements.length  )

        console.log(arrayWithMoreThanFiveElements[0]);     
        console.log(arrayWithMoreThanFiveElements[Math.floor(arrayWithMoreThanFiveElements.length/2)]  )
        console.log(arrayWithMoreThanFiveElements.length -0)  

    const mixedDataTypes = ['bool', false, 1, 3.14, null, undefined, NaN]
 console.log(mixedDataTypes)
 console.log(mixedDataTypes.length)

 let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);


console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

console.log(`${itCompanies.join(", ")} are big IT companies.`);

let company = "Face";

(itCompanies.includes(company)) 
? console.log(company) 
: console.log("company is not found");

console.log(itCompanies.sort())

console.log(itCompanies.reverse())

console.log(itCompanies.slice(0, 3))

console.log(itCompanies.slice(4,7))

let mid = Math.floor(itCompanies.length / 2);
console.log(itCompanies.slice(mid, mid + 1));

console.log(itCompanies.shift());

console.log(itCompanies.splice(mid, 1));

console.log(itCompanies.pop());

console.log(itCompanies.splice(0,itCompanies.length))
console.log(itCompanies)

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words =text.replace(/[^\w\s]/gi, "").split(" ")
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift("Meat");
shoppingCart.push('Sugar');
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());
