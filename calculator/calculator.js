var num1;
var num2;
var operator;

num1 = parseInt(prompt("Please enter your first number"));

num2 = parseInt(prompt("Now enter your second number"));

operator = prompt("Now enter the operation you would like to perform");

if (operator == "+") {
  operator = num1 + num2;
}
else if (operator == "-") {
    operator = num1 - num2;
}
else if (operator == "*") {
    operator = num1 * num2;
}
else if (operator == "/") {
    operator = num1 / num2;
}
alert("Your answer is " + operator);
