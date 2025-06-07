export function greetUser(firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName} to Georgian College`);
}

// Function 2: Convert Celsius to Fahrenheit
export function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

// Function 3: Calculate factorial
export function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Function 4: Check if a string is a palindrome
export function isPalindrome(text) {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

