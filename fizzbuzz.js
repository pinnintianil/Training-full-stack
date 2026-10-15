
const fizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
};

const numbers = Array.from({ length: 30 }, (_, index) => index + 1);

numbers.forEach((number) => {
  console.log(fizzBuzz(number));
});
