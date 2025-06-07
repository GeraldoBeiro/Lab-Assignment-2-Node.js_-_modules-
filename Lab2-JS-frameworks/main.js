import { greetUser, celsiusToFahrenheit, factorial, isPalindrome } from './functions.js';

// Calling the first function
greetUser('Esteban', 'Salazar');

const result = celsiusToFahrenheit(25);
console.log(`25°C is equal to ${result}°F`);

const num = 5;
const fact = factorial(num);
console.log(`The factorial of ${num} is ${fact}`);

const word = 'Racecar';
const isPal = isPalindrome(word);
console.log(`Is "${word}" a palindrome? ${isPal ? 'Yes' : 'No'}`);