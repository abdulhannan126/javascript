function fullName() {
   console.log("Abdul Hannan");
} fullName();

function fullName1(firstName, lastName){
    console.log(firstName+' '+ lastName);
} fullName1("Hannan", "Mansoor");

function addNumbers(a, b) {
   return a + b;
} console.log(addNumbers(10, 20));

function areaOfRectangle(l, w) {
   return l*w;
} console.log(areaOfRectangle(2,2));

function perimeterOfRectangle(l, w) {
   return 2*(l+w);
} console.log(perimeterOfRectangle(20,34));

function volumeOfRectPrism(l, w, h) {
   return l*w*h;
} console.log(volumeOfRectPrism(2, 5, 4));

function areaOfCircle(r) {
   return Math.PI * r * r;
} console.log(areaOfCircle(5));

function circumOfCircle(r) {
   return 2 * Math.PI * r;
} console.log(circumOfCircle(10));

function densityOfSubstance (m, v) {
   return m/v;
} console.log(densityOfSubstance(23, 2));

function calcSpeed(d, t) {
   return d/t;
} console.log(calcSpeed(10,20))

function calcWeight(m,g) {
   return m*g;
} console.log(calcWeight(10,20))

function celciusToFahrenheit(c) {
   return (c * (9/5)) + 32;
} console.log(celciusToFahrenheit(30));

function calcBMI(w, h) {
   return w/(h*h);
} 
let BMI = calcBMI(66, 1.78);
if (BMI < 18.5) 
    console.log("Underweight");
else if (BMI < 24.9)   
   console.log("Normal Weight");
else if (BMI < 29.9) {
   console.log("Overweight");
} else {
   console.log("OBESE!")
}; 

function checkSeason(month) {
   let season;
   
   switch (month.toLowerCase()) {
      case "september":
      case "october":
      case "november":
         season = "Autumn";
         break;
   
      case "december":
      case "january":
      case "february":
         season = "Winter";
         break;
   
      case "march":
      case "april":
      case "may":
         season = "Spring";
   
      case "june":
      case "july":
      case "august":
         season = "Summer";
         break;
   }
   return season;
} console.log(checkSeason("DecEMBer"));

function swapValues(a, b) {
   return [b, a];
}
let x = 1; 
let y = 2; 
console.log(swapValues(x, y));


