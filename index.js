//! Start by creating the variables for the data recorded
const day1TempF = 32;

const day2TempC = 25;

const day3TempF = 70;

const day4TempC = 18;

const day5TempF = 80;

const day6TempC = 15;

const day7TempF = 72;

const day8TempC = 28;

const day9TempF = 68;

const day10TempC = 20;

const day11TempF = 75;

const day12TempC = 23;

const day13TempF = 82;

const day14TempC = 30;

const day15TempF = 65;

const day16TempC = 22;

const day17TempF = 77;

const day18TempC = 26;

const day19TempF = 78;

const day20TempC = 24;

const day21TempF = 73;

const day22TempC = 21;

const day23TempF = 79;

const day24TempC = 27;

const day25TempF = 71;

const day26TempC = 19;

const day27TempF = 74;

const day28TempC = 17;

const day29TempF = 76;

const day30TempC = 29;


//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

const celsius = [25, 18, 15, 28, 20, 23, 30, 22, 26, 24, 21, 27, 19, 17, 29]
const farenheit = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76]
const totalDays = celsius.length + farenheit.length

//converts farenheit to celsius:
function temperature_to_celsius(temp) {
    return (temp - 32) * 5/9;
}

//converts celsius to farenheit:
function temperature_to_farenheit(temp) {
    return (temp * 9/5) + 32;
}

//! Start the calculation of the total temperatures

//calculating celsius total:
let tot_temperature_in_celsius = 0;

//Add numbers already in celsius:
for (let i = 0; i < celsius.length; i++) {
        tot_temperature_in_celsius = tot_temperature_in_celsius + celsius[i];
        //Convert farenheit to celsius then adds original celsius data:        
}

for (let j = 0; j < farenheit.length; j++) {
    tot_temperature_in_celsius = tot_temperature_in_celsius + temperature_to_celsius(farenheit[j]);
}


//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//calculating farenheit total:
let tot_temperature_in_fahrenheit = 0;


//adding the data already in farenheit:
for (let h = 0; h < farenheit.length; h++) {
    tot_temperature_in_fahrenheit = tot_temperature_in_fahrenheit + farenheit[h];
}


//convert celsius to farenheit and add them:
for (let k = 0; k < celsius.length; k++) {
    tot_temperature_in_fahrenheit = tot_temperature_in_fahrenheit + temperature_to_farenheit(celsius[k]);
    
}


//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

let avg_temperature_in_celsius = tot_temperature_in_celsius / totalDays

let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / totalDays

//! Console.log the results for your own inspection if you'd like

console.log("Total temp (C): ", tot_temperature_in_celsius);
console.log("Average temp (C): ", avg_temperature_in_celsius);
console.log("Total temp (F): ", tot_temperature_in_fahrenheit);
console.log("Average temp (F): ", avg_temperature_in_fahrenheit);

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};
