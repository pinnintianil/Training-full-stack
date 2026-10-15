
const reverseString = (text) => {
  let reversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversed = reversed + text[i];
  }

  return reversed;
};

const originalString = "JavaScript";
const reversedString = reverseString(originalString);

console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);

const name = "Anil";
const reverseName = reverseString(name);

console.log("Original Name:", name);
console.log("Reversed Name:", reverseName);

const word = "Hello";
console.log("Original Word:", word);
console.log("Reverse Word:", reverseString(word));

const city = "Hyderabad";
console.log("Original City:", city);
console.log("Reversed City:", reverseString(city));

const language = "Python";
console.log("Original Language:", language);
console.log("Reversed Language:", reverseString(language));
