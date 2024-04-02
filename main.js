"use strict";
function greet() {
    return "Good Morning!";
}
let message = greet();
console.log(message);
function favFood() {
    return "Pizza";
}
console.log(favFood());
function todaysTask() {
    return "Physiology Assignment";
}
console.log(todaysTask());
function finalResult() {
    return "A+";
}
console.log(finalResult());
function num(num = 5, num2 = 5) {
    return "num (5 = 5)";
}
console.log(num());
function planAPicnic() {
    let picnicPoint = "Manora Beach";
    return picnicPoint;
}
let picnicPoint = planAPicnic();
console.log(planAPicnic());
